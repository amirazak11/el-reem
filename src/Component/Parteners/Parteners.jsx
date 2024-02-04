import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import baseUrl from '../../BaseUrl/BaseUrl';
import PageTitle from '../pageTitle/pageTitles';
import useFetch from '../../hooks/useFetch';
export default function Parteners() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/partners`);



  return (
    <>
        <div className="header-section " >
      <div className="layer-parenters" >
        <div className="container d-flex justify-content-center">
        </div>
      </div>
    </div> 
    <div className="container my-5 py-3">
    <PageTitle title={t("partners")}/>

  <div className="row ">
  {data?.map((partener) => (

    <div className="col-md-4 col-6">
        <div className="img-parteners ">
          <img className='m-auto' src={partener?.image}/>
        </div>
    </div>))}
    </div></div>

    </>
  )
}
