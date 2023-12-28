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
    <div data-aos= "zoom-in"
    className='h-[400px] w-full'
    style={bgImage}>
      
    </div>
  )
}

export default BannerImg
