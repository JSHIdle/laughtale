// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
//
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
//
// const Graph = () => {
//     // X 값 범위 설정을 1부터 500까지로 변경
//     const xValues = Array.from({ length: 500 }, (_, i) => i + 1);
//
//     // 함수 배열
//     const functions = [
//         (x :number) => 184 / (Math.pow(Math.log(x), 1.25) + 1.84), //1레벨 1회 학습
//         (x :number) => 360 / (Math.pow(Math.log(x), 1.25) + 3.6), //1레벨 2회 학습
//         (x :number) => 640 / (Math.pow(Math.log(x), 1.25) + 6.4), //1레벨 3회 학습
//         (x :number) => 1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //1레벨 4회 학습
//         (x :number) => 2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //1레벨 5회 학습
//         (x :number) => 2*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //2레벨 1회 학습
//         (x :number) => 2*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //2레벨 2회 학습
//         (x :number) => 2*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //2레벨 3회 학습
//         (x :number) => 2*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //2레벨 4회 학습
//         (x :number) => 2*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //2레벨 5회 학습
//         (x :number) => 3*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //3레벨 1회 학습
//         (x :number) => 3*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //3레벨 2회 학습
//         (x :number) => 3*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //3레벨 3회 학습
//         (x :number) => 3*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //3레벨 4회 학습
//         (x :number) => 3*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //3레벨 5회 학습
//         (x :number) => 4*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //4레벨 1회 학습
//         (x :number) => 4*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //4레벨 2회 학습
//         (x :number) => 4*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //4레벨 3회 학습
//         (x :number) => 4*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //4레벨 4회 학습
//         (x :number) => 4*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //4레벨 5회 학습
//         (x :number) => 5*184 / (Math.pow(Math.log(x), 1.25) + 1.84), //5레벨 1회 학습
//         (x :number) => 5*360 / (Math.pow(Math.log(x), 1.25) + 3.6), //5레벨 2회 학습
//         (x :number) => 5*640 / (Math.pow(Math.log(x), 1.25) + 6.4), //5레벨 3회 학습
//         (x :number) => 5*1280 / (Math.pow(Math.log(x), 1.25) + 12.8), //5레벨 4회 학습
//         (x :number) => 5*2560 / (Math.pow(Math.log(x), 1.25) + 25.6), //5레벨 5회 학습
//
//     ];
//
//     // 데이터셋 생성
//     const datasets = functions.map((func, index) => ({
//         label: `Level ${Math.floor(index / 5) + 1} Study ${index % 5 + 1}`,
//         data: xValues.map(x => func(x)), // 각 X 값에 대한 Y 값을 계산
//         borderColor: ['blue', 'red', 'green', 'purple', 'orange'][Math.floor(index / 5) % 5],
//         backgroundColor: ['blue', 'red', 'green', 'purple', 'orange'][Math.floor(index / 5) % 5],
//         fill: false,
//         tension: 0.1,
//     }));
//
//     const data = {
//         labels: xValues,
//         datasets,
//     };
//
//     const options = {
//         scales: {
//             x: {
//                 min: 0, // X축의 시작 값을 0으로 설정
//                 max: 500, // X축의 최대 값을 500으로 설정
//                 ticks: {
//                     stepSize: 100 // X축에 표시되는 값의 간격
//                 }
//             },
//             y: {
//                 min: 0, // Y축의 시작 값을 0으로 설정
//                 max: 500, // Y축의 최대 값을 500으로 설정
//                 ticks: {
//                     stepSize: 100 // Y축에 표시되는 값의 간격
//                 }
//             }
//         },
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Function Graphs by Level and Study Times',
//             },
//         },
//     };
//
//     return <Line data={data} options={options} />;
// };
//
// export default Graph;
