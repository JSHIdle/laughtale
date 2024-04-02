const NavBar = ({ selectedLevel, onSelectLevel }) => {
    return (
        <nav className="flex justify-center">
            <div className="w-full md:w-auto">
                <div className="p-12">
                <ul className="flex flex-col mt-4 md:space-x-32 md:flex-row ">
                    {[1, 2, 3, 4, 5].map(level => (
                        <li key={level}>
                            <div
                                className={`p-3 rounded-xl ${selectedLevel === level ? 'text-[#64BDE2]' : ''}`}>
                                <button onClick={() => onSelectLevel(level)}
                                        className="text-3xl block py-2 px-3 md:p-0 font-bold rounded md:bg-transparent md:dark:text-blue-500 md:dark:bg-transparent">
                                    Lv {level}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
