const express = require('express');
const router = express.Router();
const Specialization = require('../models/specialization');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Booking = require('../models/booking');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Add Specialization=======starts here===========
router.post('/add_specializations', async (req, res) => {
  const special = new Specialization(req.body);
  await special.save();
  try {
    res.status(200).json({
      Status: res.statusCode,
    });
  } catch {
    res.status(500).json({
      Status: res.statusCode,
    });
  }
});
// Add Specialization=======ends here==============


// Fetching Specialization data from database to table======starts here========
router.get('/fetch_specialization', async (req, res, next) => {
  try {
    const ads = await Specialization.find();

    return res.status(200).json({
      success: true,
      count: ads.length,
      data: ads,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
  }
});
// Fetching Specialization data from database to table======ends here========


// Adding Doctors to database=======starts here==============
router.post('/add_doctors', async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  try {
    res.status(200).json({
      Status: res.statusCode,
    });
  } catch {
    res.status(500).json({
      Status: res.statusCode,
    });
  }
});
// Adding Doctors to database========ends here==============


// Fetching doctors from database to table=======starts here==============
router.get('/fetch_doctors', async (req, res, next) => {
  try {
    const ads = await Doctor.find();

    return res.status(200).json({
      success: true,
      count: ads.length,
      data: ads,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
  }
});
// Fetching doctors from database to table=======ends here==============


// Fetching data from database to Appointment table=========starts here========
router.get('/fetchappointment', async (req, res, next) => {
  try {
    const ads = await Booking.find();

    return res.status(200).json({
      success: true,
      count: ads.length,
      data: ads,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
  }
});
// Fetching data from database to Appointment table=========ends here


// Adding Patients to database========starts here=============
router.post('/add_patients', function (req, res, next) {
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (err) {
      res.json({
        error: err,
      });
    }
    const patient = new Patient({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      password: hashedPassword,
      address: req.body.address,
    });
    patient.save();
    try {
      res.status(200).json({
        Status: res.statusCode,
      });
    } catch {
      res.status(500).json({
        Status: res.statusCode,
      });
    }
  });
});
// Adding Patients to database=========ends here================


// Fetching patients from database to table======starts here================
router.get('/fetch_patients', async (req, res, next) => {
  try {
    const ads = await Patient.find();

    return res.status(200).json({
      success: true,
      count: ads.length,
      data: ads,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
  }
});
// Fetching patients from database to table======ends here================

// Login Patient==========starts here==============
router.post('/login', async (req, res) => {
  var phone_number = req.body.phone_number;
  var password = req.body.password;

  Patient.findOne({ phone_number: phone_number }).then((patient) => {
    if (patient) {
      bcrypt.compare(password, patient.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: patient.name }, 'verySecretValue', {
            expiresIn: '1h',
          });
          res.json({
            message: 'Login Successful',
            Status: 200,
            token,
            patient,
          });
        } else {
          res.json({
            message: 'password does not matched',
            Status: 500,
          });
        }
      });
    } else {
      res.json({
        message: 'No user found!',
      });
    }
  });
});
// Login Patient========ends here===============


// Adding booking patients to database==========starts here=============
router.post('/bookings', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  try {
    res.status(200).json({
      Status: res.statusCode,
    });
  } catch {
    res.status(500).json({
      Status: res.statusCode,
    });
  }
});
// Adding booking patients to database============ends here==============

module.exports = router;
