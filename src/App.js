import './App.css';
import Datas from './Components/datas/Datas';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const datas = [
    { name: "Hello", num: 1 },
    { name: "gelo", num: 2 },
    { name: "bolo", num: 3 },
    { name: "lolo", num: 4 },
    { name: "bulo", num: 5 },
  ]


  return (
    <div className="App">

      <div onClick={() => setOpen(!open)} className='w-6 md:hidden'>
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>

      <ul className={`md:flex justify-center absolute duration-500 ease-in ${open ? "top-6" : "top-[-150px]"}`}>
        {datas.map(data => <Datas data={data} key={data.num}></Datas>)}
      </ul>
    </div>
  );
}

export default App;
