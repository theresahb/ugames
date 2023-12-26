import React, { useState } from 'react'
import { friends } from '../../data/data'
import Image from 'next/image'

const Friends = () => {
    const [active, setActive] = useState(0)

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <section>
            <div className="flex flex-col gap-4 px-3 py-4 border border-gray-100 rounded-lg">
                <div className="flex justify-between items-center bg-gray-100 rounded-full p-2">
                    {friends.map((item, index) => (
                        <button key={index} 
                        onClick={() => handleClick(index)} 
                        className={`${active === index ? 'bg-[#5899d6] text-white' : 'bg-transparent text-black'} gap-2 px-4 py-1 rounded-full`}>
                            <small className='text-sm font-medium'>{item.text}</small>
                        </button>
                    ))}
                </div>
                <div className="">
                    {friends[active] && 
                        <div className='flex flex-col items-center gap-4'>
                            {friends[active].content.map((item) => (
                                <div key={item.id} className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-2">
                                        <div className="">
                                            <Image src={item.image} width={20} height={20} className='size-full rounded-full' />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className='text-sm font-semibold text-[#3f3b3b]'>{item.text}</h2>
                                            <small className="text-gray-400">{item.subtext}</small>
                                        </div>
                                    </div>
                                    <button 
                                    type='submit'
                                    className={`${item.status === 'Online' ? 'text-[#5899d6]' : 'text-red-400'} border-none text-xs py-1 px-4 rounded-full`}>
                                        {item.status}
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Friends
