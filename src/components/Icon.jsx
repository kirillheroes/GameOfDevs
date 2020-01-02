import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Icon.css';

function Icon({
  name,
}) {
  return (
    <div className="icon">
      <i className="material-icons">{name}</i>
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.func.isRequired,
};

export default Icon;
