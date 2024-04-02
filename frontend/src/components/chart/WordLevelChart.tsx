import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WordLevelChart = ({ data }) => {
    const options = {
        maintainAspectRatio: false,
        indexAxis: 'y' as const, // 가로 막대 그래프로 만들기 위해 'y' 축을 인덱스 축으로 설정
        elements: {
            bar: {
                borderWidth: 0,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false, // 범례 숨기기
            },
            title: {
                display: false,
                text: '단어 난이도별 개수 비교',
                color: '#000000',
                font: {
                    size: 11,
                },
            },
        },
        scales: {
            x: { // 가로축 설정
                ticks: {
                    display:true,
                    color: '#000000', // X축 라벨의 글씨 색상
                    font: {
                        size: 10, // X축 라벨의 글씨 크기
                    },
                },
                grid: {
                    display: false, // 가로축 그리드 라인 비활성화
                },
            },
            y: { // 세로축 설정
                ticks: {
                    color: '#000000', // Y축 라벨의 글씨 색상
                    font: {
                        size: 8, // Y축 라벨의 글씨 크기
                    },
                },
                grid: {
                    display: false, // 세로축 그리드 라인 활성화
                },
                barThickness: 24, // 막대 두께 고정 값
                categoryPercentage: 0.8, // 카테고리 내에서 막대가 차지하는 너비의 비율
                barPercentage: 0.7, // 막대가 카테고리 내에서 차지하는 비율
            }
        },
    };

    const chartData = {
        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'], // 세로축 라벨
        datasets: [
            {
                label: '단어 수',
                data: data, // 단어 수 데이터 배열
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: [
                    'rgb(173,86,0)',
                    'rgb(67,95,122)',
                    'rgb(236,154,0)',
                    'rgb(39,226,164)',
                    'rgb(0,180,252)',
                ], // 각 막대의 배경색
            },
        ],
    };

    return <Bar data={chartData} options={options} />;
};

export default WordLevelChart;
