import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../img/logo1.svg';
// import { react-router-dom as r } from 'react-router-dom'
import './Home';

const Home = () => {
  return (
    <div className='homeDiv'>
      <form className='form'>
        <img src={logoImg} alt='L.JOHNSON' style={{ width: '200px' }} />
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <Link to={'/landing'}>Login</Link>
      </form>
    </div>
  );
};

export default Home;
