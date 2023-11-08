import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import baseUrl from '../../BaseUrl/BaseUrl';
import axios from 'axios';
import { useState } from 'react';
import notify from '../../hook/useNotifaction';
import { useEffect } from 'react';
export default function Contactus() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    let [user, setUser] = useState({
    name: "",
    email:"",
    message:"",
    phone:""
  })
  function getDataUser(e) {
    console.log(e.target.name);
    let currentUser = { ...user };
    currentUser[e.target.name] = e.target.value;
    setUser(currentUser)
  }
  async function register(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/${currentLanguage}/contact`, user);
      if (data.statusCode === 200) {
        notify(data.msg, 'info');
        setUser({ name: "", email: "", message: "", phone: "" });
        setButtonDisabled(true)
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
    <>
    <div className="container my-5 pt-3 py-3 ">
  <div className="row gx-5">
<h2 className='text-center'>{t("Contact Us")}</h2>
<p className='text-center'>
{t("Any question or remarks? Just write us a message!")}
</p></div></div>

    <div className={`container my-5 pt-3 py-2 py-md-5 Contactus ${isArabic ? 'background' :''}`}
    >
  <div className="row gx-md-5 gx-sm-0 justify-content-center">
<div className="form row my-md-3 form-contactus w-75">

  
    <div className="col-md-5 col-sm-12">
    <iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8080962416007!2d50.56409641502868!3d26.13779938346739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ac39f42e9193%3A0xba157edb56ddb2dc!2zQWxyZWVtIENlbnRyZSDYp9mE2LHZitmFINiz2YbYqtix!5e0!3m2!1sen!2sbh!4v1634325344451!5m2!1sen!2sbh"
					 allowfullscreen="" loading="lazy"></iframe>

      {/* <div className='d-flex mt-md-5 mt-2'>
      <p className='me-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
  <path d="M5.98371 16.4587V9.11236H8.35209L8.70668 6.24932H5.98364V4.4214C5.98364 3.59249 6.2047 3.02763 7.34643 3.02763L8.80253 3.02692V0.466256C8.55069 0.431427 7.68627 0.353455 6.68073 0.353455C4.58126 0.353455 3.14393 1.68766 3.14393 4.13794V6.24932H0.76947V9.11236H3.14393V16.4586H5.98371V16.4587Z" fill="#4ED4CE"/>
</svg></p>
<p className='me-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.408 7.045C13.2077 7.00818 13.4627 7 15.5 7C17.5373 7 17.7923 7.00886 18.5914 7.045C19.3905 7.08114 19.9359 7.20864 20.4132 7.39341C20.913 7.58227 21.3664 7.8775 21.7414 8.25932C22.1232 8.63364 22.4177 9.08636 22.6059 9.58682C22.7914 10.0641 22.9182 10.6095 22.955 11.4073C22.9918 12.2084 23 12.4634 23 14.5C23 16.5373 22.9911 16.7923 22.955 17.592C22.9189 18.3898 22.7914 18.9352 22.6059 19.4125C22.4177 19.913 22.1227 20.3665 21.7414 20.7414C21.3664 21.1232 20.913 21.4177 20.4132 21.6059C19.9359 21.7914 19.3905 21.9182 18.5927 21.955C17.7923 21.9918 17.5373 22 15.5 22C13.4627 22 13.2077 21.9911 12.408 21.955C11.6102 21.9189 11.0648 21.7914 10.5875 21.6059C10.087 21.4177 9.63351 21.1227 9.25864 20.7414C8.87708 20.3668 8.58181 19.9136 8.39341 19.4132C8.20864 18.9359 8.08182 18.3905 8.045 17.5927C8.00818 16.7916 8 16.5366 8 14.5C8 12.4627 8.00886 12.2077 8.045 11.4086C8.08114 10.6095 8.20864 10.0641 8.39341 9.58682C8.58208 9.08642 8.87758 8.63317 9.25932 8.25864C9.63366 7.87716 10.0867 7.58189 10.5868 7.39341C11.0641 7.20864 11.6102 7.08182 12.408 7.045ZM18.5307 8.395C17.7398 8.35886 17.5025 8.35136 15.5 8.35136C13.4975 8.35136 13.2602 8.35886 12.4693 8.395C11.7377 8.42841 11.3409 8.55045 11.0764 8.65341C10.7266 8.78977 10.4764 8.95136 10.2139 9.21386C9.96503 9.45594 9.77353 9.75065 9.65341 10.0764C9.55045 10.3409 9.42841 10.7377 9.395 11.4693C9.35886 12.2602 9.35136 12.4975 9.35136 14.5C9.35136 16.5025 9.35886 16.7398 9.395 17.5307C9.42841 18.2623 9.55045 18.6591 9.65341 18.9236C9.77341 19.2489 9.965 19.5441 10.2139 19.7861C10.4559 20.035 10.7511 20.2266 11.0764 20.3466C11.3409 20.4495 11.7377 20.5716 12.4693 20.605C13.2602 20.6411 13.4968 20.6486 15.5 20.6486C17.5032 20.6486 17.7398 20.6411 18.5307 20.605C19.2623 20.5716 19.6591 20.4495 19.9236 20.3466C20.2734 20.2102 20.5236 20.0486 20.7861 19.7861C21.035 19.5441 21.2266 19.2489 21.3466 18.9236C21.4495 18.6591 21.5716 18.2623 21.605 17.5307C21.6411 16.7398 21.6486 16.5025 21.6486 14.5C21.6486 12.4975 21.6411 12.2602 21.605 11.4693C21.5716 10.7377 21.4495 10.3409 21.3466 10.0764C21.2102 9.72659 21.0486 9.47636 20.7861 9.21386C20.544 8.96505 20.2493 8.77355 19.9236 8.65341C19.6591 8.55045 19.2623 8.42841 18.5307 8.395ZM14.542 16.812C15.077 17.0347 15.6728 17.0648 16.2275 16.8971C16.7821 16.7294 17.2614 16.3743 17.5834 15.8924C17.9053 15.4106 18.05 14.832 17.9928 14.2553C17.9355 13.6786 17.6798 13.1398 17.2693 12.7307C17.0077 12.4692 16.6913 12.269 16.343 12.1444C15.9946 12.0199 15.623 11.9741 15.2549 12.0104C14.8867 12.0467 14.5312 12.1642 14.214 12.3544C13.8967 12.5446 13.6255 12.8028 13.42 13.1104C13.2145 13.4179 13.0797 13.7672 13.0254 14.1332C12.971 14.4991 12.9985 14.8725 13.1058 15.2265C13.2131 15.5805 13.3976 15.9063 13.6459 16.1805C13.8943 16.4547 14.2003 16.6704 14.542 16.812ZM12.7741 11.7741C13.1321 11.4161 13.557 11.1322 14.0247 10.9384C14.4925 10.7447 14.9938 10.645 15.5 10.645C16.0062 10.645 16.5075 10.7447 16.9753 10.9384C17.443 11.1322 17.8679 11.4161 18.2259 11.7741C18.5839 12.1321 18.8678 12.557 19.0616 13.0247C19.2553 13.4925 19.355 13.9938 19.355 14.5C19.355 15.0062 19.2553 15.5075 19.0616 15.9753C18.8678 16.443 18.5839 16.8679 18.2259 17.2259C17.503 17.9489 16.5224 18.355 15.5 18.355C14.4776 18.355 13.497 17.9489 12.7741 17.2259C12.0511 16.503 11.645 15.5224 11.645 14.5C11.645 13.4776 12.0511 12.497 12.7741 11.7741ZM20.21 11.2191C20.2987 11.1354 20.3697 11.0348 20.4188 10.9232C20.468 10.8115 20.4942 10.6912 20.496 10.5693C20.4977 10.4473 20.475 10.3263 20.4292 10.2133C20.3833 10.1003 20.3153 9.99762 20.2291 9.91139C20.1428 9.82516 20.0402 9.75711 19.9272 9.71126C19.8142 9.66542 19.6931 9.64271 19.5712 9.64449C19.4492 9.64627 19.3289 9.67249 19.2173 9.72161C19.1057 9.77073 19.005 9.84175 18.9214 9.93045C18.7586 10.103 18.6695 10.3321 18.673 10.5693C18.6764 10.8064 18.7722 11.0329 18.9399 11.2006C19.1076 11.3683 19.334 11.464 19.5712 11.4675C19.8083 11.4709 20.0375 11.3818 20.21 11.2191Z" fill="#4ED4CE"/>
</svg>
</p>
<p className='me-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="white"/>
</svg>
</p>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="white"/>
  <path d="M23 10.4255C22.4484 10.6598 21.8481 10.8284 21.2298 10.8941C21.8717 10.5185 22.3525 9.92521 22.5818 9.22545C21.9794 9.57833 21.3195 9.82578 20.6313 9.95681C20.3437 9.65402 19.9958 9.4128 19.6094 9.24819C19.2229 9.08357 18.8062 8.99909 18.3852 9.00001C16.6816 9.00001 15.3116 10.3598 15.3116 12.0284C15.3116 12.2627 15.3405 12.497 15.3873 12.7225C12.8366 12.5911 10.5616 11.3911 9.04915 9.55385C8.77357 10.0174 8.62916 10.5451 8.63093 11.0823C8.63093 12.1331 9.17354 13.0598 10.001 13.6047C9.51335 13.5858 9.03715 13.4538 8.6111 13.2195V13.2568C8.6111 14.7284 9.66747 15.9479 11.0754 16.2284C10.811 16.296 10.5391 16.3306 10.266 16.3314C10.0659 16.3314 9.87658 16.3118 9.68549 16.2852C10.0749 17.4852 11.2087 18.3568 12.5589 18.3852C11.5026 19.2 10.1794 19.6793 8.7427 19.6793C8.48492 19.6793 8.24697 19.6704 8 19.642C9.36282 20.503 10.9798 21 12.7212 21C18.3744 21 21.4677 16.3882 21.4677 12.3852C21.4677 12.2539 21.4677 12.1225 21.4587 11.9911C22.0572 11.5598 22.5818 11.0254 23 10.4255Z" fill="#4ED4CE"/>
</svg>
</p>
      </div> */}
    </div>
    <div className="col-md-7">
        <form onSubmit={register} >

        <div className="mb-3  row">
<div className="col-md-6">
  <label htmlFor="firstName" className="form-label ">{t("First Name")}</label>
  <input type="text" className="form-control" name='name' id="firstName" onChange={(e) => getDataUser(e)} placeholder={t("First Name")} value={user.name}/>
</div>
<div className="col-md-6">
  <label htmlFor="lastName" className="form-label ">{t("Last Name")}</label>
  <input type="text" className="form-control" id="lastName"  placeholder={t("Last Name")}/>
</div>
</div>
<div className="mb-3 row">
<div className="col-md-6">
  <label htmlFor="email" className="form-label " placeholder={t("Email")}>{t("Email")}</label>
  <input type="email" className="form-control" name='email' id="email" onChange={(e) => getDataUser(e)} placeholder={t("name@example.com")} value={user.email}/>
</div>
<div className="col-md-6">
  <label htmlFor="phone" className="form-label ">{t("Phone Number")}</label>
  <input type="number" className="form-control" name='phone' id="phone" onChange={(e) => getDataUser(e)} placeholder={t("+201203328425")} value={user.phone}/>
</div>
</div>
<div className="mb-3 row">
<div className="col-md-6">

  <label htmlFor="message" className="form-label">{t("Message")}</label>
  <textarea className="form-control" id="Message" name='message' rows="2"  onChange={(e) => getDataUser(e)} placeholder={t("Write your message..")}  value={user.message}></textarea>
</div>
</div>
<div className="row w-100  ">
            <div className=" d-flex justify-content-end btn-send-message">
              <button type="submit" className="layer-btn  btn  px-5 py-2 mt-3 "  disabled={isButtonDisabled} >
                          <Link  className='text-white'>

                     
                  {t("Send Message")}
                  </Link>

              </button>

            </div>
          </div>
        </form>
  {/* <div className="row mt-2 mt-md-4">
    <div className="col-6">

            <p className='py-md-1 py-sm-0'>

            <i className="fas fa-envelope me-3"></i>
            <a href="mailto:info@example.com">{t("info@example.com")}</a>

          </p>


  

    </div>
    <div className="col-12 col-md-6">          <p className='py-md-1 py-sm-0'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
  <path d="M21.8125 28.8011C20.4 28.8011 18.9125 28.4636 17.375 27.8136C15.875 27.1761 14.3625 26.3011 12.8875 25.2386C11.425 24.1636 10.0125 22.9636 8.675 21.6511C7.35 20.3136 6.15 18.9011 5.0875 17.4511C4.0125 15.9511 3.15 14.4511 2.5375 13.0011C1.8875 11.4511 1.5625 9.95115 1.5625 8.53865C1.5625 7.56365 1.7375 6.63865 2.075 5.77615C2.425 4.88865 2.9875 4.06365 3.75 3.35115C4.7125 2.40115 5.8125 1.92615 6.9875 1.92615C7.475 1.92615 7.975 2.03865 8.4 2.23865C8.8875 2.46365 9.3 2.80115 9.6 3.25115L12.5 7.33865C12.7625 7.70115 12.9625 8.05115 13.1 8.40115C13.2625 8.77615 13.35 9.15115 13.35 9.51365C13.35 9.98865 13.2125 10.4511 12.95 10.8886C12.7625 11.2261 12.475 11.5886 12.1125 11.9511L11.2625 12.8386C11.275 12.8761 11.2875 12.9011 11.3 12.9261C11.45 13.1886 11.75 13.6386 12.325 14.3136C12.9375 15.0136 13.5125 15.6511 14.0875 16.2386C14.825 16.9636 15.4375 17.5386 16.0125 18.0136C16.725 18.6136 17.1875 18.9136 17.4625 19.0511L17.4375 19.1136L18.35 18.2136C18.7375 17.8261 19.1125 17.5386 19.475 17.3511C20.1625 16.9261 21.0375 16.8511 21.9125 17.2136C22.2375 17.3511 22.5875 17.5386 22.9625 17.8011L27.1125 20.7511C27.575 21.0636 27.9125 21.4636 28.1125 21.9386C28.3 22.4136 28.3875 22.8511 28.3875 23.2886C28.3875 23.8886 28.25 24.4886 27.9875 25.0511C27.725 25.6136 27.4 26.1011 26.9875 26.5511C26.275 27.3386 25.5 27.9011 24.6 28.2636C23.7375 28.6136 22.8 28.8011 21.8125 28.8011ZM6.9875 3.80115C6.3 3.80115 5.6625 4.10115 5.05 4.70115C4.475 5.23865 4.075 5.82615 3.825 6.46365C3.5625 7.11365 3.4375 7.80115 3.4375 8.53865C3.4375 9.70115 3.7125 10.9636 4.2625 12.2636C4.825 13.5886 5.6125 14.9636 6.6125 16.3386C7.6125 17.7136 8.75 19.0511 10 20.3136C11.25 21.5511 12.6 22.7011 13.9875 23.7136C15.3375 24.7011 16.725 25.5011 18.1 26.0761C20.2375 26.9886 22.2375 27.2011 23.8875 26.5136C24.525 26.2511 25.0875 25.8511 25.6 25.2761C25.8875 24.9636 26.1125 24.6261 26.3 24.2261C26.45 23.9136 26.525 23.5886 26.525 23.2636C26.525 23.0636 26.4875 22.8636 26.3875 22.6386C26.35 22.5636 26.275 22.4261 26.0375 22.2636L21.8875 19.3136C21.6375 19.1386 21.4125 19.0136 21.2 18.9261C20.925 18.8136 20.8125 18.7011 20.3875 18.9636C20.1375 19.0886 19.9125 19.2761 19.6625 19.5261L18.7125 20.4636C18.225 20.9386 17.475 21.0511 16.9 20.8386L16.5625 20.6886C16.05 20.4136 15.45 19.9886 14.7875 19.4261C14.1875 18.9136 13.5375 18.3136 12.75 17.5386C12.1375 16.9136 11.525 16.2511 10.8875 15.5136C10.3 14.8261 9.875 14.2386 9.6125 13.7511L9.4625 13.3761C9.3875 13.0886 9.3625 12.9261 9.3625 12.7511C9.3625 12.3011 9.525 11.9011 9.8375 11.5886L10.775 10.6136C11.025 10.3636 11.2125 10.1261 11.3375 9.91365C11.4375 9.75115 11.475 9.61365 11.475 9.48865C11.475 9.38865 11.4375 9.23865 11.375 9.08865C11.2875 8.88865 11.15 8.66365 10.975 8.42615L8.075 4.32615C7.95 4.15115 7.8 4.02615 7.6125 3.93865C7.4125 3.85115 7.2 3.80115 6.9875 3.80115ZM17.4375 19.1261L17.2375 19.9761L17.575 19.1011C17.5125 19.0886 17.4625 19.1011 17.4375 19.1261Z" fill="#202020"/>
</svg> 
<a href="tel:+0123456788">+ 01 234 567 88</a>

</p>
            </div>
    <div className="col-12 col-md-6"></div>


  </div> */}
  
    </div>

</div>

  </div>
  </div>
    </>
  )
}
