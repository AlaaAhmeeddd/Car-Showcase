import Link from 'next/link'

export default function CopyRight() {
    return (
        <div className="mb-10 lg:px-16 px-7">
            <div className='container mx-auto flex justify-between items-center flex-wrap'>
                <p>@2023 CarHub. All rights reserved</p>
                <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                    <Link href="/" className="text-gray-500">
                        Privacy & Policy
                    </Link>
                    <Link href="/" className="text-gray-500">
                        Terms & Condition
                    </Link>
                </div>
            </div>
        </div>
    
    )
}
