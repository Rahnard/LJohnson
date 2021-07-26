import React from 'react';

const LandingNav = () => {
  return (
    <div className='navStyle'>
      <form>
        <div className='input-icon'>
          <i class='fas fa-search'></i>
          <input
            type='text'
            placeholder='Search for user'
            size='50'
            className='input-field'
          />
        </div>
      </form>
    </div>
  );
};

export default LandingNav;
