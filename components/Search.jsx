import React from 'react'
import Image from 'next/image'

const Search = () => {
  return (
    <form action="#" className='flex justify-center items-center w-full'>
      <div className="flex items-center gap-1 sx:px-2 md:px-4 py-2 w-full">
        <div className="">
          <Image src='/assets/search.svg' width={20} height={20} className='gray' />
        </div>
        <input type="search" name="" id="" placeholder='Find your favorite games' className='sx:w-[11rem] sm:w-[15rem] md:w-[20rem] px-1 outline-none placeholder:sx:text-sm placeholder:sm:text-base placeholder:text-gray-400' />
      </div>
    </form>
  )
}

export default Search
