const NavBar = ({ selectedLevel, onSelectLevel }) => {
    return (
        <nav className="flex justify-center">
            <div className="w-full md:w-auto">
                <ul className="flex flex-col mt-4 md:space-x-8 md:flex-row p-12">
                    {[1, 2, 3, 4, 5].map(level => (
                        <li key={level} className={selectedLevel === level ? 'text-blue-500' : ''}>
                            <button onClick={() => onSelectLevel(level)}
                                    className="text-3xl block py-2 px-3 md:p-0 font-bold rounded md:bg-transparent md:dark:text-blue-500 md:dark:bg-transparent">
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
