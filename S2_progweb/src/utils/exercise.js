// import React, { useState } from 'react';
//
// const Exercise = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);
//
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//
//   return (
//     <div className="accordion">
//       <div onClick={toggleAccordion}>{title}</div>
//       {isOpen && <div>{content}</div>}
//     </div>
//   );
// };
//
// export default Exercise;


import React, { useState } from 'react';

const Exercise = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [title, ...content] = children;

  return (
    <div className="accordion">
      <div onClick={toggleOpen}>{title}</div>
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
