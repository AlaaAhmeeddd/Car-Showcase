import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

export default function Header() {
    return (
        <header className="py-4 lg:px-16 px-7 w-full absolute z-10 bg-transparent">
            <nav className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={118}
                        height={18}
                    />
                </Link>
                <CustomButton text='Sign in' type='button' style='text-primary-blue rounded-full bg-white min-w-[130px]' />
            </nav>
        </header>
    )
}
