import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import Button from './Button';
import Input from './Input';

function f1() {
}
function f2() {
}

function Header({
  changeLangText,
  signUpText,
  loginText,
  passText,
  inputType,
}) {
  return (
    <div>
      <form>
        <div className="logoButtonLeft">
          <Button onClick={f1} buttonText={changeLangText} />
        </div>
        <div className="enterRegButtons">
          <fieldset className="enterButtons">
            <Input InputName="enterLogin" InputType={inputType} InputValue={loginText} />
            <Input InputName="enterPass" InputType="password" InputValue={passText} />
          </fieldset>
          <div className="logoButtonRight">
            <Button onClick={f2} buttonText={signUpText} />
          </div>
        </div>
      </form>
      <img alt="Logo" src="src/images/Logo.png" className="logoIcon" />
    </div>
  );
}

Header.propTypes = {
  changeLangText: PropTypes.string,
  signUpText: PropTypes.string,
  loginText: PropTypes.string,
  passText: PropTypes.string,
  inputType: PropTypes.string,
};


Header.defaultProps = {
  changeLangText: 'Change language',
  signUpText: 'Sign up',
  loginText: 'login',
  passText: 'password',
  inputType: 'text',
};

export default Header;
