import React from 'react'
import "./Footer.css"
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // TODO: Add your subscribe logic here
    // For now, let's just log the email and reset the input
    console.log('Subscribed with email:', email);

    // Reset the email input
    setEmail('');
  };
  return (
    <footer className="footer">
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <img className="abtlogo" src="/assets/EDULOGO.png" alt="" />
            {/* <p>
              Eduxcelerate is a platform where you can learn, develop, participate and grow in the Tech Domain.
            </p> */}
          </div>
          <div className="lower">
            
          </div>
        </div>
        <div className="middle box">
        <div className="topic">Contact us</div>
            <div className="phone">
              <a href="tel+919457689359"><i className="fas fa-phone-volume"></i>+91 9457689359</a>
            </div>
            <div className="email">
              <a href="mailto:Eduxcelerate@gmailcom"><i className="fas fa-envelope"></i>Eduxcelerate@gmail.com</a>
            </div>
        </div>
        <div className="right box">
          <div className="topic">Subscribe us</div>
          <form onSubmit={handleSubscribe}>
      <input
        type="text"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Subscribe" />
    </form>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright &#169; 2023 <a href="/">Eduxcelerate</a> All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer