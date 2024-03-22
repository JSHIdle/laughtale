
import Header from '../../components/common/Header';
import {CartoonInfoComponent} from "../../components/admin/CartoonInfoComponent.tsx";
import {FileUploadComponent} from "../../components/admin/FileUploadComponent.tsx";
import {useCallback, useRef, useState} from "react";

const Index = () => {
    const [cartoonInfo, setCartoonInfo] = useState({
        title: '',
        author: '',
        genre: '',
        summary: ''
    });

    const handleChange = useCallback((e) => {
        setCartoonInfo({
            ...cartoonInfo,
            [e.target.name]: e.target.value
        });
    }, [cartoonInfo]);

    const thumbnailInputRef = useRef(null);
    const filesInputRef = useRef(null);

    const handleSubmit = async () => {
        const formData = new FormData();

        // 1. 만화 정보를 JSON 형식으로 추가
        formData.append("manga", JSON.stringify(cartoonInfo));

        // 2. 썸네일 이미지 파일 추가
        if (thumbnailInputRef.current?.files[0]) {
            formData.append("thumbnail", thumbnailInputRef.current.files[0]);
        }

        // 3. 만화 파일들 추가
        if (filesInputRef.current?.files) {
            for (const file of filesInputRef.current.files) {
                formData.append("files", file);
            }
        }

        // FormData 내용을 콘솔에 출력하기 위한 로직 추가
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // FormData를 사용하여 백엔드로 데이터 전송
        // try {
        //     const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        //         method: 'POST',
        //         body: formData,
        //         // multipart/form-data 타입은 fetch가 자동으로 설정함
        //     });
        //
        //     if (response.ok) {
        //         console.log('Upload successful');
        //     } else {
        //         console.error('Upload failed');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };


    return <div className="bg-[#1D1D21] min-h-screen">
        <div className="max-w-[700px] m-auto">
            <div>
                <Header/>
            </div>
            <div className="text-white font-bold pt-10 pb-3">신규만화 등록</div>
            <div>
                <CartoonInfoComponent
                    title={cartoonInfo.title}
                    author={cartoonInfo.author}
                    genre={cartoonInfo.genre}
                    summary={cartoonInfo.summary}
                    onChange={handleChange}
                />
            </div>
            <div>
                <FileUploadComponent
                    thumbnailInputRef={thumbnailInputRef}
                    filesInputRef={filesInputRef}
                />
            </div>
            <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded">
                등록하기
            </button>
        </div>
    </div>
}

export default Index;