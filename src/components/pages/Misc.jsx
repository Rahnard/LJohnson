import React from 'react';
import './Style.css';

const Misc = () => {
  return (
    <div className='misc'>
      <h1>Misc</h1>
      <div>
        <input
          type='text'
          name='description'
          placeholder='Description ( Design Description )'
        />
        <div className='icon-div'>
          <button type='button' className='fabric-icon'>
            <i class='far fa-plus-circle'></i>
          </button>
        </div>
        <div className='submit-btn'>
          <button type='submit' value='Submit'>
            <i class='far fa-check'></i>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Misc;
