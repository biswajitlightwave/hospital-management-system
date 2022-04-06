import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
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
                  history('/Adddepartment');
                }}
              >
                Add Department/Speciality
              </button>
            </div>
            <div>
              {' '}
              <button
                type='button'
                className='btn btn-primary patient adminlink1'
                onClick={() => {
                  history('/Adddoctor');
                }}
              >
                Add Doctors
              </button>
            </div>
            <div>
              {' '}
              <button
                type='button'
                className='btn btn-primary patient adminlink2'
                onClick={() => {
                  history('/Appointmentlisting');
                }}
              >
                Appointments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
