import React from 'react';

const Measurements = () => {
  return (
    <div className='measurement'>
      <div className='top'>
        <h1>Top</h1>
        <form>
          <section className='st-item'>
            <div>
              <label>Neck</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Shoulder</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Arm Hole</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Arm Length</label>
              <input type='text' size='4' />
            </div>
          </section>
          <section>
            <div>
              <label>Round Arm</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Wrist</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Chest</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Half Chest</label>
              <input type='text' size='4' />
            </div>
          </section>
          <section>
            <div>
              <label>Half Back</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Abdomen</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Hip</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Body Length</label>
              <input type='text' size='4' />
            </div>
          </section>
          <section className='agbada'>
            <div></div>
            <div>
              <h2>Agbada</h2>
            </div>
            <div>
              <label>Half Back</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Abdomen</label>
              <input type='text' size='4' />
            </div>
          </section>
        </form>
      </div>
      <div className='trouser'>
        <h1>Trouser</h1>
        <form>
          <section className='top-'>
            <div>
              <label>Waist</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Hip</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Thigh</label>
              <input type='text' size='4' />
            </div>
            <div>
              <label>Calf</label>
              <input type='text' size='4' />
            </div>
          </section>
          <section className='trouser-side'>
            <div>
              <p>Trouser Length</p>
            </div>
            <div>
              <div>
                <label>Thigh</label>
                <input type='text' size='4' />
              </div>
              <div>
                <label>Calf</label>
                <input type='text' size='4' />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Measurements;
