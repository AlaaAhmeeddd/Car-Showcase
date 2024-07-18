"use client";
import { CarProps } from "@/type";
import { calculateCarRent } from "../../utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";

interface CarCardProps {
    car: CarProps
}

export default function CarCard({car}:CarCardProps) {
    const [ isOpen, setOpen ] = useState(false);
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className="relative w-full text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl p-6 group">
            <div className="w-full flex justify-between items-start gap-2">
                <h2 className="text-[25px] leading-[26px] font-semibold capitalize">
                    {make} {model}
                </h2>
            </div>
            <p className="flex text-[30px] font-bold leading-[38px] mt-8 relative">
                <span className="text-[16px] font-semibold leading-[17px] self-start">$</span>
                {carRent}
                <span className="text-[16px] font-medium leading-[17px] self-end">/day</span>
            </p>
            <div className="relative w-full h-40 object-contain">
                <Image src='/hero.png' fill priority alt="car's image" className="object-contain" />
            </div>
            <div className="relative w-full">
                <div className="flex justify-between items-center mt-10 text-grey group-hover:invisible">
                    <div className="flex flex-col gap-1.5 items-center">
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                        {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center">
                        <Image src="/gas.svg" width={20} height={20} alt="seat" />
                        <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="absolute bottom-0 z-10 w-full hidden group-hover:flex">
                    <CustomButton
                        text='View More'
                        style='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={()=>setOpen(true)}
                    />
                </div>
            </div>
        </div>
    )
}
