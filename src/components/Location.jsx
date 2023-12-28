import React from 'react'

const Location = () => {
  return (
    <div>
      <div>
        <div className="container pb-10 ">
            <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>Locations to visit
            </h1>
            <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAApUZducH0-_JrNQk8Qa5JzIeO1yhvOnM&q=Space+Needle,Seattle+WA"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Location

