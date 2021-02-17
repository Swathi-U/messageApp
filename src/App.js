import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
          <div className="app">
           
              <Home/>
            
      
    </div>
    </BrowserRouter>
  );
}

export default App;
