const Progressbar = ({ value, max, onNumberClick}) => {
    return (
        <div className="flex justify-center space-x-4">
            {Array.from({ length: max }, (_, index) => (
                <div key={index} className={`h-10 w-10 rounded-full text-white font-bold flex justify-center items-center ${
                    index === value ? 'bg-gradient-to-r from-[#59CDE0] to-[#8F89EB]' : 'bg-[#53525f]'
                }`}
                     onClick={() => onNumberClick(index)}
                >{index+1}</div>
            ))}

        </div>
    );
};
export default Progressbar;
