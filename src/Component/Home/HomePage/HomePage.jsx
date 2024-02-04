import React, { useEffect, useState } from 'react';
import HomeheaderDiv from '../HomeheaderDiv/HomeheaderDiv';
import ClientSays from '../../clientssays/clientSays';
import OutLet from '../outLet/outLet';
import PageTitle from '../../pageTitle/pageTitles';
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { ColorBox } from "../../../Context/ColorboxContext";
import { Link, useNavigate } from 'react-router-dom';
import ParentesSlider from '../ParentesSlider/ParentesSlider';
import baseUrl from '../../../BaseUrl/BaseUrl';
import useFetch from '../../../hooks/useFetch';
import SliderImg from './sliderImg/sliderImg';
export default function HomePage({ customDesign }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/home`);
  const {getAllData,dataUser,setTitleValue} = useContext(ColorBox)
  let Navigate =useNavigate()
console.log(dataUser)
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
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);
  return (
    <>
    <div className="header">

          <SliderImg data={data.sliders} />
          <div className="layer">
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
          </div>
</div>
      {/* <HomeheaderDiv data={data.sliders} /> */}


      <div className="container my-5 py-3 part-slid">
        <div className=" row gx-md-5 gx-sm-0">
          <ParentesSlider data={data.partners} />
        </div>
      </div>
      <div className="container my-5 py-3">
        <div className="row gx-0 gx-md-5">
          <div className="col-md-5 col-sm-12">
              <div className="img-box">
                <img src={data?.about?.image} />
              </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="layer-img-cotent">
              <h2>
                {t("About Al Reem Centre")}
              </h2>
              {/* <h3>
                {t("Al Reem Centre is one of the most prominent shopping centres in Kingdom of Bahrain.")}
              </h3> */}
              <p>
                {data?.about?.title}
              </p>
            </div>
            <div className='res-btn'>
              <Link to='about'>
              <button type="button" onClick={()=>window.scrollTo({ top: 0 })} className="layer-img-button btn btn-outline-info px-5 py-2 mt-3">  {t("View More")}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="facilities">
        <div className="container my-5 py-3 ">
          <div className=" row gx-md-5 gx-sm-0">
            <div className="col-md-4 col-sm-12 d-flex align-items-center">
              <div className='h2res'>
                <h2 className=''>
                  <span className='text-dark me-1'>
                    {t("Facilities")}
                  </span>
                  {t("of")}
                </h2>
                <h2 className='elreem'>
                  {t("Al Reem Centre")}
                </h2>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 ">
              <div className="row gy-md-5 gy-sm-0 ">
                <div className="col-md-6 col-sm-12 align-self-start mb-md-5 md-sm-0">
                  <div className="img-flex ">
                    <div className="card facilty-card text-center" >
                      <div className="card-body">
                        <div className="img">
                          {data && data.facilities && data.facilities[0] && (
                            <img className='w-100 h-100' src={data.facilities[0].image} />
                          )}
                        </div>
                        <div className="card-title mt-3">
                        {data && data.facilities && data.facilities[0] && (
    <h5 className="card-text">{data.facilities[0].title}</h5>
  )}                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-flex ">
                    <div className="card facilty-card text-center" >
                      <div className="card-body">
                      <div className="img">
                          {data && data.facilities && data.facilities[1] && (
                            <img className='w-100 h-100' src={data.facilities[1].image} />
                          )}
                        </div>
                        <div className="card-title mt-3">
                        {data && data.facilities && data.facilities[1] && (
    <h5 className="card-text">{data.facilities[1].title}</h5>
  )}                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="col-md-6 col-sm-12 align-self-end ">
                  <div className="img-flex ">
                    <div className="card facilty-card text-center" >
                      <div className="card-body">
                      <div className="img">
                          {data && data.facilities && data.facilities[2] && (
                            <img className='w-100 h-100' src={data.facilities[2].image} />
                          )}
                        </div>
                        <div className="card-title mt-3">
                        {data && data.facilities && data.facilities[2] && (
    <h5 className="card-text">{data.facilities[2].title}</h5>
  )}                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-flex ">
                    <div className="card facilty-card text-center" >
                      <div className="card-body">
                      <div className="img">
                          {data && data.facilities && data.facilities[3] && (
                            <img className='w-100 h-100' src={data.facilities[3].image} />
                          )}
                        </div>
                        <div className="card-title mt-3">
                        {data && data.facilities && data.facilities[3] && (
    <h5 className="card-text">{data.facilities[3].title}</h5>
  )}                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row w-100  ">
            <div className=" d-flex justify-content-center ">
              <button type="button" onClick={()=>window.scrollTo({ top: 0 })} className="layer-img-button  btn btn-outline-info px-5 py-2 mt-3 ">
                <Link to='about'>
                  {t("View More")}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ClientSays data={data.testimonials} />
      <div className="container-fluid my-5 py-3 ">
        <div className="row w-100">
          <PageTitle title={t("OutLets")} />
        </div>
        <div className="row">
          <OutLet data={data.outlets} />

        </div>
        <div className="row w-100  ">
          <div className=" d-flex justify-content-center ">
            <button type="button" onClick={()=>window.scrollTo({ top: 0 })} className="layer-img-button  btn btn-outline-info px-5 py-2 mt-3 ">
              <Link to='outlet'>
                {t("View More")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
