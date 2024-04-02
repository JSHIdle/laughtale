import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Chart = () => {
    const svgRef = useRef(null);
    const [viewRange, setViewRange] = useState('all');


    // const [dataPoints, setDataPoints] = useState([
    const [dataPoints, ] = useState([
        { level: 1, repeatCnt: 1, date: new Date('2024-04-02T09:00:00'), title: "Data Point 1" },
        { level: 1, repeatCnt: 2, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 1, repeatCnt: 3, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 1, repeatCnt: 4, date: new Date('2024-04-02T09:00:00'), title: "Data Point 1" },
        { level: 1, repeatCnt: 5, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 2, repeatCnt: 1, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 2, repeatCnt: 2, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 2, repeatCnt: 3, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 2, repeatCnt: 4, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 2, repeatCnt: 5, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 3, repeatCnt: 1, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 3, repeatCnt: 2, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 4, repeatCnt: 3, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 4, repeatCnt: 4, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        { level: 5, repeatCnt: 5, date: new Date('2024-04-02T09:00:00'), title: "Data Point 2" },
        // ...더 많은 데이터 포인트{ level: 2, repeatCnt: 1, date: new Date('2024-04-01T14:00:00'), title: "Data Point 2" },
    ]);

    // 함수 배열
    const functions = [
        (x :number) => 184 / (Math.pow(Math.log(x), 1.25) + 1.84), //1레벨 1회 학습
        (x :number) => 360 / (Math.pow(Math.log(x), 1.25) + 3.6), //1레벨 2회 학습
        (x :number) => 640 / (Math.pow(Math.log(x), 1.25) + 6.4), //1레벨 3회 학습
        (x :number) => 1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //1레벨 4회 학습
        (x :number) => 2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //1레벨 5회 학습
        (x :number) => 2*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //2레벨 1회 학습
        (x :number) => 2*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //2레벨 2회 학습
        (x :number) => 2*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //2레벨 3회 학습
        (x :number) => 2*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //2레벨 4회 학습
        (x :number) => 2*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //2레벨 5회 학습
        (x :number) => 3*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //3레벨 1회 학습
        (x :number) => 3*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //3레벨 2회 학습
        (x :number) => 3*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //3레벨 3회 학습
        (x :number) => 3*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //3레벨 4회 학습
        (x :number) => 3*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //3레벨 5회 학습
        (x :number) => 4*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //4레벨 1회 학습
        (x :number) => 4*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //4레벨 2회 학습
        (x :number) => 4*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //4레벨 3회 학습
        (x :number) => 4*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //4레벨 4회 학습
        (x :number) => 4*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //4레벨 5회 학습
        (x :number) => 5*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //5레벨 1회 학습
        (x :number) => 5*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //5레벨 2회 학습
        (x :number) => 5*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //5레벨 3회 학습
        (x :number) => 5*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //5레벨 4회 학습
        (x :number) => 5*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //5레벨 5회 학습
    ];

    // 레벨별 색상을 정의합니다.
    const levelColors = ['rgb(173,86,0)', 'rgb(67,95,122)', 'rgb(236,154,0)', 'rgb(39,226,164)', 'rgb(0,180,252)'];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
            const svg = d3.select(svgRef.current);
            svg.selectAll("*").remove(); // 기존 그래프를 지웁니다.

            const width = 650;
            const height = 550;
            const margin = { top: 20, right: 20, bottom: 50, left: 50 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;

        // 스케일 설정
        const xScale = d3.scaleLinear()
            .domain([1, 500])
            .range([0, innerWidth]); // xScale의 시작점을 0으로 설정합니다.

        const yScale = d3.scaleLinear()
            .domain([0, 500])
            .range([innerHeight, 0]); // yScale의 시작점을 innerHeight로 설정하여 아래쪽에서 시작하도록 합니다.

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        g.append('g')
            .call(d3.axisLeft(yScale).ticks(5).tickFormat(d => `${+d / 100}`))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("x", -210)
            .attr("y", -30)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("획득 포인트");

        g.append('g')
            .call(d3.axisBottom(xScale))
            .attr('transform', `translate(0,${innerHeight})`)
            .append("text")
            .attr("fill", "#000")
            .attr("y", 40)
            .attr("x", innerWidth / 2)
            .attr("text-anchor", "end")
            .text("학습경과시간(분)");

        // line 생성기 설정
        const line = d3.line<[number, number]>() // 타입 어설션 추가
            .x(d => xScale(d[0]))
            .y(d => yScale(d[1]))
            .curve(d3.curveMonotoneX);

        const colors = ['rgba(237,28,36,0.5)', 'rgba(255,127,39,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)', 'rgba(134,0,134,0.5)']; // 레벨별 색상

        // 필터링 로직을 추가하여 현재 선택된 범위에 따라 표시할 함수를 결정합니다.
        const filteredFunctions = viewRange === 'all'
            ? functions
            : functions.slice(parseInt(viewRange.split('-')[0]), parseInt(viewRange.split('-')[1]) + 1);

        // 각 레벨별로 그래프를 그립니다.
        filteredFunctions.forEach((func, index) => {
            const data: [number, number][] = Array.from({ length: 500 }, (_, i) => [i + 1, func(i + 1)]); // 명시적 타입 어설션
            g.append('path')
                .datum(data) // 직접 데이터 전달
                .attr('fill', 'none')
                .attr('stroke', colors[index % colors.length])
                .attr('d', line); // 수정된 부분
        });

        // 데이터 포인트를 차트에 표시하는 로직
        dataPoints.forEach(dataPoint => {
            // level과 repeatCnt를 통해 함수 배열의 인덱스를 계산
            const funcIndex = (dataPoint.level - 1) * 5 + dataPoint.repeatCnt - 1;
            const selectedFunction = functions[funcIndex];

            // 현재 시간과 데이터의 date 차이를 분 단위로 계산
            const diffInMinutes = Math.floor((new Date().getTime() - new Date(dataPoint.date).getTime()) / (1000 * 60)) + 1;
            // 함수를 사용하여 y 값을 계산
            const yValue = selectedFunction(diffInMinutes);

            // 레벨에 따른 색상을 가져옵니다.
            const color = levelColors[dataPoint.level - 1] || 'black';

            // 점을 차트에 추가
            const group = d3.select(svgRef.current).append('g');
            group.append('circle')
                .attr('cx', xScale(diffInMinutes)+50)
                .attr('cy', yScale(yValue)+20)
                .attr('r', 3)
                .attr('fill', color)
                // .attr('stroke', 'black') //테두리
                .attr('stroke-width', 1)
                .append('title')
                .text(`${dataPoint.title}\nLevel : ${dataPoint.level}\n학습횟수 : ${dataPoint.repeatCnt}\n경과시간 : ${diffInMinutes}분\n획득포인트 :${yValue/100}`);
        });

    }, [viewRange, dataPoints]);


    //레벨별 버튼 생성
    const renderLevelButtons = () => {
        const buttons = [];
        // 'all'은 특별한 경우이므로 별도로 처리합니다.
        buttons.push(
            <button
                key="all"
                onClick={() => setViewRange('all')}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 px-4 rounded transition duration-200 ease-in-out"
            >
                전체보기
            </button>
        );

        // 레벨별 색상 클래스
        const colorClasses = [
            'bg-custom-bronze hover:bg-custom-bronze-dark',
            'bg-custom-silver hover:bg-custom-silver-dark',
            'bg-custom-gold hover:bg-custom-gold-dark',
            'bg-custom-platinum hover:bg-custom-platinum-dark',
            'bg-custom-diamond hover:bg-custom-diamond-dark',
        ];

        // 레벨별 버튼을 생성
        colorClasses.forEach((colorClass, index) => {
            const level = index + 1; // 레벨은 1부터 시작합니다.
            buttons.push(
                <button
                    key={level}
                    onClick={() => setViewRange(`${(level - 1) * 5}-${level * 5 - 1}`)}
                    className={`py-2 px-4 rounded transition duration-200 ease-in-out ${colorClass} text-white`}
                >
                    {level}레벨
                </button>
            );
        });
        return buttons;
    }; //레벨 버튼 생성


    return (
        <div>
            <svg ref={svgRef} width={650} height={550}/>
            <div className="flex flex-wrap gap-2">
                {renderLevelButtons()}
            </div>
        </div>
    );
};

export default Chart;
