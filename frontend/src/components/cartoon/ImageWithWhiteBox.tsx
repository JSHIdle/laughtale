import React, { useRef, useEffect } from 'react';

function ImageWithWhiteBox({ src, boxCoordinates, sentence }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();

        // 이미지가 로드되면 캔버스에 그리고 사각형 영역을 채움
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            //캔버스의 높이와 넓이를 입력으로 들어온 이미지의 높이와 넓이와 맞춘다
            context.drawImage(image, 0, 0);
            // 이미지의 0,0 위치에서 그린다.
            // 하얀색 사각형 그리기
            context.fillStyle = 'white';
            // boxCoordinates는 [x, y, width, height] 형태로 가정
            context.fillRect(...boxCoordinates);

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
    }, [src, boxCoordinates]);

    return <canvas ref={canvasRef} />;
}

export default ImageWithWhiteBox;