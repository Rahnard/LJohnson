import React from 'react';
import { Link } from 'react-router-dom';

const LandingDetail = ({ client }) => {
  return (
    <div className='headen customer-detail'>
      <p>{client.name}</p>
      <p>{client.email}</p>
      <p>{client.phone}</p>
      <p>{client.clientId}</p>
      <p>{client.dateTaken}</p>
    </div>
  );
};

export default LandingDetail;
