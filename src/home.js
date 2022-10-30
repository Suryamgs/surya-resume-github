import React from 'react'
import Image from './surya.png';
import Table from './Table';
import Details from './Details';
import './home.css';
import {BsInstagram,BsWhatsapp,BsPhone} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';
import {FaFacebook} from 'react-icons/fa';


const Home=()=>{
  return(
    <div>
   <div className="container">
    <h1 style={{color:"yellow",textAlign:"center"}}>RESUME</h1>
    <img style={{height:"200px",width:"200px",border:"3px solid #73AD21",padding:"10px"}} src={Image} className="float-end"  alt="my pic"/>
    <h3 style={{color:"red",fontStyle:"italic"}}>Surya M</h3>
    <p>Anjaneyar kovil street,</p>
    <p>Marandahalli(po),</p>
    <p>Palacode(Tk),</p>
    <p>Dharmapuri(Dt),</p>
    <h2>ACADEMIC PROFILE</h2>
    <Table/>
    <Details/>
    </div>
    <footer className="footer">
    <div className="container">
    <div className="row">
    <div className="col">
    <h4>Contact</h4>
    <ul style={{listStyle:'none'}}>
    <li style={{marginLeft:'50px'}}><BsInstagram/>suryamgs</li>
    <li style={{marginLeft:'50px'}}><BsWhatsapp/>+91 9566736864</li>
    <li style={{marginLeft:'50px'}}><BsPhone/>+91 9566736864</li>
    <li style={{marginLeft:'50px'}}><FiMail/>surya1999ms@gmail.com</li>
    <li style={{marginLeft:'50px'}}><FaFacebook/>Surya Mgs</li>
    </ul>
    </div>
    <div className="col">
    <h4>Personal Details</h4>
    <ul style={{listStyle:'none'}}>
    <li>Father's Name:V.MANIVANNAN</li>
    <li>Mother's Name:M.GEETHA</li>
    <li>D.O.B & Age:20.02.1999 & 23</li>
    <li>Languages known:Tamil,English</li>
    </ul>
    </div>
    </div></div>
    </footer>
    </div>
    )

}

export default Home;
