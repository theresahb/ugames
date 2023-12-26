import React from 'react'
import { tab } from '../data/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className='relative left-0 bottom-0 border-r border-gray-100 w-fit min-h-full'>
            <div className="flex flex-col justify-between items-center min-h-full px-1 pt-4 pb-4">
                <div className="flex flex-col sx:gap-6 sm:gap-2 sx:px-0 sm:px-2 ">
                    {tab.map((item) => (
                        <Link href={item.link}>
                            <button 
                                type='submit' 
                                key={item.id} 
                                className={`flex justify-center items-center gap-1 sx:px-0 sm:px-6 sx:py-0 sm:py-2 w-fit h-fit sx:rounded-none sm:rounded-full transition duration-700 ease-in-out hover:bg-[#5899d61a] ${
                                    router.pathname === item.link ? 'bg-[#5899d61a] text-[#5899d6]' : ''
                                }`}>
                                <Image src={item.image} width={5} height={5} className='gray sx:w-20 sm:size-5' />
                                <small className='sx:hidden sm:flex text-gray-500 text-base hover:text-[#5899d6]'>{item.text}</small>
                            </button>
                        </Link>
                    ))}
                </div>
                <button className='flex items-center gap-2 sx:px-0 sm:px-6 sx:py-0 sm:py-2 w-fit sx:rounded-none sm:rounded-full transition duration-700 ease-in-out hover:bg-[#5899d61a] hover:text-[#5899d6]'>
                    <Image src={'/assets/logout.svg'} width={5} height={5} className='gray sx:w-20 sm:size-5' />
                    <small className="sx:hidden sm:flex text-gray-500 text-base ">Logout</small>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
