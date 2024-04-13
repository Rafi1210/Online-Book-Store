import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import HomePage from './components/HomePage/HomePage';  
import About from './components/about/About';

function App() {
   const [count, setCount] = useState(0);

  return (
      <>
        <Header />
        <HomePage />
        <About />
  </>
  )
}

export default App;
