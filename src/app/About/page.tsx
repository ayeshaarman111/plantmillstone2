import React from 'react'

const page = () => {
  return (
    <div className='bg-[#C3CA92] w-full h-auto md:h-[555px] px-4 md:px-8'>
    <div className='text-center'>
      <h1 className='text-2xl md:text-4xl pt-5 font-bold'>
        About Nature's Nest
      </h1>
      
      {/* Introduction */}
      <div className='pt-4'>
        <ul>
          <li className='pl-3 font-medium underline pt-4 text-xl md:text-2xl'>
            Introduction
          </li>
          <p className='pt-4 pl-4 font-medium text-sm md:text-base'>
            "Welcome to Nature's Nest! We’re passionate about bringing the beauty of nature into your home and life.
            Our mission is to make plants accessible, enjoyable, and a source of inspiration for everyone."
          </p>
        </ul>
      </div>
  
      {/* Mission Statement */}
      <div className='pt-8'>
        <ul>
          <li className='pl-3 font-medium underline pt-4 text-xl md:text-2xl'>
            Mission Statement
          </li>
          <p className='pt-4 pl-4 font-medium text-sm md:text-base'>
            "Our goal is to cultivate a greener, healthier world by connecting people
            with plants that suit their lifestyle and space."
          </p>
        </ul>
      </div>
  
      {/* What You Offer */}
      <div className='pt-8'>
        <ul>
          <li className='pl-3 font-medium underline pt-4 text-xl md:text-2xl'>
            What You Offer
          </li>
          <p className='pt-4 pl-4 font-medium text-sm md:text-base'>
            "We specialize in indoor plants, outdoor greenery, pots, accessories,
            and personalized plant care guides tailored to your needs."
          </p>
        </ul>
      </div>
  
      {/* Values and Commitment */}
      <div className='pt-8'>
        <ul>
          <li className='pl-3 font-medium underline pt-4 text-xl md:text-2xl'>
            Values and Commitment
          </li>
          <p className='pt-4 pl-4 font-medium text-sm md:text-base'>
            "We are committed to sustainability, sourcing ethically, 
            and supporting local nurseries and artisans."
          </p>
        </ul>
      </div>
  
    
    </div>
  </div>
  
  )
}

export default page
