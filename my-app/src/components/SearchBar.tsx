"use client";
import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

export default function SearchBar() {
    const [manufacturer, setManuFacturer] = useState("");
    return (
        <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManuFacturer={setManuFacturer}
            />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'
                />
                <input
                    type='text'
                    name='model'
                    placeholder='Tiguan...'
                    className='w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}
