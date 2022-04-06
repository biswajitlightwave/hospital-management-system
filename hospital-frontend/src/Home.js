import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();
  return (
    <div>
      <div className='homebg position-relative'>
          <h1 className='col-12 text-center' style={{background:'transparent', paddingTop:'5%', textDecoration: 'underline'}}>Hospital Management System</h1>
        <div className='homecontent'>
          <button
            type='button'
            className='btn btn-primary admin'
            onClick={() => {
              history('/Admin');
            }}
          >
            Admin
          </button>
          <br></br>
          <button
            type='button'
            className='btn btn-primary patient'
            onClick={() => {
              history('/Patient');
            }}
          >
            Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
