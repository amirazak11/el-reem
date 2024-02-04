import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import baseUrl from '../../BaseUrl/BaseUrl';
import useFetch from '../../hooks/useFetch';
export default function Terms() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);
  const { data, error } = useFetch(`${baseUrl}/${currentLanguage}/terms`);
  return (
<div className="container my-5 pt-3 py-3  Privacy">
  <div className="row ">
    <h2>
    {t("Terms and Conditions")}
    </h2>
<p>
{data?.title}

</p>
</div>
    </div>  )
}
