import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';
const useFetch = (url) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async (currentLanguage) => {
    try {
      const response = await axios.get(`${url}`);
      setData(response.data.payload);
    } catch (err) {
      setError(err);
    } 
  };
  useEffect(() => {
    getData();
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);

  return {
    data,
    error
  };
};

export default useFetch;
