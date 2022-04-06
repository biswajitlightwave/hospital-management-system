import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

function Adddepartment() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/fetch_specialization').then((response) => {
      var data = response.data.data;
      setPosts(data);
    });
  }, []);

  const [deptname, setDeptName] = useState();
  const handleChange = (e) => {
    var deptname = e.target.value;
    setDeptName(deptname);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log('deptname', deptname);
    const value = {
      specialization: deptname,
    };

    axios
      .post('http://localhost:4000/api/add_specializations', value)
      .then((response) => {
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
        <h4 className='header'>Add Departament</h4>
        <form className='row mt-4 justify-content-center'>
          <div className='col-md-3'>
            <label className='form-label'>Departament Name</label>
            <input
              type='text'
              className='form-control'
              onChange={handleChange}
            />
          </div>
          <div className='col-12 text-center mt-4'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <h4 className='header mt-5 mb-5' style={{ textDecoration: 'underline' }}>
        Specialization Listing
      </h4>
      <div className='container'>
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>Specialization Id</th>
              <th>Specialization Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id}>
                <td>{item._id}</td>
                <td>{item.specialization}</td>
              </tr>
            ))}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default Adddepartment;
