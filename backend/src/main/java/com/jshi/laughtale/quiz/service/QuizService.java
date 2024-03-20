package com.jshi.laughtale.quiz.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.jshi.laughtale.choice.repository.ChoiceRepository;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.ebbinghaus.EbbinghausUtil;
import com.jshi.laughtale.member.repository.MemberRepository;
import com.jshi.laughtale.member.service.MemberService;
import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.quiz.mapper.QuizMapper;
import com.jshi.laughtale.security.details.CustomUserDetails;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.speech.service.SpeechService;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.service.WordDataService;
import com.jshi.laughtale.wordhistory.domain.WordHistory;
import com.jshi.laughtale.wordhistory.service.WordHistoryService;
import com.jshi.laughtale.wordlist.dto.QuizWord;
import com.jshi.laughtale.wordlist.service.WordListService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuizService {
	private final ChoiceRepository quizRepository;
	private final WordHistoryService wordHistoryService;
	private final MemberService memberService;
	private final WordListService wordListService;
	private final EbbinghausUtil ebbinghausUtil;
	private final SpeechService speechService;
	private final WordDataService wordDataService;

	public void makeNewQuiz(CustomUserDetails customUserDetails, int chapterId) {

		//사용자 실력을 받아온다
		int memberLevel = memberService.getMemberLevel(
			wordHistoryService.getMemberWordHistory(customUserDetails.getId()));

		//사용자 실력에 해당하는 단어목록을 가져온다
		List<QuizWord> quizWordList = wordListService.findWordListsWithLevel(memberLevel);
		//TODO : 단어가 모자랄 경우의 로직을 추가해야함
		// 단어가 충분하다고 가정하고 진행한다

		//위 단어들 중 사용자가 학습한 단어 목록을 가져온다
		List<Long> wordIdList = new ArrayList<>();
		for (QuizWord quizWord : quizWordList)
			wordIdList.add(quizWord.getWordDataId());
		List<WordHistory> wordHistoryList = wordHistoryService.findByWordIdIn(wordIdList);

		//사용자가 학습한 단어 목록을 wordHistoryMap에 저장한다
		Map<String, WordHistory> wordHistoryMap = new HashMap<>();
		for (WordHistory wordHistory : wordHistoryList)
			wordHistoryMap.put(wordHistory.getWordData().getWord(), wordHistory);

		//각 단어를 사용자의 가중치에서 찾는다
		int sum = 0;
		for (QuizWord quizWord : quizWordList) {
			if (wordHistoryMap.containsKey(quizWord.getWord())) {
				WordHistory word = wordHistoryMap.get(quizWord.getWord());
				int weight = (int)(100 * ebbinghausUtil.calculateMemory(word.getStudyDate(), word.getStudyCnt()));
				quizWord.setWeight(100 - weight);
				sum += 100 - weight;
			} else {
				quizWord.setWeight(100);
				sum += 100;
			}
		}

		//문제에 출제할 단어를 고른다
		List<QuizWord> selectedQuizWords = new ArrayList<>();
		for (int i = 0; i < 5; i++) {
			//랜덤 숫자를 뽑는다
			int nextWordIndex = (int)(Math.random() * sum) + 1;
			int idx = 0;
			int sumWeight = 0;
			while (idx < quizWordList.size() && quizWordList.get(idx).getWeight() + sumWeight < nextWordIndex)
				idx++;
			QuizWord selectedQuizWord = quizWordList.get(idx);
			quizWordList.remove(idx);
			sum -= selectedQuizWord.getWeight();
			selectedQuizWords.add(selectedQuizWord);
		}

		//각 문제에 필요한 정보를 추가한다
		for (QuizWord selectedQuizWord : selectedQuizWords) {
			//단어가 등장한 말풍선의 좌표를 구한다
			Speech speech = speechService.findById(selectedQuizWord.getSpeechId());
			Position position = speech.getPosition();
			selectedQuizWord.addPositionToQuizWord(position);

			//단어가 등장한 이미지 URL을 구한다
			Cut cut = speech.getCut();
			String imageUrl = cut.getImageUrl();
			selectedQuizWord.setImageUrl(imageUrl);

			//각 문제에 보기를 추가
			Set<String> optionSet = new HashSet<>();
			while (optionSet.size() < 3) {
				int randomIdx = (int)(Math.random() * quizWordList.size());
				optionSet.add(quizWordList.get(randomIdx).getWord());
			}
			selectedQuizWord.setOptionSet(optionSet.stream().toList());

			//단어 뜻을 추가한다
			selectedQuizWord.setDefinition(wordDataService.findDefinitionByWord(selectedQuizWord.getWord()));
		}

		//현재 문제 객체에 추가된 정보
		//이미지 URL
		//단어
		//보기1, 보기2, 보기3, 보기4
		//필요한 정보
		//단어 뜻
	}
}
