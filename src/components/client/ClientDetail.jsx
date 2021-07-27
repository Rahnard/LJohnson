import React, { useContext } from 'react';

import LjohnsonContext from '../../context/ljohnson/ljohnsonContext';
import Home from '../pages/Home';
// import LjohnsonContext from '../../context/ljohnson/LjohnsonState';

const Client = ({ match }) => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const { client, loading } = ljohnsonContext;

  return (
    <div className='clients'>
      <div className='navStyle'>
        <div className='client-detail'>
          <h1>{client.name}</h1>
          <div className='client-contact'>
            <p>
              <i style={{ paddingRight: '10px' }} class='far fa-phone-alt'></i>
              {client.phone}
            </p>
            <address>
              <i
                style={{ paddingRight: '10px' }}
                class='fal fa-map-marker-alt'></i>
              {client.address}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
