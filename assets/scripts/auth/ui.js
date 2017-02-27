'use strict';

// const store = require('../store');

const success = (data) => {
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log('error');
};

const signInSuccess = function() {
  // $("#sign-in").hide();
  // $("#sign-out").show();
  console.log('sign-in success');
};

// Tracker UI
const getTrackerSuccess = (data) => {
  console.log('get tracker success');
  console.log(data);
};

const getTrackerFailure = (data) => {
  console.log('get tracker failure');
  console.log(data);
};

const showTrackerSuccess = (data) => {
  console.log('show tracker success');
  console.log(data);
};

const showTrackerFailure = (data) => {
  console.log('show tracker failure');
  console.log(data);
};

const createTrackerSuccess = (data) => {
  console.log('create tracker success');
  console.log(data);
  // $("#create-setting-stud-id").attr("value", store.currentTrackerId);
};

const createTrackerFailure = (data) => {
  console.log('create tracker failure');
  console.log(data);
};

const deleteTrackerSuccess = (data) => {
  console.log('delete tracker success');
  console.log(data);
};

const deleteTrackerFailure = (data) => {
  console.log('delete tracker failure');
  console.log(data);
};

const updateTrackerSuccess = (data) => {
  console.log('update tracker success');
  console.log(data);
};

const updateTrackerFailure = (data) => {
  console.log('update tracker failure');
  console.log(data);
};

module.exports = {
  success,
  failure,
  createTrackerSuccess,
  createTrackerFailure,
  getTrackerSuccess,
  getTrackerFailure,
  showTrackerSuccess,
  showTrackerFailure,
  updateTrackerSuccess,
  updateTrackerFailure,
  deleteTrackerSuccess,
  deleteTrackerFailure,
  signInSuccess,
};
