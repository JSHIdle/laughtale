const NavBar = ({ selectedLevel, onSelectLevel }) => {
    return (
        <nav className="flex justify-center">
            <div className="w-full md:w-auto">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    {[1, 2, 3, 4, 5].map(level => (
                        <li key={level} className={selectedLevel === level ? 'text-blue-500' : ''}>
                            <button onClick={() => onSelectLevel(level)}
                                    className="block py-2 px-3 md:p-0 font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                                Level {level}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
