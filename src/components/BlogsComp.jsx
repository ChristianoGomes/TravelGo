import React from 'react'
import Img1 from "../assets/sand.jpg"
import Img2 from "../assets/mountain.jpg"
import Img3 from "../assets/japan.jpg"
import BlogCard from '../components/BlogCard'



const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "Top places to visit in India",
      description:
        "Embark on a captivating journey through the diverse tapestry of India, where tradition and modernity seamlessly intertwine. Witness the timeless beauty of the Taj Mahal in Agra, a symbol of eternal love. Explore the 'Pink City' of Jaipur in Rajasthan, adorned with magnificent palaces and forts, offering a royal experience. Immerse yourself in the spiritual allure of Varanasi along the sacred Ganges River, where ancient rituals unfold against a backdrop of profound spirituality. Cruise through the tranquil backwaters of Kerala, embraced by lush greenery and traditional houseboats, for a serene escape. Discover Rishikesh and Haridwar in Uttarakhand, nestled in the foothills of the Himalayas, renowned for yoga, meditation, and the mesmerizing Ganga Aarti. Experience the vibrant nightlife and golden beaches of Goa, unwind in the desert magic of Rajasthan's Thar Desert in Jaisalmer, and marvel at the intricate temples of Khajuraho in Madhya Pradesh. Step back in time amid the fascinating ruins of Hampi, a UNESCO World Heritage Site, showcasing the remnants of the Vijayanagara Empire. Each destination promises a unique and enriching encounter, inviting you to embrace the colors, flavors, and warm hospitality that define the incredible mosaic of India.",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 1,
      image: Img2,
      title: "Top places to visit in US",
      description:
        "Embark on an exhilarating exploration of the United States, a vast and diverse nation that unfolds like a patchwork quilt of landscapes, cultures, and experiences. Begin your journey in the electrifying cityscape of New York, where towering skyscrapers and iconic landmarks define the urban rhythm. Traverse the sun-drenched deserts of the American Southwest, where the majesty of the Grand Canyon and the red rocks of Sedona inspire awe. Discover the historical tapestry of Washington, D.C., where monumental landmarks narrate the nation's story. Dive into the musical heartbeat of New Orleans, where jazz notes float through the air, and vibrant festivities are a way of life. Explore the natural wonders of Yellowstone National Park, a geothermal wonderland teeming with wildlife. Wander through the charming streets of San Francisco, where the Golden Gate Bridge frames the city's picturesque skyline. Experience the laid-back vibes of Hawaii, with its lush landscapes and inviting beaches. Conclude your odyssey in the dynamic city of Los Angeles, where the glitz of Hollywood meets the natural beauty of the Pacific coastline. The United States beckons with a mosaic of adventures, offering a kaleidoscope of experiences that redefine the notion of the American dream.",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 1,
      image: Img3,
      title: "Top places to visit in Japan",
      description:"Embark on an extraordinary odyssey through the captivating wonders and diverse landscapes of Japan, where ancient traditions seamlessly meld with cutting-edge innovation. Begin your adventure with the majestic allure of Mount Fuji, a symbol of natural beauty and tranquility. Dive into the vibrant tapestry of Tokyo, a pulsating metropolis that harmonizes modernity with age-old traditions, offering a sensory feast of lights, sounds, and flavors. Explore the cultural heart of Kyoto, where timeless temples, serene gardens, and the iconic Fushimi Inari Shrine invite contemplation and wonder. Journey to Hiroshima, a city of resilience and peace, before discovering the enchanting beauty of Miyajima Island with its floating Torii gate. Traverse the bamboo-lined pathways of the Arashiyama Bamboo Grove in Kyoto, and feel transported to a realm of ethereal serenity. Immerse yourself in the dynamic street life and culinary delights of Osaka, and encounter the friendly deer of Nara amidst ancient temples. Conclude your sojourn in the therapeutic embrace of Hakone's hot springs, surrounded by picturesque landscapes. Japan beckons with a harmonious blend of tradition and modernity, promising an unforgettable tapestry of experiences for the intrepid traveler.",
        
      date: "April 22, 2022",
    },
  ];
  

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up"
      className='container'>
        <h1
        className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'
        >Our latest Blogs
        </h1>
        <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3'>
            {BlogsData.map((item, index)=> (
                <BlogCard key={index} {...item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsComp
