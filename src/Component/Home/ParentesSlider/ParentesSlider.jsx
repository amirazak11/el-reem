import React, { Component } from "react";
import Slider from "react-slick";
export default function ParentesSlider({data}) {
  var settings = {
    dots: true,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      }
    ]}
  return (
    <div className="arrow-slider ">
    <Slider {...settings}>
    {data?.map((partner) => (
        <div className="img-parteners" key={partner.id}>
          <img className=' m-auto' src={partner.image}/>
        </div> ))}
        {/* <div className="img-parteners">
          <img className='w-100 h-100' src='https://s3-alpha-sig.figma.com/img/7411/bd98/cbeb1c5b95af63e68cc35ca601ed0daf?Expires=1698019200&Signature=Z8MkxSxri6mNr01hyE1Y5uJjOjUKqTV4-KZbVlO2hjnPa49Qpvq4~U6i2-XyKZML-z~E3s8D--j0-Hta7fULXzSLOwETw0WC0TNwFWV~IXP55OPWgTNKfuomFY01z0HFrDcMF57o9TovEdQNqvdBmHYILHU5ohCzvue8gp1GpGAshf-Xp-5WhCyN6brwhDqCqrEXyLkviS8MbQZ0lTzkgicpiZ3eeZYIUW3MnHvRGy1kLSU0nCktFzFEEf~EVEI5yIb6AKnleSZSyzxRfjRXq0A58IpSvZqGGWeG3zneZkSCtda4B2Ks2ykfg7Fst2VIQuc9v-GzLzQiVWijEBc-EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
        </div> 
          <div className="img-parteners">
          <img className='w-100 h-100' src='https://s3-alpha-sig.figma.com/img/7411/bd98/cbeb1c5b95af63e68cc35ca601ed0daf?Expires=1698019200&Signature=Z8MkxSxri6mNr01hyE1Y5uJjOjUKqTV4-KZbVlO2hjnPa49Qpvq4~U6i2-XyKZML-z~E3s8D--j0-Hta7fULXzSLOwETw0WC0TNwFWV~IXP55OPWgTNKfuomFY01z0HFrDcMF57o9TovEdQNqvdBmHYILHU5ohCzvue8gp1GpGAshf-Xp-5WhCyN6brwhDqCqrEXyLkviS8MbQZ0lTzkgicpiZ3eeZYIUW3MnHvRGy1kLSU0nCktFzFEEf~EVEI5yIb6AKnleSZSyzxRfjRXq0A58IpSvZqGGWeG3zneZkSCtda4B2Ks2ykfg7Fst2VIQuc9v-GzLzQiVWijEBc-EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
        </div>    
        <div className="img-parteners">
          <img className='w-100 h-100' src='https://s3-alpha-sig.figma.com/img/7411/bd98/cbeb1c5b95af63e68cc35ca601ed0daf?Expires=1698019200&Signature=Z8MkxSxri6mNr01hyE1Y5uJjOjUKqTV4-KZbVlO2hjnPa49Qpvq4~U6i2-XyKZML-z~E3s8D--j0-Hta7fULXzSLOwETw0WC0TNwFWV~IXP55OPWgTNKfuomFY01z0HFrDcMF57o9TovEdQNqvdBmHYILHU5ohCzvue8gp1GpGAshf-Xp-5WhCyN6brwhDqCqrEXyLkviS8MbQZ0lTzkgicpiZ3eeZYIUW3MnHvRGy1kLSU0nCktFzFEEf~EVEI5yIb6AKnleSZSyzxRfjRXq0A58IpSvZqGGWeG3zneZkSCtda4B2Ks2ykfg7Fst2VIQuc9v-GzLzQiVWijEBc-EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
        </div>
        <div className="img-parteners">
          <img className='w-100 h-100' src='https://s3-alpha-sig.figma.com/img/7411/bd98/cbeb1c5b95af63e68cc35ca601ed0daf?Expires=1698019200&Signature=Z8MkxSxri6mNr01hyE1Y5uJjOjUKqTV4-KZbVlO2hjnPa49Qpvq4~U6i2-XyKZML-z~E3s8D--j0-Hta7fULXzSLOwETw0WC0TNwFWV~IXP55OPWgTNKfuomFY01z0HFrDcMF57o9TovEdQNqvdBmHYILHU5ohCzvue8gp1GpGAshf-Xp-5WhCyN6brwhDqCqrEXyLkviS8MbQZ0lTzkgicpiZ3eeZYIUW3MnHvRGy1kLSU0nCktFzFEEf~EVEI5yIb6AKnleSZSyzxRfjRXq0A58IpSvZqGGWeG3zneZkSCtda4B2Ks2ykfg7Fst2VIQuc9v-GzLzQiVWijEBc-EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
        </div>      */}
        </Slider>
      </div>  )
}
