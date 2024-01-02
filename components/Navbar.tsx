import React from 'react'
import {NAV_LINKS} from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
const navbar = () => {
    // const width =60
    // const height =60
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/' >
            <img src="travel-icon.svg" alt="Logo of  Travel app" width={60} height={60} className='transition-all hover:w-20' />
        </Link>
        <ul className='hidden h-full gap-6 lg:flex'>
            {NAV_LINKS.map( (elem)=>(
                    <Link href={elem.href} key={elem.key} className='regular-26 text-lg font-bold  px-3 pt-2 text-red-500 flexCenter cursor-pointer pb-1.5 transition-all hover:text-3xl hover:rounded-3xl hover:text-white hover:border-gray-400 hover:border-2 hover:bg-red-500'>
                        {elem.label}
                    </Link>
                ))
            }
        </ul>
        <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/icons8-login-64.png"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default navbar