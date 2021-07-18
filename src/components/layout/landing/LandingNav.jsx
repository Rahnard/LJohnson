import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LandingNav = () => {
  return (
    <div className='landingNavStyle'>
      <form>
        <input type='text' placeholder='Search...' size='50' />
      </form>
    </div>
  );
};

export default LandingNav;
