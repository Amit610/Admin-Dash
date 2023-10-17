import React from 'react';
import Earning from "../assets/profits.png"
import Order from "../assets/clipboard.png"
import Balance from "../assets/cash.png"
import Sale from "../assets/shopping-bag.png"
import Search from "../assets/search.png"

const Card = () => {
  const cardData = [
    { name: 'Earning', amount: 1500, change: 200, logo: Earning },
    { name: 'Orders', amount: 50, change: -10, logo: Order },
    { name: 'Balance', amount: 3000, change: -500, logo: Balance },
    { name: 'Total Sales', amount: 2500, change: 100, logo: Sale },
  ];

  return (
    <>
       <div>
      <h1 className='m-[1rem] pl-4 font-bold'>Hello Amit!</h1>
      <div className="top-0 right-11 mb-3 absolute p-2">
          <input
            type="text"
            placeholder="Search..."
            className="border  rounded-5 focus:ring-indigo-200 p-1"
          />
          <button className="w-6 pl-2 pt-4">
            <img src={Search}/>
          </button>
        </div>
      <div className="flex flex-wrap justify-center lg:pl-[3.5rem]">
        {cardData.map((card, index) => (
          <div key={index} className="w-full lg:w-[16rem]  p-4">
            <div className="bg-white rounded-lg p-4 shadow-md flex">
              <div className="w-1/4">
                <img src={card.logo} alt={`${card.name} Logo`} className="w-12 h-12 mb-2 content-center" />
              </div>
              <div className="w-3/4 text-center">
                <p className="text-lg font-semibold">{card.name}</p>
                <p className="text-gray-500">${card.amount}</p>
             
            <div className={`text-xl mt-2 ${card.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {card.change >= 0 ? '↑' : '↓'} ${Math.abs(card.change)}
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Card;
