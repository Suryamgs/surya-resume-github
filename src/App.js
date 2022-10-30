import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './home'
import Card from './card'
import Form from './form'

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route path='/card'element={<Card/>}/>
    <Route path='/form'element={<Form/>}/>
    </Routes>
    </div>
    </Router>

      );
}
export default App;
