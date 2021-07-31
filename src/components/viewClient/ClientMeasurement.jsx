import React, { useContext } from 'react';

import './Client.css';

import OrderLog from '../measurement/OrderLog';
import LjohnsonContext from '../../context/ljohnson/ljohnsonContext';

const ClientMeasurement = () => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const {
    client: { measurement },
  } = ljohnsonContext;

  return (
    <div className='measurement-section'>
      <div className='top-trouser'>
        <section className='top'>
          <div>
            <h2>Top</h2>
          </div>
          <div className='mea-div'>
            {measurement && (
              <div>
                <p>Neck</p>
                <p className='mea-value'>{measurement.neck}</p>
              </div>
            )}
            <div>
              <p>Shoulder</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Arm-Hole</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Arm-Neck</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Round Arm</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Wrist</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Chest</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Half Chest</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p> Half Back</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Abdomen</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Hip</p>
              <p className='mea-value'>16</p>
            </div>

            <div>
              <p>Body Length</p>
              <p className='mea-value'>16</p>
            </div>
            <div></div>
            <div className='agbada'>
              <h3>Agbada</h3>
            </div>
            <div>
              <p>Shoulder</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Arm Hole</p>
              <p className='mea-value'>16</p>
            </div>
          </div>
        </section>
        <section style={{ height: '55%' }} className='trouser'>
          <div>
            <h2>Trouser</h2>
          </div>
          <div className='mea-div'>
            <div>
              <p>Neck</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Shoulder</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Arm-Hole</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Arm-Neck</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Body Length</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Neck</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Shoulder</p>
              <p className='mea-value'>16</p>
            </div>
            <div>
              <p>Arm-Hole</p>
              <p className='mea-value'>16</p>
            </div>
          </div>
        </section>
      </div>
      <div className='misc'>
        <div className='misc-section'>
          <h1>Misc</h1>
          <p>
            3 Buttons for all Filtex No Pocket for Cashmeres 3 Buttons for all 3
          </p>
        </div>
        <div className='order-log'>
          <h1>Oder Log</h1>
          <OrderLog />
        </div>
      </div>
    </div>
  );
};

export default ClientMeasurement;
