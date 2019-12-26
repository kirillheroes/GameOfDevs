import React from 'react';
import '../styles/Rect.css';
import CloseIcon from './Close';
import Section from './Sections';

function Rectan() {
  return (
    <div id="rectangle" className="menu_rect">
      <CloseIcon />
      Super Menu

      <Section text="Section 1" />
      <Section text="Section 2" />
      <Section text="Section 3" />
      <hr color="#C0C0C0" className="menu_devider" />
      <Section text="Section 4" />
      <Section text="Section 5" />
    </div>
  );
}

export default Rectan;
