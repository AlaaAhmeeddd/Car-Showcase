"use client"
import { optionsProps } from '@/type'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

export default function CustomFilter({title, list}: optionsProps) {
    const [option, setOption] = useState(list[0])
    const router = useRouter()

    const updateUrl = (e: { title: string; value: string })=> {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(title, e.value);
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname)
    }

    return (
        <div className="border shadow-lg rounded-lg">
            <Listbox value={option} onChange={(e)=>{
                setOption(e)
                updateUrl(e)
            }}>
                <div className=''>
                    <ListboxButton
                    className={clsx(
                        'relative capitalize flex items-center justify-between w-[120px] rounded-lg bg-white/5 py-1.5 px-3 text-left text-sm/6',
                    )}
                    >
                        {option.title}
                        <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
                    </ListboxButton>
                    <ListboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-[var(--button-width)] h-[130px] mt-1 rounded-md shadow-md border border-white bg-white py-1',
                        'transition duration-100 ease-in'
                    )} 
                    >
                    {list.map((item, index) => (
                        <ListboxOption
                        key={index}
                        value={item}
                        className={({ active }) =>
                            `group flex cursor-pointer gap-2 px-3 relative select-none py-2 ${
                                active ? "bg-primary-blue text-white" : "text-gray-900"
                            }`
                        }
                        >
                            <div className="text-sm/6">{item.title}</div>
                        </ListboxOption>
                    ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    )
}
