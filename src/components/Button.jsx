import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({
  onClickAction,
  buttonText,
}) {
  return (
    <button
      className="button"
      type="button"
      onClick={onClickAction}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  onClickAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
