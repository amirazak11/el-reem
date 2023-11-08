import React, { useState } from 'react'
import logo from '../../Imgs/logo.svg'
import logo2 from '../../Imgs/image 8.svg'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
export default function NavbarPage({ isHomePage }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 992); 
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    
<>
<nav className={`navbar navbar-expand-lg navbar-li ght bg-light ${isHomePage ? 'home-page-style ' : ''}`} >

  <div className="container">

                  {/* {currentLanguage === "ar" ? "English" : "Arabic"} */}

                <a className="navbar-brand w-md-100 w-sm-50 h-md-100 h-sm-50" href="#">
                <img
      src={isHomePage ? (isSmallScreen ? logo : logo2) : logo}
      className="w-100 h-100"
      alt=""
    />
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div  className="collapse navbar-collapse" id="navbarNavDropdown">


    <ul className="navbar-nav m-auto  " >
      <li className="nav-item  ">
        <Link className="nav-link position-relative underline" to="">{t("Home")} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link position-relative underline" to="about">{t("About Us")}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link position-relative underline" to="parents">{t("Parents")}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link position-relative underline" to="outlet">{t("OutLets")}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link position-relative underline" to="gallary">{t("Gallary")}</Link>
      </li>

    </ul>
    <div className="div-lang d-flex ">

      {/* <div>
                    {currentLanguage === "ar" ?       <button onClick={() => changeLanguage('en')}>English</button>
 :       <button onClick={() => changeLanguage('ar')}>العربية</button>
}

    </div> */}
            <div className="div-lang d-flex">
              <span className={`nav-link px-2 cursor-pointer ${currentLanguage === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>English</span> 
              <span>|</span>
              <span className={`nav-link px-2 cursor-pointer ${currentLanguage === 'ar' ? 'active' : ''}`} onClick={() => changeLanguage('ar')}>Arabic</span>
            </div>
    </div>

    <form className="form-inline my-2 my-lg-0">
    <Link to='contectus'>

      <button className="btn px-4 my-2 my-sm-0" type="submit">
        {t("Contact Us")}
        </button>
        </Link>

    </form>
  </div>
  </div>
</nav>
</>
  )
}
