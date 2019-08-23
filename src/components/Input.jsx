import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Input.css';

function Input({
  InputName,
  InputType,
  InputValue,
}) {
  return (
    <input
      className="input"
      name={InputName}
      type={InputType}
      value={InputValue}
    />
  );
}

Input.propTypes = {
  InputName: PropTypes.string.isRequired,
  InputType: PropTypes.string,
  InputValue: PropTypes.string,
};

Input.defaultProps = {
  InputType: 'text',
  InputValue: 'value',
};

export default Input;
