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
    email: "",
    message: "",
    phone: ""
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
  }, [i18n.language, currentLanguage]);
  return (
    <>
      <div className="container my-5 pt-3 py-3 ">
        <div className="row gx-5">
          <h2 className='text-center'>{t("Contact Us")}</h2>
          <p className='text-center'>
            {t("Any question or remarks? Just write us a message!")}
          </p></div></div>

      <div className={`container my-5 pt-3 py-2 py-md-5 Contactus ${isArabic ? 'background' : ''}`}
      >
        <div className="row gx-md-5 gx-sm-0 justify-content-center">
          <div className="form row my-md-3 form-contactus w-75">


            <div className="col-md-5 col-sm-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8080962416007!2d50.56409641502868!3d26.13779938346739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ac39f42e9193%3A0xba157edb56ddb2dc!2zQWxyZWVtIENlbnRyZSDYp9mE2LHZitmFINiz2YbYqtix!5e0!3m2!1sen!2sbh!4v1634325344451!5m2!1sen!2sbh"
                allowfullscreen="" loading="lazy"></iframe>

              <div className='d-flex mt-md-5 mt-2'>
      <p className='me-2 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
  <circle cx="15" cy="15.5" r="15" fill="white"/>
  <path d="M16.8134 24.395V16.1844H19.7081L20.1415 12.9845H16.8133V10.9416C16.8133 10.0151 17.0835 9.38381 18.4789 9.38381L20.2586 9.38301V6.52109C19.9508 6.48217 18.8943 6.39502 17.6653 6.39502C15.0993 6.39502 13.3425 7.88619 13.3425 10.6247V12.9845H10.4404V16.1844H13.3425V24.3949H16.8134V24.395Z" fill="#4ED4CE"/>
</svg></p>
<p className='me-2 cursor-pointer'>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <circle cx="15.3496" cy="15.395" r="15" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.34961 15.395C6.34961 11.7999 6.34961 10.0023 7.2063 8.70757C7.58886 8.12941 8.084 7.63427 8.66216 7.25171C9.9569 6.39502 11.7545 6.39502 15.3496 6.39502C18.9447 6.39502 20.7423 6.39502 22.0371 7.25171C22.6152 7.63427 23.1104 8.12941 23.4929 8.70757C24.3496 10.0023 24.3496 11.7999 24.3496 15.395C24.3496 18.9902 24.3496 20.7877 23.4929 22.0825C23.1104 22.6606 22.6152 23.1558 22.0371 23.5383C20.7423 24.395 18.9447 24.395 15.3496 24.395C11.7545 24.395 9.9569 24.395 8.66216 23.5383C8.084 23.1558 7.58886 22.6606 7.2063 22.0825C6.34961 20.7877 6.34961 18.9902 6.34961 15.395ZM20.0089 15.3952C20.0089 17.9686 17.9228 20.0547 15.3494 20.0547C12.7761 20.0547 10.69 17.9686 10.69 15.3952C10.69 12.8219 12.7761 10.7358 15.3494 10.7358C17.9228 10.7358 20.0089 12.8219 20.0089 15.3952ZM15.3494 18.4782C17.0521 18.4782 18.4325 17.0979 18.4325 15.3952C18.4325 13.6926 17.0521 12.3122 15.3494 12.3122C13.6468 12.3122 12.2664 13.6926 12.2664 15.3952C12.2664 17.0979 13.6468 18.4782 15.3494 18.4782ZM20.1929 11.5966C20.7975 11.5966 21.2877 11.1064 21.2877 10.5017C21.2877 9.89709 20.7975 9.40692 20.1929 9.40692C19.5882 9.40692 19.0981 9.89709 19.0981 10.5017C19.0981 11.1064 19.5882 11.5966 20.1929 11.5966Z" fill="#4ED4CE"/>
</svg>
</p>
<p className='me-2 icon-white px-2 cursor-pointer'>
<i class="fa-brands fa-linkedin-in"></i>
</p>
<p className='cursor-pointer'>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <circle cx="15.3496" cy="15.395" r="15" fill="white"/>
  <path d="M20.4636 7.42499H23.3771L17.012 14.266L24.5 23.575H18.6361L14.044 17.9291L8.78953 23.575H5.87431L12.6824 16.2578L5.5 7.42499H11.511L15.6619 12.5855L20.4619 7.42499H20.4636ZM19.4411 21.9351H21.0555L10.6347 8.9787H8.90226L19.4411 21.9351Z" fill="#4ED4CE"/>
  <circle cx="15.3496" cy="15.395" r="15" fill="white"/>
  <path d="M20.4636 7.42499H23.3771L17.012 14.266L24.5 23.575H18.6361L14.044 17.9291L8.78953 23.575H5.87431L12.6824 16.2578L5.5 7.42499H11.511L15.6619 12.5855L20.4619 7.42499H20.4636ZM19.4411 21.9351H21.0555L10.6347 8.9787H8.90226L19.4411 21.9351Z" fill="#4ED4CE"/>
</svg>
</p>
      </div>
            </div>
            <div className="col-md-7">
              <form onSubmit={register} >

                <div className="mb-3  row">
                  <div className="col-md-12">
                    <label htmlFor="Name" className="form-label ">{t("Name")}</label>
                    <input type="text" className="form-control" name='name' id="firstName" onChange={(e) => getDataUser(e)} placeholder={t("First Name")} value={user.name} />
                  </div>

                </div>
                <div className="mb-3 row">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label " placeholder={t("Email")}>{t("Email")}</label>
                    <input type="email" className="form-control" name='email' id="email" onChange={(e) => getDataUser(e)} placeholder={t("name@example.com")} value={user.email} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label ">{t("Phone Number")}</label>
                    <input type="number" className="form-control" name='phone' id="phone" onChange={(e) => getDataUser(e)} placeholder={t("+201203328425")} value={user.phone} />
                  </div>



                  
                </div>
                <div className="mb-3 row">
                  <div className="col-md-12">

                    <label htmlFor="message" className="form-label">{t("Message")}</label>
                    <textarea className="form-control" id="Message" name='message' rows="2" onChange={(e) => getDataUser(e)} placeholder={t("Write your message..")} value={user.message}></textarea>
                  </div>
                </div>
                <div className="row w-100  ">
                  <div className=" d-flex justify-content-end btn-send-message">
                    <button type="submit" className="layer-btn  btn  px-5 py-2 mt-3 " disabled={isButtonDisabled} >
                      <Link className='text-white'>


                        {t("Send Message")}
                      </Link>

                    </button>

                  </div>
                </div>
              </form>
              <div className="row mt-2 mt-md-4">
    <div className="col-6">

            <p className='py-2'>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 28 21" fill="none">
  <path d="M26.5 4.28809V16.7881C26.5 17.6169 26.1708 18.4117 25.5847 18.9978C24.9987 19.5838 24.2038 19.9131 23.375 19.9131H4.625C3.7962 19.9131 3.00134 19.5838 2.41529 18.9978C1.82924 18.4117 1.5 17.6169 1.5 16.7881V4.28809" stroke="#202020" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.5 4.28809C26.5 3.45928 26.1708 2.66443 25.5847 2.07838C24.9987 1.49233 24.2038 1.16309 23.375 1.16309H4.625C3.7962 1.16309 3.00134 1.49233 2.41529 2.07838C1.82924 2.66443 1.5 3.45928 1.5 4.28809L12.3438 11.0589C12.8404 11.3693 13.4143 11.5339 14 11.5339C14.5857 11.5339 15.1596 11.3693 15.6563 11.0589L26.5 4.28809Z" stroke="#202020" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>            <a href="mailto:info@example.com">{t("info@example.com")}</a>

          </p>


  

    </div>
    <div className="col-12 col-md-6 d-flex">    
          <p className='py-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
  <path d="M21.8125 28.8011C20.4 28.8011 18.9125 28.4636 17.375 27.8136C15.875 27.1761 14.3625 26.3011 12.8875 25.2386C11.425 24.1636 10.0125 22.9636 8.675 21.6511C7.35 20.3136 6.15 18.9011 5.0875 17.4511C4.0125 15.9511 3.15 14.4511 2.5375 13.0011C1.8875 11.4511 1.5625 9.95115 1.5625 8.53865C1.5625 7.56365 1.7375 6.63865 2.075 5.77615C2.425 4.88865 2.9875 4.06365 3.75 3.35115C4.7125 2.40115 5.8125 1.92615 6.9875 1.92615C7.475 1.92615 7.975 2.03865 8.4 2.23865C8.8875 2.46365 9.3 2.80115 9.6 3.25115L12.5 7.33865C12.7625 7.70115 12.9625 8.05115 13.1 8.40115C13.2625 8.77615 13.35 9.15115 13.35 9.51365C13.35 9.98865 13.2125 10.4511 12.95 10.8886C12.7625 11.2261 12.475 11.5886 12.1125 11.9511L11.2625 12.8386C11.275 12.8761 11.2875 12.9011 11.3 12.9261C11.45 13.1886 11.75 13.6386 12.325 14.3136C12.9375 15.0136 13.5125 15.6511 14.0875 16.2386C14.825 16.9636 15.4375 17.5386 16.0125 18.0136C16.725 18.6136 17.1875 18.9136 17.4625 19.0511L17.4375 19.1136L18.35 18.2136C18.7375 17.8261 19.1125 17.5386 19.475 17.3511C20.1625 16.9261 21.0375 16.8511 21.9125 17.2136C22.2375 17.3511 22.5875 17.5386 22.9625 17.8011L27.1125 20.7511C27.575 21.0636 27.9125 21.4636 28.1125 21.9386C28.3 22.4136 28.3875 22.8511 28.3875 23.2886C28.3875 23.8886 28.25 24.4886 27.9875 25.0511C27.725 25.6136 27.4 26.1011 26.9875 26.5511C26.275 27.3386 25.5 27.9011 24.6 28.2636C23.7375 28.6136 22.8 28.8011 21.8125 28.8011ZM6.9875 3.80115C6.3 3.80115 5.6625 4.10115 5.05 4.70115C4.475 5.23865 4.075 5.82615 3.825 6.46365C3.5625 7.11365 3.4375 7.80115 3.4375 8.53865C3.4375 9.70115 3.7125 10.9636 4.2625 12.2636C4.825 13.5886 5.6125 14.9636 6.6125 16.3386C7.6125 17.7136 8.75 19.0511 10 20.3136C11.25 21.5511 12.6 22.7011 13.9875 23.7136C15.3375 24.7011 16.725 25.5011 18.1 26.0761C20.2375 26.9886 22.2375 27.2011 23.8875 26.5136C24.525 26.2511 25.0875 25.8511 25.6 25.2761C25.8875 24.9636 26.1125 24.6261 26.3 24.2261C26.45 23.9136 26.525 23.5886 26.525 23.2636C26.525 23.0636 26.4875 22.8636 26.3875 22.6386C26.35 22.5636 26.275 22.4261 26.0375 22.2636L21.8875 19.3136C21.6375 19.1386 21.4125 19.0136 21.2 18.9261C20.925 18.8136 20.8125 18.7011 20.3875 18.9636C20.1375 19.0886 19.9125 19.2761 19.6625 19.5261L18.7125 20.4636C18.225 20.9386 17.475 21.0511 16.9 20.8386L16.5625 20.6886C16.05 20.4136 15.45 19.9886 14.7875 19.4261C14.1875 18.9136 13.5375 18.3136 12.75 17.5386C12.1375 16.9136 11.525 16.2511 10.8875 15.5136C10.3 14.8261 9.875 14.2386 9.6125 13.7511L9.4625 13.3761C9.3875 13.0886 9.3625 12.9261 9.3625 12.7511C9.3625 12.3011 9.525 11.9011 9.8375 11.5886L10.775 10.6136C11.025 10.3636 11.2125 10.1261 11.3375 9.91365C11.4375 9.75115 11.475 9.61365 11.475 9.48865C11.475 9.38865 11.4375 9.23865 11.375 9.08865C11.2875 8.88865 11.15 8.66365 10.975 8.42615L8.075 4.32615C7.95 4.15115 7.8 4.02615 7.6125 3.93865C7.4125 3.85115 7.2 3.80115 6.9875 3.80115ZM17.4375 19.1261L17.2375 19.9761L17.575 19.1011C17.5125 19.0886 17.4625 19.1011 17.4375 19.1261Z" fill="#202020"/>
</svg> 
</p>
<p className='d-flex flex-column'>
<span>
  Our phone
  </span>
<span>
<a href="tel:+0123456788">+ 01 234 567 88</a>
</span>

</p>
            </div>
    <div className="col-12 col-md-6 d-flex">
    <p className='py-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 40 41" fill="none">
  <path d="M20 23.9803C16.45 23.9803 13.55 21.0969 13.55 17.5303C13.55 13.9636 16.45 11.0969 20 11.0969C23.55 11.0969 26.45 13.9803 26.45 17.5469C26.45 21.1136 23.55 23.9803 20 23.9803ZM20 13.5969C17.8334 13.5969 16.05 15.3636 16.05 17.5469C16.05 19.7303 17.8167 21.4969 20 21.4969C22.1834 21.4969 23.95 19.7303 23.95 17.5469C23.95 15.3636 22.1667 13.5969 20 13.5969Z" fill="#202020"/>
  <path d="M20.0001 38.297C17.5334 38.297 15.05 37.3637 13.1167 35.5137C8.20005 30.7804 2.76672 23.2304 4.81672 14.247C6.66672 6.09702 13.7834 2.44702 20.0001 2.44702C20.0001 2.44702 20.0001 2.44702 20.0167 2.44702C26.2334 2.44702 33.3501 6.09702 35.2001 14.2637C37.2334 23.247 31.8001 30.7804 26.8834 35.5137C24.9501 37.3637 22.4667 38.297 20.0001 38.297ZM20.0001 4.94702C15.1501 4.94702 8.91672 7.53035 7.26672 14.797C5.46672 22.647 10.4 29.4137 14.8667 33.697C17.75 36.4804 22.2667 36.4804 25.1501 33.697C29.6001 29.4137 34.5334 22.647 32.7667 14.797C31.1 7.53035 24.8501 4.94702 20.0001 4.94702Z" fill="#202020"/>
</svg>

    </p>
    <p className='d-flex flex-column'>
<span>
Our Address
</span>
<span>Abu Shahin Ave, Building 13, 923</span>
    </p>
    </div>


  </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}
