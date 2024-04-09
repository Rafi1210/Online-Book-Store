import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';  
import About from './components/about/About';

function App() {
   const [count, setCount] = useState(0);

  return (
      <div className="container">
        <div className='primary-container'>
        <Header />
        <Home />
        <About />
  </div>
      </div>
  )
}

export default App;
