import React  from 'react';
import  Settings from "../assets/setting.png"
import Dash from "../assets/dashboard.png"
import Product from "../assets/box.png"
import customer from "../assets/people.png"
import Income from "../assets/wallet.png"
import Pramote from "../assets/discount.png"
import Help from "../assets/question.png"


const Navbar = () => {
  
  return (
  <div className="flex h-screen flex-col justify-between border-e bg-indigo-950 w-56  ">
  <div className="px-4 py-6">
    <span
      className="flex h-10 w-32 place-content-center rounded-lg bg-indigo-950 text-xl text-white"
    >
     <img className="h-6 w-18 m-1 pl-2 pr-2" src={Settings}/> Dashboard
    </span>

    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="/home"
          className="flex rounded-lg  px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out hover:bg-gray-400 hover:text-gray-700"
        >
          <img className="h-3 w-18 m-1 pr-2" src={Dash}/>  Dashboard
        </a>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="transition duration-200 ease-in-out flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-400 hover:text-gray-700"
          >
            <span className=" flex text-sm font-medium"> <img className="h-4 w-18 m-1 pr-2" src={Product}/>Product </span>

            <span
              className="shrink-0 transition duration-300 group-open:-rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700"
              >
                Banned Users
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700"
              >
                Calendar
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a
          href=""
          className="flex transition duration-200 ease-in-out rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-400 hover:text-gray-700"
        >
           <img className="h-4 w-18 m-1 pr-2" src={customer}/>Customer
        </a>
      </li>

      <li>
        <a
          href=""
          className="flex transition duration-200 ease-in-out rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-400 hover:text-gray-700"
        >
           <img className="h-4 w-18 m-1 pr-2" src={Income}/>Income
        </a>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex transition duration-200 ease-in-out cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-400 hover:text-gray-700"
          >
            <span className="flex text-sm font-medium">  <img className="h-4 w-18 m-1 pr-2" src={Pramote}/>Pramote</span>

            <span
              className="shrink-0 transition duration-300 group-open:-rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700"
              >
                Details
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700"
              >
                Security
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a
          href=""
          className="flex transition duration-200 ease-in-out rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-400 hover:text-gray-700"
        >
          <img className="h-4 w-18 m-1 pr-2" src={Help}/> Help ?
        </a>
      </li>
    </ul>
  </div>

  <div className="sticky text-white inset-x-0 bottom-0 border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-indigo-950 p-4 ">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>
  );
};

export default Navbar;

