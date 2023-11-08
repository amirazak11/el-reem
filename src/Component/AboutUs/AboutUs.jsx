import React from 'react'
import { useTranslation } from 'react-i18next';
import Facilities from './Facilities'
import Responsive from './OurTeam'
import { useState } from 'react';
import baseUrl from '../../BaseUrl/BaseUrl';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/about`);

  return (
    <>
<div className="container my-5 py-3">
  <div className="row">
            <div className="col-md-6 col-sm-12 aboutus">
<h2>{t("About Al Reem Centre")}</h2>
<p>
  {data?.about?.title}
  </p>
</div>
            <div className="col-md-6 col-sm-12 ">
              <div className="h-75">
                <div className="row h-100 g-info" >

                    <div className="col-md-6 col-sm-4 h-100 d-flex align-items-center">
                    <div className="thirdImg ">
                      <img className='w-100 h-100' src={data?.about?.images[0]}/>    
</div>

                    </div>
                    <div className="col-md-6 col-sm-4 d-flex flex-column justify-content-between">
                    <div className="firstImg w-100">
                      <img className='w-100 h-100' src={data?.about?.images[1]}/>    
</div>
                <div className="secondImg  ">
                  <img className='w-100 h-100' src={data?.about?.images[2]}/>    
</div>
                    </div>
                </div>
                </div>
                </div>
                </div>
    </div>
    <Facilities data={data?.facilities}/>

    {/* <div className="container my-5 py-3">
  <div className="row g-2 justify-content-center">
    <Responsive data={data?.ourteam}/>
  </div>
  <div className="row w-100  ">
  <div className=" d-flex justify-content-center ">
<button type="button" className="layer-img-button  btn btn-outline-info px-5 py-2 mt-3 ">See More</button>
</div>
</div>
  </div> */}
    </>
  )
}
