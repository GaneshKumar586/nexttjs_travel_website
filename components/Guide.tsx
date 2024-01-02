import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp2.jpg" alt="camp" width={6000} height={1800} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10"
         style={{ backgroundImage: "url( '/camp2.jpg')", backgroundSize: 'cover', backgroundPosition: 'right' }}
        >
          <h2 className="bold-40 lg:bold-62 h-[600px] mt-20  text-white p-4 rounded-md xl:max-w-[400px] hover:w-[500px]">Guide You to Easy Path and Discover, Explore, and Thrive: Scavenger Hunt & Camping Adventure Awaits!</h2>
          <p className="regular-16 mt-10 text-white text-3xl xl:max-w-[450px] hover:regular-30">"Embark on a journey of discovery and excitement with our Scavenger Hunt and Camping Adventure – where every trail leads to unforgettable moments and every campfire tells a story. Get ready to explore, connect, and make memories that will last a lifetime. We're here for you every step of the way!</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/landscape-adventure-camp-camping.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-red-600 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-100">Destination</p>
                <p className="bold-16 text-gray-100">40 min</p>
              </div>
              <p className="bold-20 mt-2 text-gray-100">Alps Mountains</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-100">Start track</p>
              <h4 className="bold-20 mt-2 text-gray-100 whitespace-nowrap">salp hills</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide