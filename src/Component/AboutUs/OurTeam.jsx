import React, { useState } from "react";
import Slider from "react-slick";

const Responsive = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const settings = {
    dots: false,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="our-team">
      <h2 className="text-center">Our Team</h2>

      <Slider {...settings} afterChange={handleSlideChange}>

      {data?.map((team) => (

          <div className="col-md-4 col-sm-3 mb-5">
            <div className="card card-ourTeam text-center" >
              <div className="card-body">
                <div className="img">
                  <img className='w-100 h-100' src={team.image} />
                </div>
                <div className="card-title mt-3">
                  <h5 className="card-text">{team.name}</h5>
                  <h6 className="card-text">{team.position}</h6>
                </div>
              </div>
            </div>
          </div>


      ))}
          </Slider>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{
            width: `${(currentSlide / 7) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Responsive;