import React, { useState } from 'react'
import { categories } from '../../data/data'
import Image from 'next/image'

const Categories = () => {
    const [active, setActive] = useState(0)

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <section>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Game Categories</h1>
                    <div className="flex flex-wrap gap-4 items-center">
                        {categories.map((item, index) => (
                            <button key={index} 
                            onClick={() => handleClick(index)} 
                            className={`${active === index ? 'bg-[#5899d6] text-white' : 'bg-transparent text-black border border-gray-200'} flex items-center gap-2 px-3 py-2 rounded-full`}>
                                <div className={`${active === index ? ' bg-[#1e51801a]' : 'bg-[#5899d61a]'} flex justify-center items-center p-1 size-8 rounded-full`}>
                                    <Image src={item.image} width={20} height={20} className='gray' />
                                </div>
                                <small className='text-sm font-medium'>{item.genre}</small>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold">Most Popular</h1>
                        <p className="text-sm font-medium opacity-90">View All</p>
                    </div>
                    <div className="">
                        {categories[active] && 
                            <div className='grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                                {categories[active].content.map((item) => (
                                    <div className="relative">
                                        <div className="rounded-lg overflow-hidden">
                                            <Image src={item.image} />
                                        </div>
                                        <div className="flex flex-col text-white absolute left-2 bottom-4">
                                            <p className="font-semibold">{item.text}</p>
                                            <small className="opacity-90 font-medium">{item.subtext}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
