import React from 'react'
import { FaClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


const page = () => {
    return (
        <div className="bg-[#C3CA92] w-full py-8">
        {/* Blog Title */}
        <div className="flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Our Most Demanding</h1>
        </div>
      
        {/* Blog Subtitle */}
        <div className="flex items-center justify-center mt-4 px-4">
          <p className="text-[#354C2B] text-center text-sm sm:text-base md:text-lg">
          We specialize in bringing nature closer to you with carefully curated plants, pots, and accessories.
         Whether you're a seasoned plant parent or just starting your green journey
          </p>
        </div>
      
        {/* Blog Posts */}
        <div className="flex flex-col md:flex-row md:space-x-6 mt-8 space-y-8 md:space-y-0 justify-center items-center px-4">
          {/* Post 1 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot1.jpg"
              alt="sofaone"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Parsley
            </p>
            <button className="mt-2 font-medium">Rs. 534.00</button>
           
          </div>
      
          {/* Post 2 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot2.jpg"
              alt="palant"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Alovera Plant
            </p>
            <button className="mt-2 font-medium ">Rs. 25,00</button>
           
          </div>
      
          {/* Post 3 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot3.jpg"
              alt="sofathree"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Mud pot
            </p>
            <button className="mt-2 font-medium ">Rs.1,000.00</button>



            
          </div>

         {/* post 4*/}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot4.jpg"
              alt="sofafour"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Plant Love
            </p>
            <button className="mt-2 font-medium ">Rs. 5,00.00</button>



            
          </div>


        </div>

        {/*div2*/}

              {/* Blog Posts */}
        <div className="flex flex-col md:flex-row md:space-x-6 mt-8 space-y-8 md:space-y-0 justify-center items-center px-4">
          {/* Post 5 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot5.jpg"
              alt="plant"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Lavender Flower with pot
            </p>
            <button className="mt-2 font-medium">Rs. 5,000.00</button>
           
          </div>



             {/* Post 6*/}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot9.jpg"
              alt="plant"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
           Glass Pot With Green Leave
            </p>
            <button className="mt-2 font-medium ">Rs. 2,000.00</button>
           
          </div>
      
          {/* Post 7 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot7.webp"
              alt="plant"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
           Simple Pot With Green Leave
            </p>
            <button className="mt-2 font-medium ">Rs. 15,00.00</button>
          </div>

         {/* post 8*/}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/pot8.webp"
              alt="plant"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Aesthetic Pot for Aesthetic Home
            </p>
            <button className="mt-2 font-medium ">Rs. 7,000.00</button>



            
          </div>
        </div>
      
        {/* View All Link */}
        <div className="flex items-center justify-center mt-12">
          <h1 className="underline font-medium text-sm sm:text-base md:text-lg">
            View More
          </h1>
        </div>
      </div>
  )
}

export default page