import React, { useContext } from 'react';
import LjohnsonContext from '../../../context/ljohnson/ljohnsonContext';
import LandingDetail from './LandingDetail';
import Loading from '../loading/Loading';

const LandingDetails = () => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const { customers, loading } = ljohnsonContext;

  if (loading) {
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
          {customers.map(customer => (
            <LandingDetail customer={customer} />
          ))}
        </div>
      </div>
    );
  }
};

export default LandingDetails;
