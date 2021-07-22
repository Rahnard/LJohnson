import React, { Fragment } from 'react';

const LandingDetail = ({ customer }) => {
  return (
    <div className='headen customer-detail'>
      <p>{customer.name}</p>
      <p>{customer.email}</p>
      <p>{customer.phone}</p>
      <p>{customer.customerId}</p>
      <p>{customer.dateTaken}</p>
    </div>
  );
};

export default LandingDetail;
