
import React from 'react';
import style from  './Button.module.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn__primary', 'btn__outline'];

const SIZES = ['btn__medium', 'btn__large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {



  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={` ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
       
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button