'use strict';

const api = require('./api');
const store = require('../store');

const success = (data) => {
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log('error');
};

const signInSuccess = function() {
  console.log('sign-in success');
  $(".prelogin").hide();
  $(".postlogin").show();
  $(".password-warning").hide();
  $("#sign-in").hide();
  $(".dashboard-container").show();
  $("#sign-up-success").show();
};

const signInFailure = function() {
  $("#sign-in-warning").show();
};

const signUpSuccess = function() {
  $(".password-warning").hide();
  $("#sign-up-warning").hide();
  $(".sign-in").show();
};

const signUpFailure = function() {
  $("#sign-up-warning").show();
};

const changePasswordSuccess = function() {
  console.log("change password success");
};

const changePasswordFailure = function() {
  console.log("change password failure");
};

const signOutSuccess = function() {
  console.log("signout success");
  $(".prelogin").show();
  $(".postlogin").hide();
  $(".tracker-form").hide();
  $(".tracker").hide();
  $(".credential-form").hide();
  $(".table-generated-container").hide();
};

const signOutFailure = function() {
  console.log("signout failure");
};


///////////////////////
// Tracker UI


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
  let form = document.getElementById("new-tracker-form");
  form.reset();
  $("#new-tracker-form").hide();
  $("#create-record-btn").show();

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

const deleteRow = function() {
   $( ".delete-button" ).on( "click", function() {
    // let btnClassName = parseInt( $( this ).attr("id") );
    store.buttonDeleteVal = $( this ).attr("id");
    api.deleteTracker(store.buttonDeleteVal)
      .done(deleteTrackerSuccess)
      .fail(deleteTrackerFailure);
    $(this).parent().parent().hide();
   });
};

const UpdateRow = function() {
   $( ".update-button" ).on( "click", function() {
    // let btnClassName = parseInt( $( this ).attr("id") );
    store.buttonUpdateVal = $( this ).attr("id");
    $("#update-tracker-form").show();
    $("#update-tracker-form").hide();

   });
};

const getTrackerSuccess = (data) => {
  console.log('get tracker success');
  console.log(data);
  $("#show-records-btn").hide();
  deleteRow();
  // $("#create-record-btn").show();
  // $("#show-records-btn").hide();
  // $("#new-tracker-form").hide();
  // $("#create-record-btn").show();
  // $("#new-tracker-form").show();
  // $("#show-records-btn").hide();
  // $("#new-tracker-form").hide();
  // $(".table-generated-container").hide();
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
  signUpSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
};
