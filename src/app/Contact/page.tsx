import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="relative w-full h-[450px]">
    <Image height={450} width={350} src="/images/wallpaper.jpg" alt="wallpaper" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-4">
      <h1 className="text-[#A4B17B] text-6xl font-bold">Our Instagram</h1>
      <p className="text-[#dfe6cb] text-lg">Follow our store on Instagram</p>
      <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
        Follow Us
      </button>
    </div>
  </div>
  
  )
}

export default page
