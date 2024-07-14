import { footerLinks } from '@/@constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-10 pb-14 lg:px-16 px-7 border-t border-b border-gray-200 my-10'>
      <div className='container mx-auto flex max-md:flex-col flex-wrap justify-between gap-5'>
        <div className='flex flex-col justify-start items-start gap-5'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='mb-4'
          />
          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className='flex justify-between flex-wrap gap-16 lg:mt-0 mt-10'>
          {
            footerLinks.map((link, index)=>(
              <div key={index} className='flex flex-col gap-5 text-base min-w-[170px]'>
                <h3 className='font-semibold'>{link.title}</h3>
                <div className='flex flex-col gap-5'>
                  {
                    link.links.map((item, index)=>(
                      <Link key={index} href={item.url} className='text-gray-500'>
                        {item.title}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
