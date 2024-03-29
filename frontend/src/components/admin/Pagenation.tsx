type Page = {
    cur: number,
    length: number
}

export default function Pagenation(page: Page) {
    const pageNumbers = Array.from(Array(page.length), (_, i) => i + 1);

    const shouldShowLeftEllipsis = page.cur > 2;
    const shouldShowRightEllipsis = page.cur < page.cur - 1;

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#"
                   className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#"
                   className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <span className="font-bold">{page.length}개 중</span>
                    <span className="font-bold">{page.cur}번째</span>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a href="#"
                           className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </a>
                        {shouldShowLeftEllipsis && <button>...</button>}
                        {pageNumbers.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                className={pageNumber === page.cur ? "caret-blue-600" : ""}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        {shouldShowRightEllipsis && <button>...</button>}
                    </nav>
                </div>
            </div>
        </div>
    );
}