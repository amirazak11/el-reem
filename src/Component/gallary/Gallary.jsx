import Lightbox from '../popupSlider/popupSlider'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import baseUrl from '../../BaseUrl/BaseUrl';
import PageTitle from '../pageTitle/pageTitles';
import useFetch from '../../hooks/useFetch';
export default function Gallary() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/gallery`);

  return (
    <>
<div className="container my-5 pt-3">
    <div className="row">
    <PageTitle title={t("Gallary")} />
    <Lightbox allImages={data} />
    </div>
</div>



</>
 )
}
