import React, { useState } from 'react'

const Footer = () => {

  const[clicks, setClicks] = useState(0);
  const year = new Date().getFullYear();
  const companyName = "EGG COOPERATION";
  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
   
   <div className="">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} Clicks={clicks}</p>
        
        <span className="col-md-4 d-flex  align-items-center justify-content-center mb-3 mb-md 0" 
        onClick={handleClick}
        >
          
          <img 
          className="App-logo-small"
          height="auto"
          src="perrito_2.jpg"
          alt="perrito-logo"
          />

        </span>
        
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
