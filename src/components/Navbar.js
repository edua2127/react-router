import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav> 
      {/*
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      */}
      <NavLink to={'/'} className={({isActive})=> (isActive ? "link-ativo":"link-desativo")}>Home</NavLink>
      <NavLink to={'/about'} className={({isActive})=> (isActive ? "link-ativo":"link-desativo")}>About</NavLink>
    </nav>
  )
}

export default Navbar