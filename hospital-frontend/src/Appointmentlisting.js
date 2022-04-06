import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import axios from 'axios';

function Appointmentlisting() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/fetchappointment').then((response) => {
      var data = response.data.data;
      setPosts(data);
    });
  }, []);

  return (
    <div className='container'>
      <h4 className='header mt-5 mb-5'>Appointment Listing</h4>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Date</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Email Id</th>
            <th>Description</th>
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
              <td>{item.age}</td>
              <td>{item.date}</td>
              <td>{item.department}</td>
              <td>{item.phone_number}</td>
              <td>{item.email_id}</td>
              <td>{item.description}</td>
              <td>
                <button type='button' className='btn btn-primary accept bg-success'>
                  Accept
                </button>
                <button type='button' className='btn btn-primary reject bg-danger'>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Appointmentlisting;
