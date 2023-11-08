import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
export default function Facilities({data}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="facilitiesabout">
        <div className="container my-5 py-3">
          <div className="row ">
            <h2 className='text-center text-dark'>{t("Facilities")}</h2>
            {data?.map((facilitie) => (

            <div className="col-md-4 col-sm-12 ">
              <div className="card facilty-card text-center" >
                <div className="card-body">
                  <div className="img">
                    <img className='w-100 h-100' src={facilitie.image} />
                  </div>
                  <div className="card-title mt-3">
                    <h5 className="card-text">{facilitie.title}</h5>
                  </div>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}
