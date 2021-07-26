import React, { useContext } from 'react';

import LjohnsonContext from '../../context/ljohnson/ljohnsonContext';

const ClientMeasurement = () => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const { topTrouser, toggleTopTrouser } = ljohnsonContext;

  return (
    <div className='measurement-section'>
      <div>Client Measurement</div>
    </div>
  );
};

export default ClientMeasurement;
