import React, { Fragment } from 'react';

import ClientDetail from './ClientDetail';
import ClientMeasurement from './ClientMeasurement';

const AddClient = () => {
  return (
    <Fragment>
      <ClientDetail />
      <ClientMeasurement />
    </Fragment>
  );
};

export default AddClient;
