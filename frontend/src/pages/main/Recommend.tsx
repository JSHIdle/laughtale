import Header from '../../components/common/Header';
import Recent from '../../components/main/Recent';
import CartoonGrid from "../../components/main/CartoonGrid";
import cartoons1 from "../../components/main/sampleData/Cartoons1.ts";
import cartoons2 from "../../components/main/sampleData/Cartoons2.ts";
import cartoons3 from "../../components/main/sampleData/Cartoons3.ts";
import cartoons4 from "../../components/main/sampleData/Cartoons4.ts";


const Recommend = () => {
    return (
        <div className="bg-[#212529] min-h-screen text-white">
            <Header/>
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
                <Recent/>
            </div>
            <CartoonGrid cartoons={cartoons1} level={1}/>
            <CartoonGrid cartoons={cartoons2} level={2}/>
            <CartoonGrid cartoons={cartoons3} level={3}/>
            <CartoonGrid cartoons={cartoons4} level={4}/>
        </div>
    );
}

export default Recommend;
