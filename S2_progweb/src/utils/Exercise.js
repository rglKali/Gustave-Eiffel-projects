import React, { useState } from 'react';
import './Exercise.css'

const Exercise = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, ...content] = children;

  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && (
        <div>
          {content.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercise;
