"use client";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { manufacturers } from '@/@constants'
import { useState } from 'react';
import Image from 'next/image';
import { SearchManuFacturerProps } from '@/type';


export default function SearchManufacturer({ manufacturer, setManuFacturer }: SearchManuFacturerProps) {
  const [query, setQuery] = useState("")
  const queryMenuFacturer = 
    query === ""
    ? manufacturers
    : manufacturers.filter((item)=>(
      item
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""))
    ));
  return(
    <div className="flex-1 max-sm:w-full flex justify-start items-center bg-light-white rounded-l-full max-sm:rounded-full">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="w-full relative">
          <div className="flex gap-3 relative">
            <ComboboxInput
              aria-label="Assignee"
              className="rounded-l-full max-sm:rounded-full bg-transparent py-3 w-full px-12 outline-none h-[48px]"
              placeholder="Volkswagen..."
              onChange={(event)=>{setQuery(event.target.value)}}
              displayValue={(item: string)=>item}
            />
            <ComboboxButton className="group absolute inset-y-0 px-2.5">
              <Image 
                src='/car-logo.svg' 
                alt='model' 
                width={20}
                height={20}
                className='ml-2' />
            </ComboboxButton>
          </div>
          <ComboboxOptions className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 
          focus:outline-none sm:text-sm mt-1 max-h-80 w-full overflow-auto rounded-md absolute left-0 z-20">
            {
              queryMenuFacturer.length === 0 
              ? <ComboboxOption
                  className={({ active }) =>
                    'relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 my-1'
                  }
                  value={query}
                >
                  Create {query}
                </ComboboxOption>
              : 
                queryMenuFacturer.map((manufacturer, index) => (
                  <ComboboxOption
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 my-1 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={manufacturer}
                >
                  {manufacturer}
                </ComboboxOption>
              ))
            }
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  )
}
