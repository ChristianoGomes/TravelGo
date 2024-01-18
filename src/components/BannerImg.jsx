import React from 'react'
import AOS from 'aos';

const BannerImg = ({img}) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px',
       
    }
  return (
    <div data-aos= "zoom-in overflow-hidden'"
    className='mx-auto h-[300px] w-full '
    style={bgImage}>
      
    </div>
  )
}

export default BannerImg
