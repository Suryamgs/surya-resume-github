import React from 'react'
import Image from './surya.png';

const Card =() =>{
  return(
    <div className="container">
    <div className="ui cards" style={{marginTop:'30px',marginLeft:'30px'}}>
    <div className="row">
    <div className="column">
    <div className="card">
    <div className="content">
    <img className="right floated mini ui image" src={Image}/>
    <div className="header" style={{color:'red'}}>
    Surya M</div>
    <div className="meta">Web developer</div>
    <div className="description">I wants to placed in your company and work for your company's development</div>
    </div>
    <div className="extra content">
    <div className="ui two buttons">
    <div className="ui basic green button">Accept</div>
    <div className="ui basic red button">Decline</div>
    </div>
    </div>
    </div></div>
    <div className="column"style={{marginTop:'30px'}}>
    <div className="card">
    <div className="content">
    <img className="right floated mini ui image" src={Image}/>
    <div className="header"style={{color:'red'}}>
    Surya M</div>
    <div className="meta">Web developer</div>
    <div className="description">I wants to placed in your company and work for your company's development</div>
    </div>
    <div className="extra content">
    <div className="ui two buttons">
    <div className="ui basic green button">Accept</div>
    <div className="ui basic red button">Decline</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="card" style={{width:'400px',borderStyle:'solid',borderColor:'#00ffff',marginTop:'50px',marginLeft:'30px'}}>
    <img className="card-img-top"src={Image}style={{width:'100%'}} alt="card Pic"/>
    <div className="card-body">
    <h4 className="card-title" style={{marginLeft:'50px'}}>M Surya</h4>
    <p className="card-text" style={{marginLeft:'50px'}}>Some sample text</p>
    <a className="btn btn-success"style={{textDecoration:'none',marginLeft:'50px'}} href="#">see profile</a>
    </div>
    </div>
    </div>
  )
}

export default Card;
