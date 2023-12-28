import React from 'react'
import Location from '../components/Location'
import BlogsComp from '../components/BlogsComp'

const About = () => {
  return (
    <div className="container pt-14 ">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 text-3xl font-bold">
          About us
        </h1>
        <p>
        Welcome we are your passport to extraordinary journeys and unforgettable experiences! Our travel agency page beckons you to explore the world like never before.

Immerse yourself in a seamless user experience as you navigate through our intuitive website, designed to showcase an array of handpicked destinations. From sun-kissed beaches to majestic mountains, our page provides a visual feast that sparks the wanderlust in you.

With swift responsiveness and dynamic features, our website ensures effortless planning on any device. Explore curated packages, discover travel tips, and get ready to embark on a journey of a lifetime.

Join us on a visually stunning and user-friendly exploration of the world. Let us be your guide to creating memories that last a lifetime.
        </p>
      </div>
      <Location />
      <BlogsComp />
    </div>
  );
};

export default About
