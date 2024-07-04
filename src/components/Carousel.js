// src/Carousel.js
import React from 'react';
import Slider from 'react-slick';

const images = [
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
    'https://soliloquywp.com/wp-content/uploads/2017/10/fullwidth-image-slider-in-wordpress.jpg',
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg',
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
    'https://soliloquywp.com/wp-content/uploads/2017/10/fullwidth-image-slider-in-wordpress.jpg',
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg',
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container mx-auto py-8 ">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="mx-auto" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
