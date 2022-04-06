import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Patientbooking(props) {
  const [dept, setSpecialization] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios.get('http://localhost:4001/dropdown_specialization').then((response) => {
      // console.log(response.data);
      var data = response.data;
      var specialization = [];
      for (let i = 0; i < data.length; i++) {
        var dept = response.data[i].specialization;
        specialization.push(dept);
      }
      setSpecialization(specialization);
    });
  }, []);
  const firstname = useRef();
  const lastname = useRef();
  const dob = useRef();
  const gender = useRef();
  const age = useRef();
  const date = useRef();
  const department = useRef();
  const phonenumber = useRef();
  const emailid = useRef();
  const description = useRef();
  const firstnamenew = useRef();
  const lastnamenew = useRef();
  const dobnew = useRef();
  const gendernew = useRef();
  const agenew = useRef();
  const datenew = useRef();
  const departmentnew = useRef();
  const phonenumbernew = useRef();
  const emailidnew = useRef();
  const descriptionnew = useRef();
  const onClickLoginHandler = (event) => {
    event.preventDefault();

    //console.log(userData);
    if (
      firstname.current.value === '' ||
      lastname.current.value === '' ||
      dob.current.value === '' ||
      gender.current.value === '' ||
      age.current.value === '' ||
      date.current.value === '' ||
      department.current.value === '' ||
      phonenumber.current.value === '' ||
      emailid.current.value === '' ||
      description.current.value === ''
    ) {
      alert('All fields should be filled!');
    } else {
      var userData = {};
      userData.first_name = firstname.current.value;
      userData.last_name = lastname.current.value;
      userData.dob = dob.current.value;
      userData.gender = gender.current.value;
      userData.age = age.current.value;
      userData.date = date.current.value;
      userData.department = department.current.value;
      userData.phone_number = phonenumber.current.value;
      userData.email_id = emailid.current.value;
      userData.description = description.current.value;
      axios
        .post('http://localhost:4000/api/bookings', userData)
        .then((response) => {
          //console.log('data', response.data);
          if (response.data.Status === 200) {
            alert('Submit Successfully');
            window.location.reload();
          } else if (response.data.Status === 500) {
            alert('Submit Error');
          } else {
            alert('something went wrong');
          }
        });
    }
  };
  const onClickLoginHandlernew = (event) => {
    event.preventDefault();
    if (
      firstnamenew.current.value === '' ||
      lastnamenew.current.value === '' ||
      dobnew.current.value === '' ||
      gendernew.current.value === '' ||
      agenew.current.value === '' ||
      datenew.current.value === '' ||
      departmentnew.current.value === '' ||
      phonenumbernew.current.value === '' ||
      emailidnew.current.value === '' ||
      descriptionnew.current.value === ''
    ) {
    } else {
      var userData = {};
      userData.first_name = firstnamenew.current.value;
      userData.last_name = lastnamenew.current.value;
      userData.dob = dobnew.current.value;
      userData.gender = gendernew.current.value;
      userData.age = agenew.current.value;
      userData.date = datenew.current.value;
      userData.department = departmentnew.current.value;
      userData.phone_number = phonenumbernew.current.value;
      userData.email_id = emailidnew.current.value;
      userData.description = descriptionnew.current.value;
      axios
        .post('http://localhost:4000/api/bookings', userData)
        .then((response) => {
          //console.log('data', response.data);
          if (response.data.Status === 200) {
            alert('Submit Successfully');
            window.location.reload();
          } else if (response.data.Status === 500) {
            alert('Submit Error');
          } else {
            alert('something went wrong');
          }
        });
    }
  };
  return (
    <div>
      <div className='container-fluid'>
        <h4 className='header mb-5'>Add Booking</h4>
        <div className='row'>
          <div className='col-md-6'>
            <div className='text-center'>
              {' '}
              <button type='submit' className='btn btn-primary w-50 bg-btn'>
                Add Booking
              </button>
            </div>
            <form className='row g-3 mt-4'>
              <div className='col-md-6'>
                <label htmlFor='' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  value={location.state.fstnm}
                  ref={firstname}
                  disabled
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  value={location.state.lstnm}
                  ref={lastname}
                  disabled
                />
              </div>
              <div className='col-3'>
                <label htmlFor='' className='form-label'>
                  DOB
                </label>
                <input
                  type='date'
                  className='form-control'
                  value={location.state.dob}
                  ref={dob}
                  disabled
                />
              </div>
              <div className='col-md-3'>
                <label htmlFor='inputState' className='form-label'>
                  Gender
                </label>
                <select className='form-select' name='gender' ref={gender}>
                  <option defaultValue>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='col-2'>
                <label htmlFor='' className='form-label'>
                  Age
                </label>
                <input type='number' className='form-control' ref={age} />
              </div>

              <div className='col-3'>
                <label htmlFor='' className='form-label'>
                  Enter date & time
                </label>
                <input type='date' className='form-control' ref={date} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='inputState' className='form-label'>
                  Department
                </label>
                <select
                  className='form-select'
                  name='department'
                  ref={department}
                >
                  <option defaultValue>Choose...</option>
                  {dept.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-3'>
                <label htmlFor='' className='form-label'>
                  Phone
                </label>
                <input
                  type='number'
                  className='form-control'
                  value={location.state.phone_number}
                  ref={phonenumber}
                  disabled
                />
              </div>
              <div className='col-4'>
                <label htmlFor='' className='form-label'>
                  Email
                </label>
                <input type='text' className='form-control' ref={emailid} />
              </div>
              <div className='col-6'>
                <label htmlFor='' className='form-label'>
                  Please type what you want
                </label>
                <input type='text' className='form-control' ref={description} />
              </div>
              <div className='col-12 text-center mt-5'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={(event) => onClickLoginHandler(event)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-6'>
            <div className='text-center'>
              {' '}
              <button type='submit' className='btn btn-primary w-50 bg-btn'>
                Add New Booking
              </button>
            </div>
            <form className='row g-3 mt-4'>
              <div className='col-md-6'>
                <label htmlFor='' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  ref={firstnamenew}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='' className='form-label'>
                  Last Name
                </label>
                <input type='text' className='form-control' ref={lastnamenew} />
              </div>
              <div className='col-3'>
                <label htmlFor='' className='form-label'>
                  DOB
                </label>
                <input type='date' className='form-control' ref={dobnew} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='inputState' className='form-label'>
                  Gender
                </label>
                <select className='form-select' name='gender' ref={gendernew}>
                  <option defaultValue>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='col-2'>
                <label htmlFor='' className='form-label'>
                  Age
                </label>
                <input type='number' className='form-control' ref={agenew} />
              </div>

              <div className='col-3'>
                <label htmlFor='' className='form-label'>
                  Enter date & time
                </label>
                <input type='date' className='form-control' ref={datenew} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='inputState' className='form-label'>
                  Department
                </label>
                <select
                  className='form-select'
                  name='department'
                  ref={departmentnew}
                >
                  <option defaultValue>Choose...</option>
                  {dept.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-3'>
                <label htmlFor='' className='form-label'>
                  Phone
                </label>
                <input
                  type='number'
                  className='form-control'
                  ref={phonenumbernew}
                />
              </div>
              <div className='col-4'>
                <label htmlFor='' className='form-label'>
                  Email
                </label>
                <input type='text' className='form-control' ref={emailidnew} />
              </div>
              <div className='col-6'>
                <label htmlFor='' className='form-label'>
                  Please type what you want
                </label>
                <input
                  type='text'
                  className='form-control'
                  ref={descriptionnew}
                />
              </div>
              <div className='col-12 text-center mt-5'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={(event) => onClickLoginHandlernew(event)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
//}

export default Patientbooking;
