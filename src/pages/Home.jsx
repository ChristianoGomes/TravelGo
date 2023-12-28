import React from 'react'
import NatureVid from '../assets/nature.mp4'
import Hero from '../components/Hero'
import Places from '../components/Places'
import BannerImg from '../components/Bannerimg'
import Bannerimg2 from '../assets/cover-women.jpg'
import Banner2 from '../assets/travel-cover2.jpg'
import Blogs from '../pages/Blogs'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Popup from '../components/Popup'



const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false)

const handleOrderPopup = () => {
  setOrderPopup(!orderPopup);
};

  return (
   <>
   <div>
    <div className='relative h-[700px]'>
      <video 
      autoPlay
      loop 
      muted 
      className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1] '>
        <source src={NatureVid}
        type='video/mp4'/>
         
      </video>
      <Hero />
    </div>
    <Places handleOrderPopup={handleOrderPopup} />
    <BannerImg img={Bannerimg2}/>
    <Blogs />
    <Banner />
    <BannerImg img={Banner2}/>
    <Testimonial />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    <Footer />
   </div>
   </>
  )
}

export default Home
