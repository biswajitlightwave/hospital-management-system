import React from 'react';
import { useNavigate } from 'react-router-dom';

function Patients() {
  const history = useNavigate();
  return (
    <div>
      <div className='adminbg position-relative'>
        <div className='admin_content'>
          <div className='container'>
            <div>
              {' '}
              <button
                type='button'
                className='btn btn-primary patient adminlink'
                onClick={() => {
                  history('/Patientregister');
                }}
              >
                New Registration
              </button>
            </div>
            <div>
              {' '}
              <button
                type='button'
                className='btn btn-primary patient adminlink1'
                onClick={() => {
                  history('/Login');
                }}
              >
                Login
              </button>
            </div>
            {/* <div>
              {' '}
              <button
                type='button'
                className='btn btn-primary patient adminlink2'
                onClick={() => {
                  history('/Patientbooking');
                }}
              >
                Booking
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
