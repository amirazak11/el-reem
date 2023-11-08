
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import baseUrl from '../../BaseUrl/BaseUrl';
import notify from '../../hook/useNotifaction';
export default function SubscribeForm() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const isArabic = i18n.language === 'ar';
  const [user, setUser] = useState({
    email: "",
  });
  function getDataUser(e) {
    let currentUser = { ...user };
    currentUser[e.target.name] = e.target.value;
    setUser(currentUser);
  }
  async function register(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/${currentLanguage}/newsletter`, user);
      if (data.statusCode === 200) {
        notify(data.msg, 'info');
      } else {
        notify(data.msg, 'error');
      }
    } catch (error) {
      console.error("An error occurred:", error);
      notify(error.response.data.msg, 'error');
    }
  }

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);
  return (
    <div className="container bg-dark p-sm-3 p-md-5  rounded-4 subscrib ">
    <div className="row">
      <div className="col-md-6 col-sm-12 d-flex align-items-center text-white" ><h3>
      {t("Subscribe Newsletter")}
        </h3></div>
      <div className="col-md-6 col-sm-12">
      <div className="position-relative">
        <form onSubmit={register}>
      <input className="form-control " type="email" name='email' placeholder={t("your Email address")} onChange={(e) => getDataUser(e)} aria-label="default input example"/>
      <div className={`position-absolute  ${isArabic ? 'arabic-style' : 'absolute-button'}`}>
      <button type="submit" className="btn p-3">{t("Subscribe")}</button>

      </div>
      </form>

      </div>
      </div>
    </div>
</div>
  )
}
