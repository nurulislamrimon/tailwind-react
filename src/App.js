import './App.css';
import Menus from './Components/Menus/Menus';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import PricingOption from './Components/PricingOption/PricingOption';


function App() {
  const [open, setOpen] = useState(false);
  const menus = [
    { name: "Home", num: 1 },
    { name: "gelo", num: 2 },
    { name: "bolo", num: 3 },
    { name: "lolo", num: 4 },
    { name: "bulo", num: 5 },
  ]
  const pricingOption = [
    {
      name: "Free", num: 1, price: 0, features: [
        "Buy for 10 days",
        "Take support",
        "Make comunity",
        "Welcome Bonus 10 Days"
      ]
    },
    {
      name: "Regular", num: 2, price: 50, features: [
        "Buy for 10 days",
        "Take support",
        "Make comunity"
      ]
    },
    {
      name: "Premium", num: 3, price: 100, features: [
        "Buy for 10 days",
        "Take support",
        "Make comunity"
      ]
    }
  ]


  return (
    <div className="App">

      <div onClick={() => setOpen(!open)} className='w-6 md:hidden mx-auto'>
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>

      <ul className={`md:static md:flex justify-center absolute duration-500 ease-in ${open ? "top-6" : "top-[-150px]"} bg-red-300 w-full md:mt-1`}>
        {menus.map(menu => <Menus data={menu} key={menu.num}></Menus>)}
      </ul>

      <div className='text-center mt-6 bg-red-300 p-3'>
        <h1 className='text-4xl'>Pricing Options:</h1>
        <div className='grid md:grid-cols-3 gap-2 mt-5'>
          {pricingOption.map(option => <PricingOption
            key={option.num}
            option={option}
          ></PricingOption>)}
        </div>
      </div>


    </div>
  );
}

export default App;
