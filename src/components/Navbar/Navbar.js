
import React ,{useState}from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import style from  '../Button/Button.module.css';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown'
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
      if (window.innerWidth <= 960) {
        Button.checkButtonSize="btn--medium";
      } else {
        Button.checkButtonSize="btn--large";
      }
    };
    window.addEventListener('resize', showButton);
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);  
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  return (
 <>
 <nav className='Navbar-contianer'>
  
<Link  to ="/" className='Navbr-logo'> TRVL</Link>
  
<div className='menu-icon' onClick={handleClick}>
<i className={click ?'fas fa-times' :'fas fa-bars'} ></i>
</div>
<ul  className= {click ?'menu-items active' :'menu-items'}>
    <li className="nav-item">
    <Link  to ="/" className='nav-link' onClick={closeMobileMenu}> Home</Link>
    </li> 
    <li className="nav-item"   onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
    <Link  to ="/services" className='nav-link' onClick={closeMobileMenu}> Services </Link>
   {dropdown ? <Dropdown/> : ""}
    </li>

    <li className="nav-item">
    <Link  to ="/products" className='nav-link' onClick={closeMobileMenu}> Products</Link>
    </li>
    <li className="nav-item">
    <Link  to ="/sign-up" className='nav-link-mobile' onClick={closeMobileMenu}> Sign up</Link>
    </li>
</ul>
<Button buttonSize={style.btn__medium} buttonStyle={style.btn__outline}>Sign Up</Button>

 </nav> 
 
 
 </>
  )
}

export default Navbar
