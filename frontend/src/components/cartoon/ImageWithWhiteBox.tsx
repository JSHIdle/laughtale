import React, { useRef, useEffect } from 'react';

function ImageWithWhiteBox({ src, boxCoordinates, sentence, scaleFactor = 0.5}) {
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
            context.fillStyle = '#79a5e7';
            context.fillRect(scaledX, scaledY, scaledBoxWidth+1, scaledBoxHeight+1);

            // 문장에서 입력받은 단어 지우기
            // const modifiedSentence = sentence.replace(new RegExp(replaceWord, 'gi'), '___');

            // 텍스트 추가
            // context.fillStyle = 'green'; // 텍스트 색상 설정
            // context.font = `bold ${20 * scaleFactor}px Arial`;

            // 조정된 박스의 중앙 좌표 계산
            // const centerX = scaledX + scaledBoxWidth / 2;
            // const centerY = scaledY + scaledBoxHeight / 2;

            // 조정된 크기와 위치로 텍스트 그리기
            context.textAlign = "center";
            context.textBaseline = "middle";
            // context.fillText(modifiedSentence, centerX, centerY);
        };

        image.src = src;
    }, [src, boxCoordinates, sentence, scaleFactor]);

    return <canvas ref={canvasRef} />;
}

export default ImageWithWhiteBox;
