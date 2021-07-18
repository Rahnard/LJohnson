import React from 'react';
import logoImg from '../../img/logo.png';
import './Home';

const Home = () => {
  return (
    <div className='homeDiv'>
      <form className='form'>
        <img src={logoImg} alt='L-JOHNSON' style={{ width: '200px' }} />
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button
          className='submitBtn'
          type='submit'
          onClick={() => console.log('object')}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
