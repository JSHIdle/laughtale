package com.jshi.laughtale.ebbinghaus;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

/*
에빙하우스 망각 곡선 계산
*/
@Service
public class EbbinghausUtils {

	//현재 단어를 기억할 확률을 반환한다
	public double calculateMemory(LocalDateTime lastStudyTime, int studyCnt) {
		return Ebbinghaus(calculateMinutesPassed(lastStudyTime), studyCnt);
	}

	private Double calculateMinutesPassed(LocalDateTime lastStudyTime) {
		LocalDateTime currentTime = LocalDateTime.now();
		Duration duration = Duration.between(lastStudyTime, currentTime);
		return (double)duration.toMinutes();
	}

	public Double Ebbinghaus(Double minutesPassed, int studyCnt) {
		double k = 1.84;
		double c = 1.25;
		double a = 2.0;
		return (100 * k * Math.pow(a, studyCnt - 1)) /
			(Math.pow(Math.log(minutesPassed), c) + k * Math.pow(a, studyCnt - 1));
	}

}
