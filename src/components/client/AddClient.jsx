import React, { Fragment, useState, useContext } from 'react';
import user from '../../img/user.svg';
import cake from '../../img/cake.svg';
import envelope from '../../img/envelope.svg';
import phone1 from '../../img/phone.svg';
import mapPin from '../../img/map-pin.svg';

import LjohnsonContext from '../../context/ljohnson/ljohnsonContext';

import './style.css';
import Misc from '../pages/Misc';

import OrderLog from '../pages/OrderLog';

const AddClient = () => {
  const ljohnsonContext = useContext(LjohnsonContext);

  const {
    setModal,
    modal,
    submitOrderLog,
    submitClient,
    submitMeasurement,
    submitMisc,
  } = ljohnsonContext;

  // STATE INITIALIZATION
  const [client, setClient] = useState({
    name: '',
    date: '',
    phone: '',
    address: '',
    email: '',
  });

  const [topMeasurement, setTopMeasurement] = useState({
    neck: '',
    shoulder: '',
    arm_hole: '',
    arm_length: '',
    round_arm: '',
    wrist: '',
    chest: '',
    half_chest: '',
    half_back: '',
    abdomen: '',
    hip: '',
    agbada_arm_length: '',
    agbada_body_length: '',
  });

  const [trouserMeasurement, setTrouserMeasurement] = useState({
    trouser_waist: '',
    trouser_hip: '',
    trouser_thigh: '',
    trouser_calf: '',
    half: '',
    full: '',
    trouser_knee: '',
    trouser_ankle: '',
  });

  // ORDERLOG
  const [orderLogItem, setOrderLogItem] = useState({
    total_number_of_fabric: '',
    type_of_fabric: '',
    number_of_fabric: '',
    description: '',
  });

  // MISC
  const [misc, setMisc] = useState({
    misc_description: '',
  });

  // DESTRUCTIONS
  const { name, address, date, phone, email } = client;

  const {
    neck,
    shoulder,
    arm_hole,
    arm_length,
    round_arm,
    wrist,
    chest,
    half_chest,
    half_back,
    abdomen,
    hip,
    agbada_arm_length,
    agbada_body_length,
  } = topMeasurement;

  const {
    trouser_waist,
    trouser_hip,
    trouser_thigh,
    trouser_calf,
    full,
    half,
    trouser_knee,
    trouser_ankle,
  } = trouserMeasurement;

  // ON CHANGE
  const onChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
    setTopMeasurement({ ...topMeasurement, [e.target.name]: e.target.value });
    setTrouserMeasurement({
      ...trouserMeasurement,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    submitClient(client);
    submitMeasurement(topMeasurement, trouserMeasurement);
    submitOrderLog(orderLogItem);
    submitMisc(misc);

    console.log(
      client,
      { topMeasurement, trouserMeasurement },
      orderLogItem,
      misc,
    );
  };

  // DATE YEAR INITIALIZATION
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <div
        className='overlay'
        style={{
          display: !modal ? 'none' : 'block',
          transition: 'all .5s ease',
        }}>
        <div className='modal'>
          <form className='info-form' onSubmit={onSubmit}>
            <div className='profile-headen'>
              <div className='info-headen'>
                <h1 className='mp-2'>Client Profile</h1>
                <i
                  class='fal fa-times-circle fa-2x close-icon'
                  style={{ cursor: 'pointer' }}
                  onClick={setModal}></i>
              </div>
            </div>
            <section className='form-section'>
              <div className='info-1 info'>
                <img className='icon' src={user} alt='user' />
                <input
                  className='input'
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className='info-2 info date-phone'>
                <div style={{ position: 'relative' }}>
                  <img className='icon' src={cake} alt='user' />
                  <input
                    className='input'
                    type='date'
                    name='date'
                    placeholder='Birthday'
                    value={date}
                    onChange={onChange}
                    min={`${year}-01-01`}
                    max={`${year}-12-31`}
                  />
                </div>
                <div className='phone phone-input'>
                  <img className='icon' src={phone1} alt='user' />
                  <input
                    type='number'
                    name='phone'
                    placeholder='Phone'
                    onChange={onChange}
                    value={phone}
                    className='input'
                  />
                </div>
              </div>
              <div className='info-3 info'>
                <img className='icon' src={mapPin} alt='user' />
                <input
                  className='input'
                  type='text'
                  name='address'
                  placeholder='Home Address'
                  value={address}
                  onChange={onChange}
                />
              </div>
              <div className='info-3 info'>
                <img className='icon' src={envelope} alt='user' />
                <input
                  className='input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='top-trouser-section'>
                <div className='top'>
                  <h1>Top</h1>
                  <section className='top-measurement'>
                    <div>
                      <label>Neck</label>
                      <input
                        type='number'
                        name='neck'
                        value={neck}
                        placeholder='N'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label>Shoulder</label>
                      <input
                        type='number'
                        name='shoulder'
                        value={shoulder}
                        placeholder='Sh'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label>Arm Hole</label>
                      <input
                        type='number'
                        name='arm_hole'
                        value={arm_hole}
                        placeholder='AH'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label>Arm Length</label>
                      <input
                        type='number'
                        name='arm_length'
                        value={arm_length}
                        placeholder='AL'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label>Round Arm</label>
                      <input
                        type='number'
                        name='round_arm'
                        value={round_arm}
                        placeholder='RA'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label>Wrist</label>
                      <input
                        type='number'
                        name='wrist'
                        value={wrist}
                        placeholder='Wr'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='chest'>Chest</label>
                      <input
                        type='number'
                        name='chest'
                        value={chest}
                        placeholder='Ch'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='half_chest'>Half Chest</label>
                      <input
                        type='number'
                        name='half_chest'
                        value={half_chest}
                        placeholder='HCh'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='half_back'>Half Back</label>
                      <input
                        type='number'
                        name='half_back'
                        value={half_back}
                        placeholder='HBk'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='chest'>Abdomen</label>
                      <input
                        type='number'
                        name='abdomen'
                        value={abdomen}
                        placeholder='Ab'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='hip'>Hip</label>
                      <input
                        type='number'
                        name='hip'
                        value={hip}
                        placeholder='H'
                        onChange={onChange}
                      />
                    </div>
                    <div></div>
                    <div style={{ paddingTop: '30px', fontWeight: '100' }}>
                      <h3>Agbada</h3>
                    </div>
                    <div>
                      <label htmlFor='agbada_arm_length'>Arm Length</label>
                      <input
                        type='number'
                        name='agbada_arm_length'
                        value={agbada_arm_length}
                        placeholder='AL'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='agbada_body_length'>Body Length</label>
                      <input
                        type='number'
                        name='agbada_body_length'
                        value={agbada_body_length}
                        placeholder='BL'
                        onChange={onChange}
                      />
                    </div>
                  </section>
                </div>
                <div className='trouser'>
                  <h1>Trouser</h1>
                  <section className='trouser-measurement'>
                    <div>
                      <label htmlFor='trouser_waist'>Waist</label>
                      <input
                        type='number'
                        name='trouser_waist'
                        value={trouser_waist}
                        placeholder='W'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='trouser_hip'>Hip</label>
                      <input
                        type='number'
                        name='trouser_hip'
                        value={trouser_hip}
                        placeholder='H'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='trouser_thigh'>Thigh</label>
                      <input
                        type='number'
                        name='trouser_thigh'
                        value={trouser_thigh}
                        placeholder='Th'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='trouser_calf'>Calf</label>
                      <input
                        type='number'
                        name='trouser_calf'
                        value={trouser_calf}
                        placeholder='C'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='trouser_length'>Trouser Length</label>
                      <div style={{ display: 'flex' }}>
                        <input
                          type='number'
                          name='half'
                          value={half}
                          placeholder='H'
                          onChange={onChange}
                          style={{
                            marginRight: '5px',
                            width: '100%',
                            paddingLeft: '1px',
                          }}
                        />
                        <input
                          type='number'
                          name='full'
                          value={full}
                          placeholder='F'
                          onChange={onChange}
                          style={{
                            marginRight: '5px',
                            width: '100%',
                            paddingLeft: '1px',
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor='trouser_knee'>Knee</label>
                      <input
                        type='number'
                        name='trouser_knee'
                        value={trouser_knee}
                        placeholder='Kn'
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='trouser_ankle'>Ankle</label>
                      <input
                        type='number'
                        name='trouser_ankle'
                        value={trouser_ankle}
                        placeholder='An'
                        onChange={onChange}
                      />
                    </div>
                  </section>
                </div>
              </div>
              <div>
                <div className='fabric'>
                  <OrderLog
                    orderLogItem={orderLogItem}
                    setOrderLogItem={setOrderLogItem}
                  />
                </div>
                <div className='misc'>
                  <Misc misc={misc} setMisc={setMisc} />
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddClient;
