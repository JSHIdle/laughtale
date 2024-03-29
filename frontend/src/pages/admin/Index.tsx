
import Header from '../../components/common/Header';
import {CartoonInfoComponent} from "../../components/admin/CartoonInfoComponent.tsx";
import {FileUploadComponent} from "../../components/admin/FileUploadComponent.tsx";
import {useCallback, useRef, useState} from "react";
import client from "../../apis";
import Spinner from "../../components/common/Spinner.tsx";

const Index = () => {
    const [cartoonInfo, setCartoonInfo] = useState({
        title: '',
        author: '',
        genres: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);

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
        formData.append("manga", new Blob([JSON.stringify(cartoonInfo)], {
            type: "application/json"
        }));

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
            console.log(key, value);
        }

        // FormData를 사용하여 백엔드로 데이터 전송
        try {
            // const response = await client.post('http://j10a705.p.ssafy.io/api/manga/upload', {
            //      formData,{header}
            // });
            setLoading(true);
            await client.post(`/manga/upload`, formData, {
                headers:{
                    "Content-Type":"multipart/form-data"
                },

            }).then((response) => console.log(response.data));
            setLoading(false);

            // if (response.ok) {
            //     console.log('Upload successful');
            // } else {
            //     console.error('Upload failed');
            // }
        } catch (error) {
            setLoading(false);

            console.error('Error:', error);
        }
    };


    return <div className="bg-[#1D1D21] min-h-screen relative">
        {
            loading ?
                <div className="absolute" style={{top: "50%", left: "50%", right: "50%", bottom: "50%"}}><Spinner/>
                </div> : <></>
        }
        <div className="max-w-[700px] m-auto">
            <div>
                <Header/>
            </div>
            <div className="text-white font-bold pt-10 pb-3">신규만화 등록</div>
            <div>
                <CartoonInfoComponent
                    title={cartoonInfo.title}
                    author={cartoonInfo.author}
                    genres={cartoonInfo.genres}
                    description={cartoonInfo.description}
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