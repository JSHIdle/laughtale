import {useEffect, useState} from "react";
import client from "../../apis";
import UploadResult from "../../components/admin/UploadResultComponent.tsx";

const Index = () => {
    const [data, setData] = useState(null);
    const [files, setFiles] = useState<File[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles(Array.from(event.target.files));
        }
    };

    useEffect(() => {
        setCurrentPage(0);
        if (files == null || !files) {
            return;
        }
        setTotalPages(files.length);
    }, [files]);

    const onUploadClick = () => {
        if (!files) return;

        setLoading(true);

        const formData = new FormData();
        for (const file of files) {
            formData.append("files", file);
        }

        client.post("/manga/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                setLoading(false);
                setData(response.data);
                setFiles(null);
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
            });
    };

    const handlePageChange = (value: number) => {
        setCurrentPage((currentPage + totalPages + value) % totalPages);
    };

    return <>
        {(data == null || false) ?
            (<div className="h-[100vh] flex flex-col justify-center items-center">
                <div className="w-2/3">
                    {/* header */}
                    <div className="text-4xl p-10 border mb-16">
                        <p>漫画をお願いします。(만화를 선택해주세요.)</p>
                    </div>
                    {/* body */}
                    <div className="grid grid-cols-2 gap-5 h-[50vh]">
                        <div className="flex flex-col justify-center">
                            <label htmlFor="dropzone-file"
                                   className="flex flex-col items-center justify-center w-full h-full border-2 rounded-lg cursor-pointer dark:hover:bg-gray-700">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 h-full">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                        className="font-semibold">사진 업로드</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG</p>
                                </div>
                                <input id="dropzone-file" type="file" multiple onChange={onFileChange}
                                       className="hidden"/>
                            </label>
                        </div>
                        {loading && <div>업로드 중...</div>}
                        {files && files.length > 0 ? (
                            <div className="border-2 rounded-lg ps-3 pe-3">
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() => handlePageChange(-1)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M15.75 19.5 8.25 12l7.5-7.5"/>
                                        </svg>
                                    </button>
                                    <img src={URL.createObjectURL(files[currentPage])} className="h-[50vh] w-full"
                                         alt=""/>
                                    <button
                                        onClick={() => handlePageChange(1)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-center items-center">
                                    {files.map((files, index) => (
                                        index == currentPage ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor" className="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                      d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                                                      clip-rule="evenodd"/>
                                            </svg>) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"/>
                                            </svg>)
                                    ))}
                                </div>
                            </div>
                        ) : (<div className="flex flex-col justify-center items-center border rounded-lg">
                            <div className="h-full">
                                <p className="font-bold">선택된 파일 없음</p>
                            </div>
                        </div>)
                        }
                    </div>
                    {/* footer */}
                    <div className="p-10 border flex justify-center mt-4 dark:hover:bg-gray-700 mt-16">
                        <button onClick={() => onUploadClick()}>분석하기</button>
                    </div>
                </div>
            </div>)
            : (<UploadResult {...data}/>)};
    </>
}

export default Index;