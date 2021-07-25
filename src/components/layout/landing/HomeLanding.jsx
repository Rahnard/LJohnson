import React, { Fragment } from 'react';

import LandingNav from './LandingNav';
import LandingDetails from './LandingDetails';

const Landing = () => {
  return (
    <Fragment>
      <LandingNav />
      <LandingDetails />
    </Fragment>
  );
};

export default Landing;
