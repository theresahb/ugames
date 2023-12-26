import Image from 'next/image'
import React from 'react'
import { newgames } from '../../data/data'
import Categories from './Categories'
import Friends from './Friends'

const Main = () => {
    return (
        <main className=''>
            <div className="flex sx:flex-col lg:flex-row justify-center items-center gap-4 px-4 py-4">
                <div className="flex flex-col gap-4 sx:w-full lg:w-[70%]">
                    <div className="rounded-xl"
                    style={{
                        backgroundImage: `url(${'/assets/call.png'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundColor: '#5899d6'
                    }}>
                        <div className="flex sx:flex-col md:flex-row items-center gap-8">
                            <div className="">
                                <Image src={'/assets/call-of-duty2.png'} width={250} height={250} />
                            </div>
                            <div className="flex flex-col gap-4 py-8 sx:pl-0 sm:pl-4 md:pl-0 text-balance">
                                <h1 className='text-white sx:text-3xl sm:text-4xl font-semibold sx:pl-2 sm:pl-0'>Call of Duty Mobile Season 8</h1>
                                <p className="text-white sx:text-base sm:text-lg font-medium sx:pl-2 sm:pl-0">
                                    The latest update and with a very challenging adventure to make you even more excited
                                </p>
                                <div className="flex sx:flex-col sm:flex-row items-center gap-4">
                                    <button className="bg-black w-fit text-white py-3 px-8 rounded-full">Download</button>
                                    <button className="bg-transparent w-fit border border-white text-white py-2 px-7 rounded-full">Watch trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Categories />
                </div>
                <div className="flex sx:flex-col md:flex-row lg:flex-col justify-between gap-4 sx:w-full lg:w-[30%]">
                    <div className="flex flex-col gap-2 w-full px-3 py-5 border border-gray-100 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h2 className='font-semibold'>New games</h2>
                                <small className="text-gray-400">The best games just for you</small>
                            </div>
                            <p className="text-sm font-medium opacity-90">View All</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            {newgames.map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="">
                                            <Image src={item.image} width={20} height={20} className='size-full rounded-full' />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className='text-sm font-semibold text-[#3f3b3b]'>{item.text}</h2>
                                            <small className="text-gray-400">{item.subtext}</small>
                                        </div>
                                    </div>
                                    <button className="bg-transparent border border-[#5899d6] text-xs text-[#5899d6] py-1 px-4 rounded-full">Install</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Friends />
                </div>
            </div>
        </main>
    )
}

export default Main
