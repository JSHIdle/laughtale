import React, { useRef, useEffect } from 'react';

function ImageWithDottedBoxAndQuestionMark({ src, boxCoordinates, scaleFactor = 0.5 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();

        image.onload = () => {
            const scaledWidth = image.width * scaleFactor;
            const scaledHeight = image.height * scaleFactor;
            const scaledX = boxCoordinates.x * scaleFactor;
            const scaledY = boxCoordinates.y * scaleFactor;
            const scaledBoxWidth = boxCoordinates.width * scaleFactor;
            const scaledBoxHeight = boxCoordinates.height * scaleFactor;

            canvas.width = scaledWidth;
            canvas.height = scaledHeight;
            context.drawImage(image, 0, 0, scaledWidth, scaledHeight);

            // 사각형 채우기
            context.fillStyle = 'white';
            context.fillRect(scaledX, scaledY, scaledBoxWidth, scaledBoxHeight);

            // 사각형 테두리 그리기
            context.strokeStyle = 'blue';
            context.setLineDash([5, 3]); // 점선 패턴 설정
            context.lineWidth = 4; // 선의 두께를 더 두껍게 설정
            context.strokeRect(scaledX, scaledY, scaledBoxWidth, scaledBoxHeight);

            // '?' 문자 그리기
            context.fillStyle = '#000';
            context.font = `bold ${40 * scaleFactor}px Arial`;
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText('?', scaledX + scaledBoxWidth / 2, scaledY + scaledBoxHeight / 2);
        };

        image.src = src;
    }, [src, boxCoordinates, scaleFactor]);

    return <canvas ref={canvasRef} />;
}

export default ImageWithDottedBoxAndQuestionMark;
