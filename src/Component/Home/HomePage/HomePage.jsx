import React, { useEffect, useState } from 'react';
import HomeheaderDiv from '../HomeheaderDiv/HomeheaderDiv';
import ClientSays from '../../clientssays/clientSays';
import { useTranslation } from 'react-i18next';
import Lightbox from '../../popupSlider/popupSlider';
import OutLet from '../outLet/outLet';
import PageTitle from '../../pageTitle/pageTitles';
import { Link } from 'react-router-dom';
import ParentesSlider from '../ParentesSlider/ParentesSlider';
import baseUrl from '../../../BaseUrl/BaseUrl';
import useFetch from '../../../hooks/useFetch';
export default function HomePage({ customDesign }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/home`);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);
  return (
    <>
      <HomeheaderDiv data={data.sliders} />


      <div className="container my-5 py-3 part-slid">
        <div className=" row gx-md-5 gx-sm-0">
          <ParentesSlider data={data.partners} />
        </div>
      </div>
      <div className="container my-5 py-3">
        <div className="row gx-0 gx-md-5">
          <div className="col-md-5 col-sm-12">
            <div className="big-box">
              <div className="box1">

              </div>
              <div className="box2">

              </div>
              <div className="img-box">
                <img src={data?.about?.image} />
              </div>
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
