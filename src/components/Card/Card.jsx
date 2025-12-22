import React from 'react'
import { Link } from 'react-router-dom';
import favorite from '../../assets/favorite.svg'

const Card = ({ items }) => {
  return (
    <div className="pt-24 p-10 px-5 sm:px-15 md:px-30 lg:px-40">
      <h1 className="text-2xl font-bold mb-6">
        Fresh Recommendation
      </h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Link 
          to={'/details'}
          state={{item}}
          key={item.id} style={{ borderWidth : '1px' , borderColor : 'lightgray' }} 
          >
          <div
            key={item.id}
            className="relative w-full h-72 rounded-md bg-gray-50 overflow-hidden cursor-pointer border border-gray-300"
          >
            <div className="w-full flex justify-center p-2">
              <img
                className="h-36 object-contain"
                src={item.imageUrl || "https://via.placeholder.com/300"}
                alt={item.title}
              />
            </div>

            <div className="p-4">
              <h1 className="font-bold text-xl text-[#002f34]">
                {item.price}
              </h1>
              <p className="text-sm pt-2">{item.category}</p>
              <p className="pt-2">{item.title}</p>

              <div className='absolute flex justify-center items-center p-2 bg-white rounded-full top-3 right-3 cursor-pointer'>
                <img className='w-5' src={favorite} alt="" />
              </div>

            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Card;

