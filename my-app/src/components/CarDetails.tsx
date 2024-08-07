import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { carDetailsProps } from "@/type";
import Image from 'next/image';

export default function CarDetails({isOpen, closeModal, car}: carDetailsProps) {
    return (
        <div>
            <Dialog open={isOpen} onClose={closeModal} className="relative z-[250]">
                <div className="top-0 left-0 h-screen w-screen fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-4 border bg-white p-12 rounded-xl">
                        <button
                        type='button'
                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                        onClick={closeModal}
                        >
                        <Image
                            src='/close.svg'
                            alt='close'
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                        </button>
                        <div className='flex flex-1 flex-col gap-3'>
                            <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg"> 
                                <Image src='/hero.png' fill priority alt="car's image" className="object-contain" />
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                    <Image src='/hero.png' fill priority alt="car's image" className="object-contain" />
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                    <Image src='/hero.png' fill priority alt="car's image" className="object-contain" />                                
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                    <Image src='/hero.png' fill priority alt="car's image" className="object-contain" />                                
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <h2 className='font-semibold text-xl capitalize'>
                                {car.make} {car.model}
                            </h2>
                            <div className='mt-3 flex flex-wrap gap-4'>
                                {Object.entries(car).map(([key, value]) => (
                                <div className='flex justify-between gap-5 w-full text-right' key={key} >
                                    <h4 className='text-grey capitalize'>
                                    {key.split("_").join(" ")}
                                    </h4>
                                    <p className='text-black-100 font-semibold'>
                                    {value}
                                    </p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}
