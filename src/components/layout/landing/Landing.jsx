import React, { Fragment } from 'react';

import LandingSide from './LandingSide';
import LandingNav from './LandingNav';
import LandingDetails from './LandingDetails';

const Landing = () => {
  return (
    <Fragment>
      <LandingSide />
      <LandingNav />
      <LandingDetails />
    </Fragment>
  );
};

export default Landing;
