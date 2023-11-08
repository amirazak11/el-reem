import axios from "axios";
import { createContext, useState,useEffect } from "react";
import { useTranslation } from 'react-i18next';
import baseUrl from "../BaseUrl/BaseUrl";
export let ColorBox = createContext(0);
export function ColorBoxProvider(props){
  const [dataUser, setDataUser] = useState();
  const [Title, setTitle] = useState('');
  const {  i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const setTitleValue = (newTitle) => {
    setTitle(newTitle);
  };
  console.log(Title)
  async function getAllData() {
    try {
      const response = await axios.get(`${baseUrl}/${currentLanguage}/outlets?title=${Title}`);
      if (response.status === 200) {
        const firstOutlet = response.data.payload;
        setDataUser(firstOutlet);
      }
    } catch (error) {
    }
  }
  console.log(dataUser)

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage,Title]);
    return <ColorBox.Provider value={{getAllData,dataUser,setDataUser,Title, setTitleValue }} >
        {props.children}
    </ColorBox.Provider>;
}

    
    

export default ColorBoxProvider;








