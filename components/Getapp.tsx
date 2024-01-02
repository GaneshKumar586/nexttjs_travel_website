import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Getapp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className='bold-15 lg:bold-44 xl:max-w-[470px]'>"Elevate your outdoor adventures with our app! Unlock exclusive hunts, weekly plans, and offline maps. Stay organized, connect with a global community, and make every moment count. Download now for an extraordinary adventure!</p>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="text-red-100"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="text-red-100"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/app.jpg" alt="phones" width={650} height={870} />
        </div>
      </div>
    </section>
  )
}

export default Getapp