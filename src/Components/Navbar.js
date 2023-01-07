import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)
    const [dropdownPad, setDropdownPad] = useState(false)

  return (
    <>
    <div className="navbar">
        <div className='navbar__body'>
            <div className='bar'>
                <FaBars onClick={() => setDropdown(!dropdown)}  className='bars'/>
            </div>
            <div className='logo'>
               <img src={logo} alt="logo" />
            </div>
            <div className='bigNav'>
                <a href="/" >BOOK</a>
                <a href="/" >CHECK IN</a>
                <a href="/" >MANAGE</a>
            </div>
            
            <div className='smallNav'>
                    <a href="/" >Deals</a>
                    <a href="/" >Flying Withs Us</a>
                    <a href="/" >Where we Fly</a>
                    <a href="/" >Shop</a>
                    <a href="/" >FAQ</a>
                    <a href="/" >Fees</a>
            </div>

        </div>
        <div className='logo_res'>
               <img src={logo} alt="logo" />
        </div>
        <div className='res__signin'>
                <a href="/" >Sign In</a>
        </div>
        <div className='rightNav'>
            <h3>elevate</h3>
            <div className='navSign'>
                <a href="/" >Sign In</a>
                <a href="/" >Sign Up</a>
            </div>
            <div className='barTab'>
                <FaBars onClick={() => setDropdownPad(!dropdownPad)}  className='bars'/>
            </div>
        </div>
    </div>
    {dropdown ===  true ?
    <div className='dropdown'>
           <div className='bigNav'>
                <a href="/" >BOOK</a>
                <a href="/" >CHECK IN</a>
                <a href="/" >MANAGE</a>
            </div>
            <div className='smallNav'>
                    <a href="/" >Deals</a>
                    <a href="/" >Flying Withs Us</a>
                    <a href="/" >Where we Fly</a>
                    <a href="/" >Shop</a>
                    <a href="/" >FAQ</a>
                    <a href="/" >Fees</a>
            </div>
    </div>
    : null}
    {dropdownPad === true ?
    <div className='dropdownPad'>
        <div className='smallNav'>
                    <a href="/" >Deals</a>
                    <a href="/" >Flying Withs Us</a>
                    <a href="/" >Where we Fly</a>
                    <a href="/" >Shop</a>
                    <a href="/" >FAQ</a>
                    <a href="/" >Fees</a>
            </div>
    </div>
    :null}
    </>
  )
}

export default Navbar
