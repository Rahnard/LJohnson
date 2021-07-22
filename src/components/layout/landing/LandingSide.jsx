import React from 'react';
import imgLogo from '../../../img/logo1.svg';
import { Link } from 'react-router-dom';

const LandingSide = () => {
  return (
    <div className='landingSideStyle'>
      <img src={imgLogo} alt='L.JOHNSON' className='landingImg' />
      <div className='links'>
        <Link to='#' className='link-1'>
          <span>+</span> Add New Client
        </Link>
        <Link to='#' className='link-2'>
          Recently Added
        </Link>
        <Link to='#' className='link-3'>
          <span>
            <i class='far fa-chevron-down'></i>
          </span>
          <span>Label</span>
        </Link>
      </div>
    </div>
  );
};

export default LandingSide;
