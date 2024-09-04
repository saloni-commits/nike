import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className=' py-8 absolute z-10 w-full'>
        { /*--------------------Navbar 2 --------------------*/}
        <nav className='flex justify-center text-center max-container py-2 bg-red-200 text-sm'>
            Contact Us
        </nav>
        { /*--------------------Navbar 2 --------------------*/}
        <nav className='padding-x flex justify-between text-center max-container py-6 border-b-2  border-grey-100'>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="Menu" width={25} height={25}/>
            </div>
            <div className='text-sm max-lg:hidden'>Call Us At<br/>00000-00000</div>
            <h1 className='font-serif text-center text-3xl font-black'>GLAM&HEALTH</h1>
            <div className='text-sm max-lg:hidden'>Login/Register</div>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="Cart" width={25} height={25}/>
            </div>
        </nav>
        { /*-----------------Navbar 3 ---------------------*/}
        <nav className='flex justify-between text-center max-container '>
            
            <ul className='flex-1 flex justify-center items-center gap-16 border-b-2 border-grey-100 py-2 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-sm text-slate-grey'>{item.label}</a>
                    </li>
                ))}
            </ul>

        </nav>
    </header>
  )
}

export default Nav