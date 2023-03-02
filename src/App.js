import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./component/pages/home"
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Navbar from './component/pages/layout/navbar';
import Pagenot from './component/pages/pageNot';
import Edit from './component/pages/edit'
import Title from './component/pages/tiltle';
import Toggle from "./component/pages/toggle"
function App() {
  return (
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/edit' element={<Edit />} />
                <Route path='*' element={<Pagenot />} />
                <Route path='/tiltle' element={<Title />} />
                <Route path='/toggle' element={<Toggle />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App