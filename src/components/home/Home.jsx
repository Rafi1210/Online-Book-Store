import React from 'react'
import "./home.css";

const home = () => {
  const handleTime = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.innerHTML = new Date().toString();
    }
  };
  return (
    <div>
          
          <button id='time' onClick={handleTime}>What is the time?</button>
          <p id="demo"></p>
    </div>
  )
}

export default home
