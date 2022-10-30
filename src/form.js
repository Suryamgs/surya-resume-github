import React from 'react'

const Form =() =>{
  return(
    <div style={{marginTop:'50px',color:'white'}}>
    <div className="container" style={{height:'100%',width:'100%'}}>
    <h3>Form</h3>
    <form>
    <div className="mb-3 mt-3 ml-5 mr-5">
    <label for="email">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email"/>
    </div>
    <div className="mb-3">
    <label for="pwd">Password</label>
    <input type="Password" className="form-control" id="pwd" placeholder="Enter your password"/>
    </div>
    <div className="form-check mb-3">
    <label className="form-check-label">
    <input className="form-check-input" type="checkbox"name="remember"/>Remember me</label></div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )

}

export default Form;
