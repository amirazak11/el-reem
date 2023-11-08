import React, { Component } from "react";
import Slider from "react-slick";
export default function Responsive ({data}){
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="out-let-slider arrow-slider">
        <Slider {...settings}>

        {data?.map((outlet) => (

        <div className="img-flex " key={outlet.id}>
      <div className="card shadow card-outlet text-center" >
  <div className="card-body">
  <div className="img">
  <img className='w-100 ' src={outlet.image}/>
  </div>
    <div className="card-title mt-3">
    <h5 className="card-text">{outlet.title}</h5>
    <h6 className="card-text"></h6>
    </div>
  </div>
</div>
      </div>

        ))}



         
        </Slider>
      </div>
    );
  }
