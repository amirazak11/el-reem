import React from 'react'
import firstImg  from '../../Imgs/about/Card.png'
import { Link, useParams } from 'react-router-dom'
import PageTitle from '../pageTitle/pageTitles'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import baseUrl from '../../BaseUrl/BaseUrl';
import axios from 'axios';
export default function OutletDetails() {
    let {id} = useParams();
    const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [data, setData] = useState();
  async function getAllData() {
    try {
      const { data } = await axios.get(`${baseUrl}/${currentLanguage}/outlet/${id}`);
      setData(data.payload);

    } catch (error) {
    }
  }
  const layerStyle = {
    backgroundImage: `url(${data?.cover})`,
  };

  useEffect(() => {
    getAllData()
    setCurrentLanguage(i18n.language);
  }, [i18n.language,currentLanguage]);

  return (
    <>
    <div className="layeroutletheader" style={layerStyle} >
      <div className="layeroutlet" >

        
      </div>
    </div>

<div className="container my-5 py-3">
<div className="row justify-content-center">
<div className="d-flex outleticon w-75 justify-content-center">
<p className='py-md-1 py-sm-0 px-md-3 text-det'>
<svg xmlns="http://www.w3.org/2000/svg" className='me-1' width="20" height="20" viewBox="0 0 40 40" fill="none">
  <path d="M20 23.6166C16.45 23.6166 13.55 20.7333 13.55 17.1666C13.55 13.5999 16.45 10.7333 20 10.7333C23.55 10.7333 26.45 13.6166 26.45 17.1833C26.45 20.7499 23.55 23.6166 20 23.6166ZM20 13.2333C17.8333 13.2333 16.05 14.9999 16.05 17.1833C16.05 19.3666 17.8167 21.1333 20 21.1333C22.1833 21.1333 23.95 19.3666 23.95 17.1833C23.95 14.9999 22.1667 13.2333 20 13.2333Z" fill="#202020"/>
  <path d="M20 37.9334C17.5333 37.9334 15.05 37 13.1167 35.15C8.19999 30.4167 2.76666 22.8667 4.81666 13.8834C6.66666 5.73337 13.7833 2.08337 20 2.08337C20 2.08337 20 2.08337 20.0167 2.08337C26.2333 2.08337 33.35 5.73337 35.2 13.9C37.2333 22.8834 31.8 30.4167 26.8833 35.15C24.95 37 22.4667 37.9334 20 37.9334ZM20 4.58337C15.15 4.58337 8.91666 7.16671 7.26666 14.4334C5.46666 22.2834 10.4 29.05 14.8667 33.3334C17.75 36.1167 22.2667 36.1167 25.15 33.3334C29.6 29.05 34.5333 22.2834 32.7667 14.4334C31.1 7.16671 24.85 4.58337 20 4.58337Z" fill="#202020"/>
</svg> {data?.location}
            
            </p>
            <p className='py-md-1 py-sm-0 px-md-3 text-det'>
            <svg xmlns="http://www.w3.org/2000/svg" className='me-1' width="20" height="20" viewBox="0 0 40 40" fill="none">
  <path d="M29.0833 37.9167C27.2 37.9167 25.2167 37.4667 23.1667 36.6C21.1667 35.75 19.15 34.5834 17.1833 33.1667C15.2333 31.7334 13.35 30.1334 11.5667 28.3834C9.8 26.6 8.2 24.7167 6.78333 22.7834C5.35 20.7834 4.2 18.7834 3.38333 16.85C2.51666 14.7834 2.08333 12.7834 2.08333 10.9C2.08333 9.60004 2.31666 8.36671 2.76666 7.21671C3.23333 6.03337 3.98333 4.93337 4.99999 3.98337C6.28333 2.71671 7.75 2.08337 9.31666 2.08337C9.96666 2.08337 10.6333 2.23337 11.2 2.50004C11.85 2.80004 12.4 3.25004 12.8 3.85004L16.6667 9.30004C17.0167 9.78337 17.2833 10.25 17.4667 10.7167C17.6833 11.2167 17.8 11.7167 17.8 12.2C17.8 12.8334 17.6167 13.45 17.2667 14.0334C17.0167 14.4834 16.6333 14.9667 16.15 15.45L15.0167 16.6334C15.0333 16.6834 15.05 16.7167 15.0667 16.75C15.2667 17.1 15.6667 17.7 16.4333 18.6C17.25 19.5334 18.0167 20.3834 18.7833 21.1667C19.7667 22.1334 20.5833 22.9 21.35 23.5334C22.3 24.3334 22.9167 24.7334 23.2833 24.9167L23.25 25L24.4667 23.8C24.9833 23.2834 25.4833 22.9 25.9667 22.65C26.8833 22.0834 28.05 21.9834 29.2167 22.4667C29.65 22.65 30.1167 22.9 30.6167 23.25L36.15 27.1834C36.7667 27.6 37.2167 28.1334 37.4833 28.7667C37.7333 29.4 37.85 29.9834 37.85 30.5667C37.85 31.3667 37.6667 32.1667 37.3167 32.9167C36.9667 33.6667 36.5333 34.3167 35.9833 34.9167C35.0333 35.9667 34 36.7167 32.8 37.2C31.65 37.6667 30.4 37.9167 29.0833 37.9167ZM9.31666 4.58337C8.4 4.58337 7.54999 4.98337 6.73333 5.78337C5.96666 6.50004 5.43333 7.28337 5.09999 8.13337C4.74999 9.00004 4.58333 9.91671 4.58333 10.9C4.58333 12.45 4.95 14.1334 5.68333 15.8667C6.43333 17.6334 7.48333 19.4667 8.81666 21.3C10.15 23.1334 11.6667 24.9167 13.3333 26.6C15 28.25 16.8 29.7834 18.65 31.1334C20.45 32.45 22.3 33.5167 24.1333 34.2834C26.9833 35.5 29.65 35.7834 31.85 34.8667C32.7 34.5167 33.45 33.9834 34.1333 33.2167C34.5167 32.8 34.8167 32.35 35.0667 31.8167C35.2667 31.4 35.3667 30.9667 35.3667 30.5334C35.3667 30.2667 35.3167 30 35.1833 29.7C35.1333 29.6 35.0333 29.4167 34.7167 29.2L29.1833 25.2667C28.85 25.0334 28.55 24.8667 28.2667 24.75C27.9 24.6 27.75 24.45 27.1833 24.8C26.85 24.9667 26.55 25.2167 26.2167 25.55L24.95 26.8C24.3 27.4334 23.3 27.5834 22.5333 27.3L22.0833 27.1C21.4 26.7334 20.6 26.1667 19.7167 25.4167C18.9167 24.7334 18.05 23.9334 17 22.9C16.1833 22.0667 15.3667 21.1834 14.5167 20.2C13.7333 19.2834 13.1667 18.5 12.8167 17.85L12.6167 17.35C12.5167 16.9667 12.4833 16.75 12.4833 16.5167C12.4833 15.9167 12.7 15.3834 13.1167 14.9667L14.3667 13.6667C14.7 13.3334 14.95 13.0167 15.1167 12.7334C15.25 12.5167 15.3 12.3334 15.3 12.1667C15.3 12.0334 15.25 11.8334 15.1667 11.6334C15.05 11.3667 14.8667 11.0667 14.6333 10.75L10.7667 5.28337C10.6 5.05004 10.4 4.88337 10.15 4.76671C9.88333 4.65004 9.6 4.58337 9.31666 4.58337ZM23.25 25.0167L22.9833 26.15L23.4333 24.9834C23.35 24.9667 23.2833 24.9834 23.25 25.0167Z" fill="#202020"/>
</svg> {data?.phone}
            
            </p>
            <p className='py-md-1 py-sm-0 px-md-3 text-det'>
            <svg xmlns="http://www.w3.org/2000/svg" className='me-1' width="20" height="20" viewBox="0 0 40 40" fill="none">
  <path d="M20 37.9167C10.1167 37.9167 2.08333 29.8834 2.08333 20C2.08333 10.1167 10.1167 2.08337 20 2.08337C29.8833 2.08337 37.9167 10.1167 37.9167 20C37.9167 29.8834 29.8833 37.9167 20 37.9167ZM20 4.58337C11.5 4.58337 4.58333 11.5 4.58333 20C4.58333 28.5 11.5 35.4167 20 35.4167C28.5 35.4167 35.4167 28.5 35.4167 20C35.4167 11.5 28.5 4.58337 20 4.58337Z" fill="#202020"/>
  <path d="M26.1833 26.5501C25.9667 26.5501 25.75 26.5001 25.55 26.3667L20.3833 23.2834C19.1 22.5167 18.15 20.8334 18.15 19.3501V12.5167C18.15 11.8334 18.7167 11.2667 19.4 11.2667C20.0833 11.2667 20.65 11.8334 20.65 12.5167V19.3501C20.65 19.9501 21.15 20.8334 21.6667 21.1334L26.8333 24.2167C27.4333 24.5667 27.6167 25.3334 27.2667 25.9334C27.0167 26.3334 26.6 26.5501 26.1833 26.5501Z" fill="#202020"/>
</svg>{data?.opening}
            
            </p>
            
</div>


</div>

<div className="row baskin">
    <div className="col-md-4 col-sm-12">
<div className=" d-flex align-items-center baskin-img px-5">
  <img src={data?.image} />
</div>
    </div>
    <div className="col-md-8 col-sm-12">
      <h4>{t("About Baskin Robbins")}
</h4>
<div dangerouslySetInnerHTML={{ __html: data?.about}}></div>

      {/* <p>{t("Follow us")}</p> */}
      <div className='d-flex'>
      {/* <p className='me-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#4ED4CE"/>
</svg></p>
<p className='me-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#4ED4CE"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.408 7.045C13.2077 7.00818 13.4627 7 15.5 7C17.5373 7 17.7923 7.00886 18.5914 7.045C19.3905 7.08114 19.9359 7.20864 20.4132 7.39341C20.913 7.58227 21.3664 7.8775 21.7414 8.25932C22.1232 8.63364 22.4177 9.08636 22.6059 9.58682C22.7914 10.0641 22.9182 10.6095 22.955 11.4073C22.9918 12.2084 23 12.4634 23 14.5C23 16.5373 22.9911 16.7923 22.955 17.592C22.9189 18.3898 22.7914 18.9352 22.6059 19.4125C22.4177 19.913 22.1227 20.3665 21.7414 20.7414C21.3664 21.1232 20.913 21.4177 20.4132 21.6059C19.9359 21.7914 19.3905 21.9182 18.5927 21.955C17.7923 21.9918 17.5373 22 15.5 22C13.4627 22 13.2077 21.9911 12.408 21.955C11.6102 21.9189 11.0648 21.7914 10.5875 21.6059C10.087 21.4177 9.63351 21.1227 9.25864 20.7414C8.87708 20.3668 8.58181 19.9136 8.39341 19.4132C8.20864 18.9359 8.08182 18.3905 8.045 17.5927C8.00818 16.7916 8 16.5366 8 14.5C8 12.4627 8.00886 12.2077 8.045 11.4086C8.08114 10.6095 8.20864 10.0641 8.39341 9.58682C8.58208 9.08642 8.87758 8.63317 9.25932 8.25864C9.63366 7.87716 10.0867 7.58189 10.5868 7.39341C11.0641 7.20864 11.6102 7.08182 12.408 7.045ZM18.5307 8.395C17.7398 8.35886 17.5025 8.35136 15.5 8.35136C13.4975 8.35136 13.2602 8.35886 12.4693 8.395C11.7377 8.42841 11.3409 8.55045 11.0764 8.65341C10.7266 8.78977 10.4764 8.95136 10.2139 9.21386C9.96503 9.45594 9.77353 9.75065 9.65341 10.0764C9.55045 10.3409 9.42841 10.7377 9.395 11.4693C9.35886 12.2602 9.35136 12.4975 9.35136 14.5C9.35136 16.5025 9.35886 16.7398 9.395 17.5307C9.42841 18.2623 9.55045 18.6591 9.65341 18.9236C9.77341 19.2489 9.965 19.5441 10.2139 19.7861C10.4559 20.035 10.7511 20.2266 11.0764 20.3466C11.3409 20.4495 11.7377 20.5716 12.4693 20.605C13.2602 20.6411 13.4968 20.6486 15.5 20.6486C17.5032 20.6486 17.7398 20.6411 18.5307 20.605C19.2623 20.5716 19.6591 20.4495 19.9236 20.3466C20.2734 20.2102 20.5236 20.0486 20.7861 19.7861C21.035 19.5441 21.2266 19.2489 21.3466 18.9236C21.4495 18.6591 21.5716 18.2623 21.605 17.5307C21.6411 16.7398 21.6486 16.5025 21.6486 14.5C21.6486 12.4975 21.6411 12.2602 21.605 11.4693C21.5716 10.7377 21.4495 10.3409 21.3466 10.0764C21.2102 9.72659 21.0486 9.47636 20.7861 9.21386C20.544 8.96505 20.2493 8.77355 19.9236 8.65341C19.6591 8.55045 19.2623 8.42841 18.5307 8.395ZM14.542 16.812C15.077 17.0347 15.6728 17.0648 16.2275 16.8971C16.7821 16.7294 17.2614 16.3743 17.5834 15.8924C17.9053 15.4106 18.05 14.832 17.9928 14.2553C17.9355 13.6786 17.6798 13.1398 17.2693 12.7307C17.0077 12.4692 16.6913 12.269 16.343 12.1444C15.9946 12.0199 15.623 11.9741 15.2549 12.0104C14.8867 12.0467 14.5312 12.1642 14.214 12.3544C13.8967 12.5446 13.6255 12.8028 13.42 13.1104C13.2145 13.4179 13.0797 13.7672 13.0254 14.1332C12.971 14.4991 12.9985 14.8725 13.1058 15.2265C13.2131 15.5805 13.3976 15.9063 13.6459 16.1805C13.8943 16.4547 14.2003 16.6704 14.542 16.812ZM12.7741 11.7741C13.1321 11.4161 13.557 11.1322 14.0247 10.9384C14.4925 10.7447 14.9938 10.645 15.5 10.645C16.0062 10.645 16.5075 10.7447 16.9753 10.9384C17.443 11.1322 17.8679 11.4161 18.2259 11.7741C18.5839 12.1321 18.8678 12.557 19.0616 13.0247C19.2553 13.4925 19.355 13.9938 19.355 14.5C19.355 15.0062 19.2553 15.5075 19.0616 15.9753C18.8678 16.443 18.5839 16.8679 18.2259 17.2259C17.503 17.9489 16.5224 18.355 15.5 18.355C14.4776 18.355 13.497 17.9489 12.7741 17.2259C12.0511 16.503 11.645 15.5224 11.645 14.5C11.645 13.4776 12.0511 12.497 12.7741 11.7741ZM20.21 11.2191C20.2987 11.1354 20.3697 11.0348 20.4188 10.9232C20.468 10.8115 20.4942 10.6912 20.496 10.5693C20.4977 10.4473 20.475 10.3263 20.4292 10.2133C20.3833 10.1003 20.3153 9.99762 20.2291 9.91139C20.1428 9.82516 20.0402 9.75711 19.9272 9.71126C19.8142 9.66542 19.6931 9.64271 19.5712 9.64449C19.4492 9.64627 19.3289 9.67249 19.2173 9.72161C19.1057 9.77073 19.005 9.84175 18.9214 9.93045C18.7586 10.103 18.6695 10.3321 18.673 10.5693C18.6764 10.8064 18.7722 11.0329 18.9399 11.2006C19.1076 11.3683 19.334 11.464 19.5712 11.4675C19.8083 11.4709 20.0375 11.3818 20.21 11.2191Z" fill="white"/>
</svg>
</p>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 14" fill="none">
  <path d="M0.670761 2.18938C0.670761 1.74044 0.830794 1.37007 1.15085 1.07827C1.4709 0.786463 1.88698 0.640564 2.39907 0.640564C2.90202 0.640564 3.30894 0.784214 3.61986 1.07154C3.93991 1.36784 4.09994 1.75391 4.09994 2.22979C4.09994 2.66077 3.94449 3.0199 3.63357 3.30723C3.31352 3.60353 2.89287 3.75167 2.37164 3.75167H2.35792C1.85497 3.75167 1.44805 3.60353 1.13713 3.30723C0.826213 3.01093 0.670761 2.63831 0.670761 2.18938ZM0.849079 13.9739V4.97726H3.89419V13.9739H0.849079ZM5.58135 13.9739H8.62646V8.95033C8.62646 8.63606 8.66304 8.39364 8.73619 8.22305C8.86421 7.91777 9.05854 7.65963 9.31916 7.44864C9.57977 7.23764 9.90668 7.13214 10.2999 7.13214C11.3241 7.13214 11.8362 7.81003 11.8362 9.16581V13.9739H14.8813V8.81565C14.8813 7.4868 14.5612 6.47895 13.9211 5.79208C13.281 5.10521 12.4351 4.76177 11.3835 4.76177C10.2039 4.76177 9.28486 5.26009 8.62646 6.25672V6.28366H8.61274L8.62646 6.25672V4.97726H5.58135C5.59963 5.26458 5.60878 6.15795 5.60878 7.6574C5.60878 9.15683 5.59963 11.2623 5.58135 13.9739Z" fill="white"/>
</svg>
</p>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 14" fill="none">
  <path d="M0.670761 2.18938C0.670761 1.74044 0.830794 1.37007 1.15085 1.07827C1.4709 0.786463 1.88698 0.640564 2.39907 0.640564C2.90202 0.640564 3.30894 0.784214 3.61986 1.07154C3.93991 1.36784 4.09994 1.75391 4.09994 2.22979C4.09994 2.66077 3.94449 3.0199 3.63357 3.30723C3.31352 3.60353 2.89287 3.75167 2.37164 3.75167H2.35792C1.85497 3.75167 1.44805 3.60353 1.13713 3.30723C0.826213 3.01093 0.670761 2.63831 0.670761 2.18938ZM0.849079 13.9739V4.97726H3.89419V13.9739H0.849079ZM5.58135 13.9739H8.62646V8.95033C8.62646 8.63606 8.66304 8.39364 8.73619 8.22305C8.86421 7.91777 9.05854 7.65963 9.31916 7.44864C9.57977 7.23764 9.90668 7.13214 10.2999 7.13214C11.3241 7.13214 11.8362 7.81003 11.8362 9.16581V13.9739H14.8813V8.81565C14.8813 7.4868 14.5612 6.47895 13.9211 5.79208C13.281 5.10521 12.4351 4.76177 11.3835 4.76177C10.2039 4.76177 9.28486 5.26009 8.62646 6.25672V6.28366H8.61274L8.62646 6.25672V4.97726H5.58135C5.59963 5.26458 5.60878 6.15795 5.60878 7.6574C5.60878 9.15683 5.59963 11.2623 5.58135 13.9739Z" fill="white"/>
</svg>
</p> */}
      </div>
      </div>
</div>

<div className="row py-1">
{data?.gallery.map((img) => (

  <div className="col-md-3 col-sm-3" key={img.id}>
<div className="img mb-5">
  <img src={img} className='rounded-2 w-100 h-100' alt="" />
</div>
  </div>))}
</div>
</div>
  
</>
  )
}