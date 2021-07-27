import React, { useContext } from 'react';

import LjohnsonContext from '../../../context/ljohnson/ljohnsonContext';

const ClientDetail = () => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const { client } = ljohnsonContext;

  return (
    <div className='clients'>
      <div className='navStyle'>
        {client.map(clientItem => (
          <div className='client-detail'>
            <h1>{clientItem.name}</h1>
            <div className='client-contact'>
              <p>
                <i
                  style={{ paddingRight: '10px' }}
                  class='far fa-phone-alt'></i>
                {clientItem.phone}
              </p>
              <address>
                <i
                  style={{ paddingRight: '10px' }}
                  class='fal fa-map-marker-alt'></i>
                {clientItem.address}
              </address>
            </div>
          </div>
        ))}
      </div>
      <div>Clients Details</div>
    </div>
  );
};

export default ClientDetail;