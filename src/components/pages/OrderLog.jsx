import React from 'react';

import './Style.css';

const OrderLog = ({ orderLogItem, setOrderLogItem }) => {
  // DESTRUCTURING
  const {
    total_number_of_fabric,
    type_of_fabric,
    number_of_fabric,
    description,
  } = orderLogItem;

  const onChange = e => {
    setOrderLogItem({ ...orderLogItem, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div onChange={onChange}>
      <div className='order-list'>
        <h1>Order Log</h1>
        <div className='fabric-detail'>
          <form>
            <div className='fabric-no'>
              <label>Total No. of Fabric:</label>
              <input
                type='number'
                placeholder='20'
                name='total_number_of_fabric'
                value={total_number_of_fabric}
              />
            </div>
            <div className='fabric-type'>
              <ul>
                <li>
                  <input
                    type='text'
                    placeholder='Type of Fabric'
                    name='type_of_fabric'
                    value={type_of_fabric}
                  />
                  <input
                    type='number'
                    placeholder='No.'
                    name='number_of_fabric'
                    value={number_of_fabric}
                  />
                </li>
              </ul>
              <div>
                <input
                  type='text'
                  placeholder='Description ( colour, pattern, texture etc)'
                  name='description'
                  value={description}
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
      <button type='submit'>Submit</button>
    </div>
  );
};

export default OrderLog;
