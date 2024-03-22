import Slider from 'react-slick';
import image1 from '../../assets/samples/e1-1.jpg';
import image2 from '../../assets/samples/e1-3.jpg';
import image3 from '../../assets/samples/e1-2.jpg';

const ModalCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: "slider variable-width",
        variableWidth: true,
        adaptiveHeight: true,
    };

    const comics = [
        {
            id: 1,
            title: "만화1",
            episode: "3화",
            imageUrl: image1,
        },
        {
            id: 2,
            title: "만화2",
            episode: "3화",
            imageUrl: image2,
        },
        {
            id: 3,
            title: "만화3",
            episode: "3화",
            imageUrl: image3,
        },
    ];

    return (<div className="flex justify-center">
        <div className="w-[300px]">
            <Slider {...settings}>
                {comics.map(book => (
                    <div className="flex justify-center items-center">
                    <div key={book.id} className="p-3">
                        <img src={book.imageUrl} style={{ width: "80%", height: "auto" }} alt={book.title}/>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    );
}

export default ModalCarousel;



//     return (
//         <div className="flex justify-center items-center h-full">
//             <Slider {...settings}>
//                 {comics.map(book => (
//                     <div key={book.id}>
//                         <img src={book.imageUrl} alt={book.title} style={{ width: "100%", height: "auto" }}/>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }
