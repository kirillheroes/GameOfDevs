import React from 'react';
import '../styles/Sections.css';
import PropTypes from 'prop-types';
import Icon from './Icon';

function Section({
  text,
}) {
  return (
    <div className="section">
      <div className="section_name">
        {text}
      </div>
      <Icon name="unfold_more" />
      <br />
    </div>
  );
}

Section.propTypes = {
  text: PropTypes.func.isRequired,
};

export default Section;
