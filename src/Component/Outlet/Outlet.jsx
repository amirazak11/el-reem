import React from 'react'
import Sidebar from '../sideNav/sideNav'
import { Link } from 'react-router-dom'
import PageTitle from '../pageTitle/pageTitles'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import baseUrl from '../../BaseUrl/BaseUrl';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import notfound from '../../Imgs/notfound.png';
import { useContext } from "react";
import { ColorBox } from '../../Context/ColorboxContext';
export default function Outlet() {
  const {dataUser} = useContext(ColorBox)
  console.log(dataUser)
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [CategoryId, setCategoryId] = useState(1);
  console.log(CategoryId)
  const [dataOutlet, setDataOutlet] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const handleCategoryClick = (categoryId) => {
    setCategoryId(categoryId);
    setPageNum(1); 
  };
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/categories`);
  async function getAllDataOutLet() {
    try {
      const {data} = await axios.get(`${baseUrl}/${currentLanguage}/outlets?category_id=${CategoryId}&page=${pageNum}`);

      setDataOutlet(data.payload.data);

    } catch (error) {
    }
  }

  function onPagination() {
    setPageNum(pageNum + 1);
  }
  useEffect(() => {
    getAllDataOutLet();
    setCurrentLanguage(i18n.language);
  }, [i18n.language, currentLanguage,CategoryId,pageNum]);

  return (
    <>

    <div className="container  my-5 py-3">


        <div className="row">
            <div className="col-md-3">
            <Sidebar data={data} handleCategoryClick={handleCategoryClick} selectedCategoryId={CategoryId} />

            </div>
            <div className="col-md-9">
                <div className="row">
                <div className="row">
            <PageTitle title={t("OutLets")} />
        </div>
                {dataOutlet  && dataOutlet.length > 0 ? (
  dataOutlet.map((outlet) => (
    <div className="col-md-4 col-sm-12 mb-5" key={outlet.id}>
      <Link to={`../../outlet/${outlet.id}`}>
        <div className="card card-outlet text-center">
          <div className="card-body">
            <div className="img">
              <img className='w-100' src={outlet.image} alt={outlet.title} />
            </div>
            <div className="card-title mt-3">
              <h5 className="card-text">{outlet.title}</h5>
              <h6 className="card-text">{outlet.title}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))
) : (
  <div className="not-found h-100 w-100 d-flex justify-content-center">
    <img className='w-50 h-50' src={notfound} alt="Not Found" />
  </div>
)}

                </div>
  {dataOutlet.length > 0 && dataOutlet.next_page_url ? (
  <div className="row w-100">
    <div className="d-flex justify-content-center">
      <button type="button" className="layer-img-button btn btn-outline-info px-5 py-2 mt-3" onClick={onPagination}>
 {t("View More")}
      </button>
    </div>
  </div>
) : null}
            </div>

        </div>





    </div>    
    </>
  )
}
