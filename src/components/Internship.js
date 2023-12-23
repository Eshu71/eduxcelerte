import React from 'react';
import './Internship.css';

function Internship({ name, description, imageLink, link }) {
  const handleApplyClick = () => {
    // Open the external link in a new tab
    window.open(link, '_parent');
  };

  return (
    <div className='internship'>
      {name} Internship
      <hr />
      <img src={imageLink} alt="" />
      <br />
      <div className="definition">
        {description}
      </div>
      <button className='btn' onClick={handleApplyClick}>Apply</button>
    </div>
  );
}

export default Internship;

