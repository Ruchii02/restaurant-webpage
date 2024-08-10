import React from 'react'
import {FaCaretDown} from "react-icons/fa";
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/Preview.png";
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

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "#",
    },
    {
        id: 2,
        name: "Fruits",
        link: "#",
    },
    {
        id: 3,
        name: "Grains",
        link: "#",
    },
    {
        id: 4,
        name: "Drinks",
        link: "#",
    },
]
 const Navbar = ({HandlePopup }) => {
  return (
    <>
    <div className='bg-white shadow-md'>
        <div className="container flex justify-between py-4 sm:py-3">
            {/*logo section*/}
         <div className='font-bold text-3xl'>
           <img src={Logo} alt='' className='w-[80px] h-14' />
         </div>
         {/*navbar section*/}
         <div>
            <ul className='flex items-center gap-10'>
                {
                    NavLinks.map(({id , name, link})=>(
                        <li key={id}>
                            <a href={link} className=' hidden sm:inline-block 
                            hover:text-primary text-xl font-semibold'>{name}</a>
                        </li>
                    ))
                }
                {/*dropdown and links*/}
                <li className=' hidden md:block cursor-pointer group'>
                    <a href='#'
                         className='inline-block 
                            hover:text-primary text-xl font-semibold'>
                                <div className='flex items-center gap-[2px] py-2'>
                                  Dropdown
                                  <span>
                                    <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                  </span>
                                </div>
                            </a>
                            {/*dropdown section*/}
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                                <ul>
                                    {
                                        DropdownLinks.map(({id, name, link})=>(
                                            <li key={id}>
                                                <a href={link}
                                                  className='inline-block w-full rounded-md p-2
                                                  hover:bg-primary/20 text-xl '>
                                                    {name}
                                                  </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                </li>
                {/*Login button*/}
                <li>
                   <button onClick={HandlePopup} className='flex justify-center
                    items-center gap-2  
                    bg-secondary 
                    h-[40px] text-xl text-white px-2 
                    py-2 hover:scale-105 duration-300'>
                    <PersonIcon/>
                    My Account
                    </button> 
                </li>
            </ul>
         </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;
