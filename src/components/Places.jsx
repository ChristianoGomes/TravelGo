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
      title: "bay",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img2,
      title: "sand",
      location: "India",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img3,
      title: "hotair",
      location: "US",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
    },
    {
      img: Img4,
      title: "japan",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img5,
      title: "mountain",
      location: "United states",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img6,
      title: "aroura",
      location: "California",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
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
