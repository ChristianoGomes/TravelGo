import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  
  return (
    <>
      <div  className="py-10">
        <div className="container ">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          {/* testimonial section */}
          {/* i need the items in that div to be aligned hroizontally
           */}
          <div className="">
          <div className="flex-col items-center gap-4"
            style={{ maxWidth: "100vw", width:"100%" }}>
  <div
  >
    {testimonialData.map(({ id, name, text, img }) => {
      return (
        <div key={id} className="my-6 ">
          <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
            <img src={img} alt="" className="rounded-full mx-auto" />
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-gray-500 text-sm">{text}</p>
            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
          </div>
        </div>
      );
    })}
  </div>
</div>
</div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;