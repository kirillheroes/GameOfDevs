import React from 'react';
import '../styles/Sections.css';
import PropTypes from 'prop-types';
import ArrowsIcon from './Arrows';

function Section({
  text,
}) {
  return (
    <div className="section">
      <div className="section_name">
        {text}
      </div>
      <ArrowsIcon />
      <br />
    </div>
  );
}

Section.propTypes = {
  text: PropTypes.func.isRequired,
};

export default Section;
