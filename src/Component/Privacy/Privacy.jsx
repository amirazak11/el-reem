import React from 'react'
import { useTranslation } from 'react-i18next';
import baseUrl from '../../BaseUrl/BaseUrl';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Privacy() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/privacy`);
  return (
<>
<div className="container my-5 pt-3 py-3  Privacy">
  <div className="row ">
  <h2>
    {t("Privacy Policy")}
    </h2>
    <p>
{data?.title}
</p>
</div>
    </div>
</>  )
}
