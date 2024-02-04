import React, { Component } from "react";
import Slider from "react-slick";

export default function ({data}) {

    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 ,
        speed: 2000,
        adaptiveHeight: true

      }
  return (
    <Slider {...settings}>
    {data?.map((partner) => (
      <div key={partner.id} className='w-100 h-100' >
          <img className='w-100 slider-home-img' src={partner.image}/>
      </div>))}
    </Slider>

  )
}
