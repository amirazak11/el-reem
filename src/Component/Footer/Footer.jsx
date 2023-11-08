import React, { useEffect, useState } from 'react'
import logo from '../../Imgs/logo.svg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../BaseUrl/BaseUrl';
export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [setting, setSetting] = useState();
  async function getAllData() {
    try {
      const { data } = await axios.get(`${baseUrl}/${currentLanguage}/home`);
      setSetting(data.settings);
    } catch (error) {
    }
  }
  useEffect(() => {
    getAllData()
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);

  return (
<>
<div className="footer">
<div className="container text-center text-md-start mt-3 mt-md-5">
      <div className="row ">
<div className="text-center text-lg-start ">
  <section className="mt-md-5 mt-sm-1 py-md-3 py-sm-1">
    <div className="container text-center   text-md-start mt-5">
      <div className={`row  ${isArabic ? 'arabic-footer' :''}`}>
        <div className="col-md-4 col-sm-12 mt-4  mx-auto logo-text">
          <h6 className=" mb-md-4 mb-sm-2">
<img src={logo}/>    

      </h6>
      <div className="row g-3">

  <p >
          {t("Al Reem Centre is one of the most prominent shopping centres in Kingdom of Bahrain")}.
          </p>
          </div>
          <div>
      <a href="" className="me-4 text-info " target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 " target="_blank">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 " target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 " target="_blank">
        <i className="fab fa-linkedin"></i>
      </a>

    </div>
        </div>

        <div className="col-md-2 col-12  mx-md-auto mt-3 mt-md-0 section-footer mb-md-4" >
          <h6 className="py-sm-2 py-md-4 ">
          {t("Our Centre")}
          </h6>
          <p className='py-md-2 py-sm-0'>
            <Link to="parents">
           {t("Parents")}
           </Link>
          </p>
          <p className='py-md-2 py-sm-0'>
          <Link to="outlet">
           {t("OutLets")}
           </Link>
          </p>
          <p className='py-md-2 py-sm-0'>
          <Link to="about">
           {t("About Us")}
           </Link>
          </p>
          <p className='py-md-2 py-sm-0'>
          <Link to="contectus">
            {t("Contact Us")}
            </Link>
          </p>
        </div>

        <div className="col-md-3 col-12 mx-md-auto mt-3 mt-md-0  mb-md-4 section-footer">
        <h6 className="mb-md-2 mb-sm-0 py-md-4 py-sm-1">

        {t("Support")}

                  </h6>
          <p className='py-md-2 py-sm-0'>
          <Link to='terms'>
            {t("Terms and Conditions")}
            </Link>
          </p>
          <p className='py-md-2 py-sm-0'>
          <Link to='privacy'>{t("Privacy Policy")}</Link>
          </p>

        </div>

        <div className="col-md-3 col-12  mx-md-auto mb-md-0 mb-4 section-footer">
        <h6 className="mb-md-2 mb-0 py-md-4 py-1">
       {t("Contact Us")}</h6>
        
            <p className='py-md-1 py-sm-0'>
            <i className={`fas fa-home ${isArabic ?' ms-3':'me-3'}`}></i> New York, NY 10012, US</p>
            <p className='py-md-1 py-sm-0'>
            <a href={`mailto:${setting?.email}`}>
        <i className={`fas fa-envelope  ${isArabic ?' ms-3':'me-3'}`}
                ></i>
        {setting?.email}
      </a>
          </p>
          <p className='py-md-1 py-sm-0'>
          <a href={`tel:${setting?.phone}`}>
      <i className={`fas fa-phone ${isArabic ?' ms-3':'me-3'}`}></i>
      {setting?.phone}
    </a></p>
        </div>
      </div>
    </div>
  </section>
  <section className="d-flex justify-content-center footeroffooter justify-content-lg-between p-2 p-md-4   border-top">
    <div className="me-2 me-md-5  d-lg-block">
      <span>{t("© 2023 Alreem Business Centre. All right reserved")}.</span>
    </div>

    <div>
    <span>{t("Powered by")}</span><span><Link className='emcan' to="https://emcan-group.com/en"> {t("Emcan Solutions")}</Link></span>
    </div>
  
  </section>
</div></div></div></div>
</>
  )
}
