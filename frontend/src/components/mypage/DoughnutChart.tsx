import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import client from "../../apis";

const Donut = () => {
    const [series, setSeries] = useState([]);
    const [labels, setLabels] = useState([]);

    // 레벨별 색상을 정의합니다.
    const levelColors = ['#58CE7E', '#E8974D', '#DAEE66', '#67B9E2', '#E970D6'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.get('/wordhistory/data');
                const data = response.data.historyList;
                console.log(data)

                // 레벨별 데이터 카운트
                const levelCount = data.reduce((acc, curr) => {
                    acc[curr.level] = (acc[curr.level] || 0) + 1;
                    return acc;
                }, {});

                // series와 labels 배열 생성
                const calculatedSeries = Object.values(levelCount);
                const calculatedLabels = Object.keys(levelCount).map(level => `Level ${level}`);

                setSeries(calculatedSeries);
                setLabels(calculatedLabels);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

    const options = {
        labels: labels as string[],
        colors: levelColors,
        legend: {
            position: 'bottom' as const, // 범례의 위치 설정 (예시)
        },
        plotOptions: {
            pie: {
                customScale: 1.0, // 도넛 차트의 크기 조절 (예시)
                donut: {
                    size: '50%', // 도넛 홀의 크기 (예시)
                },
            },
        },
    };

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut" width="320" />
        </div>
    );
};

export default Donut;
