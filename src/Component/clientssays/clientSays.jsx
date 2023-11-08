import React from 'react'
import ClientSaysslider from './clientSaysslider';

export default function clientSays({data}) {

  return (
    <div className="header-section " >
      <div className="layer-client" >
        <div className="container d-flex justify-content-center">
          <ClientSaysslider data={data}/>

        </div>
      </div>
    </div>  )
}
