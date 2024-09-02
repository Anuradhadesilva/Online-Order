import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeel } from './topMeel';
import { CarouselItem } from './CarouselItem';
import { sliderClasses } from '@mui/material';

export const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
        <div>
            <Slider {...settings}>
                {topMeel.map((item) => <CarouselItem image={item.imageUrl} title={item.name} />)}
            </Slider>
        </div>
    )
}
