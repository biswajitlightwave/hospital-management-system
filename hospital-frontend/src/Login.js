import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Patientbooking from './Patientbooking';

function Login(props) {
  const history = useNavigate();
  const [state, setState] = useState({
    phone_number: '',
    password: '',
  });
  function handle(e) {
    const newdata = { ...state };
    newdata[e.target.id] = e.target.value;
    setState(newdata);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/api/login', state).then((response) => {
      if (response.data.Status === 200) {
        alert('Login Successfully');
        history('/Patientbooking', {
          state: {
            id: 1,
            fstnm: response.data.patient.first_name,
            lstnm: response.data.patient.last_name,
            dob: response.data.patient.dob,
            phone_number: response.data.patient.phone_number,
            add: response.data.patient.address,
          },
        });
      } else if (response.data.Status === 500) {
        alert('Invalid Password');
      } else {
        alert('Something went wrong');
      }
    });
  };

  return (
    <div>
      <div className='container'>
        <h4 className='header'>Login</h4>
        <div className='row'>
          <div className='row mt-4'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <label htmlFor='' className='form-label'>
                Mobile Number
              </label>
              <input
                type='number'
                className='form-control'
                name='phone_number'
                onChange={(e) => handle(e)}
                id='phone_number'
                value={state.phone_number}
              />
            </div>
            <div className='col-md-4'></div>
          </div>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <label htmlFor='' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={(e) => handle(e)}
                id='password'
                value={state.password}
              />
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>

        <div className='col-12 text-center mt-5'>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
      {/* <Patientbooking
        fstnm={firstname}
        lstnm={lastname}
        dob={dob}
        phone_number={phonenumber}
        add={address}
        name='Tarun'
      /> */}
      ;
    </div>
  );
}

export default Login;
