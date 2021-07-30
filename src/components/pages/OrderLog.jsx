import React from 'react';

import './Style.css';

const OrderLog = () => {
  return (
    <div className='order-list'>
      <h1>Order Log</h1>
      <div className='fabric-detail'>
        <form>
          <div className='fabric-no'>
            <label>Total No. of Fabric:</label>
            <input type='number' placeholder='20' />
          </div>
          <div className='fabric-type'>
            <ul>
              <li>
                <input type='text' placeholder='Type of Fabric' />
                <input type='number' placeholder='No.' />
              </li>
            </ul>
            <div>
              <input
                type='text'
                placeholder='Description ( colour, pattern, texture etc)'
              />
            </div>
          </div>

          <div className='icon-div'>
            <button type='button' className='fabric-icon'>
              <i class='far fa-plus-circle'></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderLog;
