import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
export default function SideMenu({ data, handleCategoryClick, selectedCategoryId,Title }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language, currentLanguage]);

  return (
    <>
      <div className="position-relative position-nav vh-100">
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className={sidebar ? 'mySidenav' : 'mySidenav active'}>
            <NavLink to='#' className='menu-bars '>
              <FaIcons.FaBars className={sidebar ? 'menu-icon active' : 'menu-icon'} onClick={toggleSidebar} />
            </NavLink>
          </div>

          {/* <button onClick={toggleSidebar}>Toggle Menu</button> */}

          <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
            <h5>{t("Categories")}</h5>

            <ul className='nav-menu-items py-3'>
              {data?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleCategoryClick(item.id);
                      setSidebar(false); // Close the sidebar
                    }}
                    className={`nav-text  ${item.id === selectedCategoryId || Title == item.title ? 'selected-category' : ''}`}
                  >
                    <NavLink to=''>
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}