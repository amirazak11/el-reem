
import React, { Component } from "react";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import axios from "axios";
import baseUrl from "../../../BaseUrl/BaseUrl";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ColorBox } from "../../../Context/ColorboxContext";
export default function SimpleSlider({divData}) {
  const {getAllData,dataUser,setTitleValue} = useContext(ColorBox)
  const { t, i18n } = useTranslation();
  let Navigate =useNavigate()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
console.log(dataUser)
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  function register(e) {
    e.preventDefault();
    getAllData();
    if(dataUser){
      Navigate("../../outlet")
    }
  }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const isArabic = i18n.language === 'ar';

  
    return (
      <>
                {divData?.map((img) => (
<>
            <img src={img.image}  className='img-header w-100 h-100'  />
      <div className="layer" key={img.id} >
        <div className="container">
      
          <div className=" h-100 justify-center"  />
      <div className="home-slider">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
            <div className="container ">
              <div className="row">
          <div className="d-flex justify-content-center first-slide">
            <h1>{t("Al Reem Centre")}</h1>
            <h5>{t("Bahrain's most prominent shopping centre")}</h5>
            <form onSubmit={ register}>

            <div className={`d-flex groupinputs my-2 my-md-5 ${isArabic ? 'arabic-style-dir' : ''}`}>
            <div className="btn-group ">
  {/* <button className="btn  btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
  <button className="btn  btn-lg " type="submit" >

    {t("Search")}
  </button>
  {/* <ul className="dropdown-menu">

  </ul> */}
</div>

              <div className="w-50">
              <input  className="form-control " onChange={handleTitleChange} placeholder={t("Outlet Name" )}type="text"/>
              </div>
<p className="d-flex align-items-center mb-0 mx-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="11" cy="11" r="6" stroke="white" strokeWidth="2"/>
  <path d="M20 20L17 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
</svg>
</p>
            </div>
            </form>

            </div>
        
          </div>
          </div>


        </Slider>
      </div>
      </div></div>
      </>
      ))}
      </>
    );
  }
