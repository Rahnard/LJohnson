import React, { Fragment } from 'react';

import user from '../../img/user.svg';
import cake from '../../img/cake.svg';
import envelope from '../../img/envelope.svg';
import phone1 from '../../img/phone.svg';
import mapPin from '../../img/map-pin.svg';

const Client = () => {
  const onChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });

    console.log(e.target.value);
  };

  return (
    <Fragment>
      <div className='info-1 info'>
        <img className='icon' src={user} alt='user' />
        <input
          className='input'
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
      </div>
      <div className='info-2 info date-phone'>
        <div style={{ position: 'relative' }}>
          <img className='icon' src={cake} alt='user' />
          <input
            className='input'
            type='date'
            name='date'
            placeholder='Birthday'
            value={date}
            onChange={onChange}
            min={`${year}-01-01`}
            max={`${year}-12-31`}
          />
        </div>
        <div className='phone phone-input'>
          <img className='icon' src={phone1} alt='user' />
          <input
            type='number'
            name='phone'
            placeholder='Phone'
            onChange={onChange}
            value={phone}
            className='input'
          />
        </div>
      </div>
      <div className='info-3 info'>
        <img className='icon' src={mapPin} alt='user' />
        <input
          className='input'
          type='text'
          name='address'
          placeholder='Home Address'
          value={address}
          onChange={onChange}
        />
      </div>
      <div className='info-3 info'>
        <img className='icon' src={envelope} alt='user' />
        <input
          className='input'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
};

export default Client;
