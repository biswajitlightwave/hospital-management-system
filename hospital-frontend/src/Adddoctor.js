import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';

function Adddoctor() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/fetch_doctors').then((response) => {
      var data = response.data.data;
      setPosts(data);
    });
  }, []);


  const [dept, setSpecialization] = useState([]);

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

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    speciality: '',
    phone_number: '',
    email_id: '',
    doj: '',
  });
  function handle(e) {
    const newdata = { ...state };
    newdata[e.target.id] = e.target.value;
    setState(newdata);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('state', state);

    axios.post('http://localhost:4000/api/add_doctors', state).then((response) => {
      if (response.data.Status === 200) {
        alert('Submit Successfully');
        window.location.reload();
      } else if (response.data.Status === 500) {
        alert('Submit Error');
      } else {
        alert('something went wrong');
      }
    });
  };

  return (
    <div>
      <div className='container'>
        <h4 className='header'>Add Doctors</h4>
        <form className='row g-3 mt-4'>
          <div className='col-md-3'>
            <label className='form-label'>First Name</label>
            <input
              type='text'
              className='form-control'
              name='first_name'
              onChange={(e) => handle(e)}
              id='first_name'
              value={state.first_name}
            />
          </div>
          <div className='col-md-3'>
            <label className='form-label'>Last Name</label>
            <input
              type='text'
              className='form-control'
              name='last_name'
              onChange={(e) => handle(e)}
              id='last_name'
              value={state.last_name}
            />
          </div>
          <div className='col-3'>
            <label className='form-label'>DOB</label>
            <input
              type='date'
              className='form-control'
              name='dob'
              onChange={(e) => handle(e)}
              id='dob'
              value={state.dob}
            />
          </div>
          <div className='col-md-2'>
            <label className='form-label'>Gender</label>
            <select
              className='form-select'
              name='gender'
              onChange={(e) => handle(e)}
              id='gender'
              value={state.gender}
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='col-md-3'>
            <label className='form-label'>Speciality</label>
            <select
              className='form-select'
              name='speciality'
              onChange={(e) => handle(e)}
              id='speciality'
              value={state.speciality}
            >
              <option>Choose...</option>
              {dept.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className='col-2'>
            <label className='form-label'>Phone</label>
            <input
              type='number'
              className='form-control'
              name='phone_number'
              onChange={(e) => handle(e)}
              id='phone_number'
              value={state.phone_number}
            />
          </div>
          <div className='col-4'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              name='email_id'
              onChange={(e) => handle(e)}
              id='email_id'
              value={state.email_id}
            />
          </div>
          <div className='col-3'>
            <label className='form-label'>DOJ</label>
            <input
              type='date'
              className='form-control'
              name='doj'
              onChange={(e) => handle(e)}
              id='doj'
              value={state.doj}
            />
          </div>
          <div className='col-12 text-center mt-4'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <h4 className='header mt-5 mb-5' style={{ textDecoration: 'underline' }}>
        Doctors Listing
      </h4>
      <div className='container'>
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Doctor's Specialization</th>
              <th>Phone Number</th>
              <th>Email ID</th>
              <th>DOJ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.dob}</td>
                <td>{item.gender}</td>
                <td>{item.speciality}</td>
                <td>{item.phone_number}</td>
                <td>{item.email_id}</td>
                <td>{item.doj}</td>
              </tr>
            ))}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default Adddoctor;
