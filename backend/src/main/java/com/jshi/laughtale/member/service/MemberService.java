package com.jshi.laughtale.member.service;

import com.jshi.laughtale.ebbinghaus.EbbinghausUtil;
import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.member.dto.MemberLogin;
import com.jshi.laughtale.member.dto.MemberSignup;
import com.jshi.laughtale.member.dto.MemberUpdate;
import com.jshi.laughtale.member.exception.MemberNotFoundException;
import com.jshi.laughtale.member.exception.PasswordNotMatchesException;
import com.jshi.laughtale.member.mapper.MemberMapper;
import com.jshi.laughtale.member.repository.MemberRepository;
import com.jshi.laughtale.security.details.CustomUserDetails;
import com.jshi.laughtale.security.jwt.JwtProcessor;
import com.jshi.laughtale.wordhistory.domain.WordHistory;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtProcessor jwtProcessor;
	private final EbbinghausUtil ebbinghausUtil;

	@Transactional(readOnly = true)
	public MemberLogin.Response login(MemberLogin.Request login) {
		Member member = memberRepository.findByEmail(login.getEmail()).orElseThrow(MemberNotFoundException::new);
		if (!passwordEncoder.matches(login.getPassword(), member.getPassword())) {
			throw new PasswordNotMatchesException();
		}
		String token = jwtProcessor.createJwtToken(member.getEmail(), member.getRole().value());
		return MemberMapper.toLoginResponse(token);
	}

	public void signup(MemberSignup.Request signup) {
		signup.setPassword(passwordEncoder.encode(signup.getPassword()));
		memberRepository.save(MemberMapper.signupToMember(signup));
	}

	public void update(CustomUserDetails customUserDetails, MemberUpdate.Request update) {
		Member member = memberRepository.findByEmail(customUserDetails.getEmail())
			.orElseThrow(MemberNotFoundException::new);
		Optional.ofNullable(update.getPassword()).ifPresent(member::updatePassword);
		Optional.ofNullable(update.getNickname()).ifPresent(member::updateNickname);
	}

	public void updateRole(MemberUpdate.RoleRequest updateRole) {
		Member member = memberRepository.findByEmail(updateRole.getEmail()).orElseThrow(MemberNotFoundException::new);
		member.updateRole(updateRole.getRole());
	}

	public void withdraw(CustomUserDetails customUserDetails) {
		Member member = memberRepository.findByEmail(customUserDetails.getEmail())
			.orElseThrow(MemberNotFoundException::new);
		memberRepository.delete(member);
	}

	public int getMemberLevel(List<WordHistory> wordHistoryList) {
		//사용자의 실력 추정 값을 반환
		double sum = 0.0;
		for (WordHistory wordHistory : wordHistoryList) {
			int wordLevel = wordHistory.getWordData().getLevel();
			sum += wordLevel * ebbinghausUtil.calculateMemory(wordHistory.getStudyDate(), wordHistory.getStudyCnt());
		}
		return (int)Math.round(sum / wordHistoryList.size());
	}

}