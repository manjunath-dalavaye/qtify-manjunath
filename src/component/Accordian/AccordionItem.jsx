// AccordionItem.jsx
import React, { useState, useRef, useEffect } from 'react';
import './AccordionItem.css'; // Add appropriate styling

const AccordionItem = ({ heading, paragraph }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight);
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      className={`accordion-item ${isOpen ? 'open' : ''}`}
      style={{ maxHeight: isOpen ? `${contentHeight}px` : '60px' }}
    >
      <div className="accordion-heading" onClick={toggleAccordion}>
        {heading}
      </div>
      <div className="accordion-content" ref={contentRef}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
