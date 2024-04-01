// FileUploadComponent.tsx
import { useState } from 'react';

export const FileUploadComponent = ({ thumbnailInputRef, filesInputRef }) => {
    const [thumbnailPreview, setThumbnailPreview] = useState('');
    const [comicFiles, setComicFiles] = useState([]);
    const [previewImage, setPreviewImage] = useState('');

    const handleThumbnailChange = (event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            setThumbnailPreview(URL.createObjectURL(file));
        }
        console.log(thumbnailInputRef.current)
        console.log(input.files[0])
    };

    const handleAddComicFiles = (event) => {
        const input = event.target as HTMLInputElement;
        const newFiles = Array.from(input.files || []);
        setComicFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleFileClick = (file) => {
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleDeleteFile = (fileToDelete) => {
        setComicFiles(comicFiles.filter((file) => file !== fileToDelete));
    };


    return (
        <div className="flex gap-4">
            {/* Thumbnail Upload */}
            <div className="w-1/3 bg-gray-800 p-6 rounded-lg mt-4 flex flex-col">
                <div className="mb-2 font-bold text-gray-300">썸네일 등록</div>
                <label
                    className="w-56 h-80 bg-gray-500 bg-no-repeat bg-center bg-cover rounded border-2 border-blue-400 flex items-center justify-center cursor-pointer">
                    {thumbnailPreview ? (
                        <img src={thumbnailPreview} alt="Thumbnail preview" className="rounded cursor-pointer"/>
                    ) : (
                        <div className="flex flex-col items-center justify-center cursor-pointer">
                            <span className="text-gray-400">클릭하여 이미지를 </span>
                            <span className="text-gray-400">선택하세요</span>
                            <span className="text-gray-400">355 x 485</span>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={thumbnailInputRef}
                        className="hidden"
                        onChange={handleThumbnailChange}
                        accept="image/*"
                    />
                </label>
            </div>

            {/* Comic Files Upload */}
            <div className="w-1/2 bg-gray-800 p-6 rounded-lg mt-4 flex flex-col">
                <div className="mb-2 font-bold text-gray-300">만화 파일 등록</div>
                <div className="overflow-auto h-56 border-2 border-gray-500 rounded-lg p-2">
                    {comicFiles.map((file, index) => (
                        <div key={index} className="flex justify-between items-center p-1 hover:bg-gray-700 rounded">
                            <span onClick={() => handleFileClick(file)} className="cursor-pointer text-black truncate">
                                {file.name}
                            </span>
                            <button onClick={() => handleDeleteFile(file)} className="text-red-600">X</button>
                        </div>
                    ))}
                </div>
                <input type="file" multiple ref={filesInputRef} onChange={handleAddComicFiles} accept="image/*"
                       className="cursor-pointer mt-2"/>
            </div>
            {/* Preview Area */}
            <div className="w-1/3 bg-gray-800 p-6 rounded-lg mt-4">
                <div className="mb-2 font-bold text-gray-300">미리보기</div>
                <div className="w-full h-64 border-2 border-gray-500 rounded-lg">
                    {previewImage && (
                        <img src={previewImage} alt="Preview" className="w-full h-full object-cover"/>
                    )}
                </div>
            </div>
        </div>
    );
};
