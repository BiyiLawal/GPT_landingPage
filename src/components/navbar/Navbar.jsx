import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3_navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatgpt3'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3_navbar-menu'>
        {toggle ? <RiCloseLine color='#fff' size={27} onClick={() => setToggle(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setToggle(true)} />}
        {toggle && (<div className="gpt3_navbar-menu_container scale-up-center">
          <div className='gpt3_navbar-menu_container-links'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatgpt3'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
          </div>
          <div className="gpt3_navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar