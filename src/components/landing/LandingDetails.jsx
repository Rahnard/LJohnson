import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LjohnsonContext from '../../context/ljohnson/ljohnsonContext';
import LandingDetail from './LandingDetail';
import Loading from '../layout/loading/Loading';

const LandingDetails = () => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const { clients } = ljohnsonContext;

  if (clients == null) {
    return <Loading />;
  } else {
    return (
      <div className='landingDetailsStyle'>
        <div className='headen headen-header'>
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Customer ID</p>
          <p>
            Date Token{' '}
            <span className='float-right'>
              <i class='fas fa-ellipsis-v'></i>
            </span>
          </p>
        </div>
        <div className='customer-details'>
          {clients.map(client => (
            <Link to='/client'>
              <LandingDetail client={client} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default LandingDetails;
