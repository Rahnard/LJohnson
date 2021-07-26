import React, { Fragment } from 'react';
import HomeLanding from '../landing/HomeLanding';

import LandingSide from '../landing/LandingSide';
// import HomeLanding from '../landing/HomeLanding';
import ClientDetail from '../client/ClientDetail';

const Home = () => {
  return (
    <Fragment>
      <LandingSide />
      <HomeLanding />
    </Fragment>
  );
};

export default Home;
