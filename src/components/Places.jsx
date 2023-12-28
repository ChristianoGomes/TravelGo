import React from 'react'
import Img1 from '../assets/bay.jpg'
import Img2 from '../assets/sand.jpg'
import Img3 from '../assets/hotair.jpg'
import Img4 from '../assets/japan.jpg'
import Img5 from '../assets/mountain.jpg'
import Img6 from '../assets/aroura.jpg'
import PlacesCard from './PlacesCard'

const PlacesData = [
    {
      img: Img1,
      title: "Bay of Navarino",
      location: "Greece",
      description: "The Bay of Navarino is a picturesque natural harbor located in the southwestern part of the Peloponnese peninsula in Greece. Surrounded by rugged landscapes, the bay is historically significant as the site of the Battle of Navarino in 1827, a decisive conflict during the Greek War of Independence. Today, the bay attracts visitors with its serene waters, dotted with islands, and the historic town of Pylos, which overlooks the bay. Rich in maritime history and natural beauty, the Bay of Navarino is a captivating destination for those interested in both cultural heritage and scenic landscapes.",
      price: 3700,
      type: "Cultural Relax",
    },
    {
      img: Img2,
      title: "Taj Mahal",
      location: "India",
      description:
        "The Taj Mahal is an iconic white marble mausoleum situated in Agra, India. Commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is considered one of the most exquisite examples of Mughal architecture. Completed in 1653, the Taj Mahal is renowned for its symmetrical design, intricate carvings, and the central dome that crowns the structure. The monument is surrounded by well-maintained gardens and features a reflecting pool, adding to its breathtaking beauty. Recognized as a UNESCO World Heritage Site, the Taj Mahal is a symbol of eternal love and stands as a masterpiece of craftsmanship and architectural splendor.",
      price: 3700,
      type: "Cultural Relax",
    },
    {
      img: Img3,
      title: "Cappadocia",
      location: "Turkey",
      description:
        "Cappadocia is a captivating region in central Turkey, known for its otherworldly landscapes characterized by unique rock formations and fairy-tale-like chimneys. The region's distinctive topography is a result of volcanic activity and erosion over centuries, creating surreal valleys and caves. Cappadocia is famous for its hot air balloon rides, offering breathtaking views of the surreal landscape during sunrise. The area is also dotted with ancient cave dwellings, underground cities, and rock-cut churches, reflecting its rich history and cultural heritage. Visitors to Cappadocia can explore the Goreme Open-Air Museum, take scenic hikes through the valleys, and immerse themselves in the enchanting atmosphere of this extraordinary destination.",
      price: 3200,
      type: "Cultural Relax",
    },
    {
      img: Img4,
      title: "MT. Fuji",
      location: "Japan",
      description: "Mount Fuji, or Fuji-san, is Japan's highest and most iconic mountain, standing at 3,776 meters (12,389 feet). Located on Honshu Island, about 100 kilometers southwest of Tokyo, it is an active stratovolcano with a nearly perfect, symmetrical cone shape. Mount Fuji holds cultural and spiritual significance in Japan and has been celebrated in art and literature for centuries.",
      price: 3700,
      type: "Adventure",
    },
    {
      img: Img5,
      title: "Pikes Peak",
      location: "United states",
      description:
        "Pikes Peak, also known as America's Mountain, is a majestic summit located in the Rocky Mountains of Colorado, USA. Standing at an elevation of 14,115 feet (4,302 meters), it is one of the most famous and accessible fourteeners (mountains with elevations over 14,000 feet) in the United States. Pikes Peak is renowned for its stunning panoramic views of the surrounding landscapes, including the city of Colorado Springs and the vast plains to the east.",
      price: 3700,
      type: "Adventure",
    },
    {
      img: Img6,
      title: "Aurora Borealis",
      location: "United states",
      description:
        "The Aurora Borealis, also known as the Northern Lights, is a mesmerizing natural light display that occurs in the polar regions of the Earth. This breathtaking phenomenon is caused by the interaction between charged particles from the sun and the Earth's magnetic field and atmosphere",
      price: 3200,
      type: "Adventure",
    },
  ];

const Places = () => {
  return (
    <div className='bg-gray-50 py-10 '>
      <div className='container '>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to visit</h1>
        <div className='grid grid-cols-1 sm:grid-cols md:grid-cols-2 gap-4'>
            {
                PlacesData.map((item, index) =>(
                    <PlacesCard key={index} {...item} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Places
