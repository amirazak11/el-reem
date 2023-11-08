import React, { useState } from 'react';
import GrayLayer from '../GrayLayer/GrayLayer';
export default function HomeheaderDiv({data}) {
  const [homeHeaderdata, sethomeHeaderdata] = useState({
    htmlCode: `
        `,
    backgroundImage: '/src/Imgs/7d9ed5ceb6e22b3cb6c6a8fa865b5451.png',
  });

  return <GrayLayer divData={data} />;
}
