import Slider from 'react-slick';
import React, {useRef, useEffect, useState} from 'react';
import image1 from '../../assets/samples/e1-1.jpg';
import image2 from '../../assets/samples/e1-3.jpg';
import image3 from '../../assets/samples/e1-2.jpg';

const ModalCarousel = ({example,selectedIndex}: any ) => {
    let carouselRef = useRef<HTMLElement>();
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);

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
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };

    return (<div className="flex justify-center">
        <div className="w-[400px]">
            <div>test</div>

            <Slider ref={carouselRef} {...settings}>
                {example.speeches.map((image, index) => (
                    <div className="flex justify-center items-center">
                    <div key={index} className="p-3">
                        <img src={image.imageUrl} style={{ width: "400px", height: "500px" }} />
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    );
}

export default ModalCarousel;

