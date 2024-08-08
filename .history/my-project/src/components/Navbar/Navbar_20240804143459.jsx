import React from 'react'

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
         <div className='font-bold'>
           Logo 
         </div>
         {/*navbar section*/}
         <div>
            <ul className='flex items-center gap-10'>
                {
                    NavLinks.map(({id , name, link})=>(
                        <li key={id}>
                            <a href={link}>{name}</a>
                        </li>
                    ))
                }
            </ul>
         </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;
