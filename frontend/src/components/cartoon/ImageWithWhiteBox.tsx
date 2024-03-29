import React, { useRef, useEffect } from 'react';

function ImageWithWhiteBox({ src, boxCoordinates, sentence, scaleFactor = 0.7 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();

        image.onload = () => {
            // 이미지와 박스, 텍스트의 크기를 scaleFactor로 조정
            const scaledWidth = image.width * scaleFactor;
            const scaledHeight = image.height * scaleFactor;
            const scaledX = boxCoordinates.x * scaleFactor;
            const scaledY = boxCoordinates.y * scaleFactor;
            const scaledBoxWidth = boxCoordinates.width * scaleFactor;
            const scaledBoxHeight = boxCoordinates.height * scaleFactor;

            // 캔버스의 크기를 조정된 이미지의 크기로 설정
            canvas.width = scaledWidth;
            canvas.height = scaledHeight;

            // 조정된 크기로 이미지 그리기
            context.drawImage(image, 0, 0, scaledWidth, scaledHeight);

            // 조정된 크기와 위치로 하얀색 사각형 그리기
            context.fillStyle = 'white';
            context.fillRect(scaledX, scaledY, scaledBoxWidth, scaledBoxHeight);

            // 텍스트 추가
            const text = sentence; // 추가할 텍스트
            context.fillStyle = 'black'; // 텍스트 색상 설정
            context.font = '20px Arial'; // 텍스트 스타일 설정

            // 텍스트 정렬 설정
            context.textAlign = "center";
            context.textBaseline = "middle";

            // 박스의 중앙 좌표 계산
            var centerX = boxCoordinates.x + boxCoordinates.width / 2;
            var centerY = boxCoordinates.y + boxCoordinates.height / 2;

            context.fillText(text, centerX, centerY); // 텍스트 그리기
        };

        image.src = src; // 이미지 URL을 할당해서 이미지 로드를 시작한다.
        // 이 로드가 완료되면 위 코드의 image.onload를 실행한다.
    }, [src, boxCoordinates, sentence, scaleFactor]);

    return <canvas ref={canvasRef} />;
}

export default ImageWithWhiteBox;