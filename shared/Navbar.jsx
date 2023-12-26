import React from 'react'
import Search from '../components/Search'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="flex justify-between sx:items-start md:items-center w-full sx:pl-2 md:pl-14 sx:pr-2 md:pr-8 py-4 border-b border-gray-100">
                    <div className="flex sx:flex-col md:flex-row sx:items-start md:items-center sx:gap-2 md:gap-20">
                        <div className="">
                            <p className="font-medium sx:text-lg sm:text-xl"><span className='text-[#5899d6]'>U</span>games</p>
                        </div>
                        <Search />
                    </div>
                    <div className="flex items-center sx:gap-2 sm:gap-4">
                        <div className="w-fit">
                            <Image src={'/assets/bell.svg'} width={25} height={25} className='gray' />
                        </div>
                        <div className="w-fit">
                            <Image src={'/assets/shopping-bag.svg'} width={25} height={25} className='gray' />
                        </div>
                        <div className="w-fit">
                            <Image src={'/assets/witcher.png'} width={20} height={20} className='size-full rounded-full' />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
