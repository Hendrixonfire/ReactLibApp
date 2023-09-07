import React, {useState} from 'react';
import './App.css';
import Home from './Home'

import BookWithFullDescription from './bookWithFullDescription';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';


function App() {
 
  return (
  
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="bookdescription/:id" element={<BookWithFullDescription />} />
        </Routes>
      </Router>

  );
}


export default App;
