
import Header from '../../components/common/Header';
import {CartoonInfoComponent} from "../../components/admin/CartoonInfoComponent.tsx";
import {FileUploadComponent} from "../../components/admin/FileUploadComponent.tsx";
import {useCallback, useState} from "react";

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

    const handleThumbnailUpload = (file: File) => {
        // 썸네일 업로드 처리 로직
        console.log('Thumbnail uploaded:', file);
    };

    const handleFileUpload = (file: File) => {
        // 파일 업로드 처리 로직
        console.log('File uploaded:', file);
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
                    onThumbnailUpload={handleThumbnailUpload}
                    onFileUpload={handleFileUpload}
                />
            </div>

        </div>
    </div>
}

export default Index;