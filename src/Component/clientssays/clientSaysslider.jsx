import React, { Component } from "react";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
class CustomSlide extends Component {
  
  render() {
    const { index, ...props } = this.props;

    return (
      <div {...props}>
        <h1>{index}</h1>
      </div>
    );
  }
}

export default function SimpleSlider ({data}) {

  const { t } = useTranslation();

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="w-50 h-100 text-center clients-say arrow-slider">
        <h2> {t("What our clients say")} </h2>
        <Slider {...settings}>
          {data?.map((say) => (

          <div className="card p-2">
  <div className="card-body">
  <div className="d-flex justify-content-end">

  <span className="icon">
                                    <i className="fas fa-quote-right"></i>
                                </span></div>
    <div className="d-flex justify-content-center">
    <h5 className="card-title">                            <div className="rating">
      
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div></h5>
    <h5 className="card-title">                  
                                </h5>
    </div>
    <p className="card-text card-gray">
      {say.text}
         </p>
    <h3 href="#" className="card-link text-start"> 
         {say.owner}
</h3>
  </div>
</div>))}


        </Slider>
      </div>
    );
  
    }