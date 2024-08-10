import React from 'react'
import {FaCaretDown} from "react-icons/fa";
const NavLinks = [
    {
        id: 1,
        name:"Home",
        link: "#"

    },
    {
        id: 1,
        name:"About",
        link: "#"

    },
    {
        id: 1,
        name:"Contact",
        link: "#"

    },
];
 const Navbar = () => {
  return (
    <>
    <div className='bg-white shadow-md'>
        <div className="container flex justify-between py-4 sm:py-3">
            {/*logo section*/}
         <div className='font-bold text-3xl'>
           Logo 
         </div>
         {/*navbar section*/}
         <div>
            <ul className='flex items-center gap-10'>
                {
                    NavLinks.map(({id , name, link})=>(
                        <li key={id}>
                            <a href={link} className='inline-block 
                            hover:text-primary text-xl font-semibold'>{name}</a>
                        </li>
                    ))
                }
                {/*dropdown and links*/}
                <li className='cursor-pointer group'>
                    <a href='#'
                    className='inline-block 
                            hover:text-primary text-xl font-semibold'>
                                Dropdown
                                <span>
                                    <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                </span>
                            </a>
                </li>
            </ul>
         </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;
