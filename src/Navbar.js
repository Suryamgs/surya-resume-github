import React,{useState} from 'react';
import './Navbar.css'
import Home from './home'
import {Link} from 'react-router-dom'
import {FiMenu,FiX} from 'react-icons/fi'

const Navbar=()=>{
  const [open,setOpen]=useState(false);
  const handleClick=()=>setOpen(!open);
  const closeMenu=()=>setOpen(false);
  return(
    <div className="nav-container sticky-top" style={{padding:'0px',boxSizing:'border-box',height:'15vh'}}>
    <nav style={{backgroundColor:'blue',display:'flex',height:'100%',justifyContent:'space-between'}}>
    <div className="logo" style={{justifyContent:'space-around',alignItems:'center',display:'flex',color:'white',marginLeft:'20px'}}>Navbar</div>
    <div onClick={handleClick} className="nav-icons">
    {open ? <FiX/> : <FiMenu/>}
    </div>
    <ul className={open ?'nav-links':'nav-links active'} style={{listStyleType:'none',display:'flex',justifyContent:'space-around',width:'40%',alignItems:'center'}}>
    <Link to='/home'><li onClick={closeMenu }className="nav-item"><a style={{textDecoration:'none',color:'white'}} href="#">Home</a></li></Link>
    <Link to='/card'><li onClick={closeMenu}className="nav-item"><a style={{textDecoration:'none',color:'white'}} href="#">Card</a></li></Link>
    <Link to='/form'><li onClick={closeMenu}className="nav-item"><a style={{textDecoration:'none',color:'white'}} href="#">Form</a></li></Link>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar;
