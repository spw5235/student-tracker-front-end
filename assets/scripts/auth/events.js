'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// LOGIN EVENTS

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .done(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .catch(ui.signUpFailure);
};

const onSignOut = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

// STUDENT EVENTS




const onGetTrackers = function(event) {
  event.preventDefault();
  api.getTrackers()
    .then((response) => {


      store.numOfStudents = response.trackers.length;
      for (let i = 0; i < store.numOfStudents; i++) {
        const studObject = response.trackers[i];
        const studObjectId = studObject.id;
        const studObjectFirstName = studObject.first_name;
        const studObjectLastName = studObject.last_name;
        const studObjectGrade = studObject.grade;
        console.log(studObjectGrade);

        // for (let j = 0; j < )


      }




    })
    .done(ui.getTrackerSuccess)
    .fail(ui.getTrackerFailure);
};





const onShowTracker = function(event) {
  event.preventDefault();
  api.showTracker()
    .done(ui.showTrackerSuccess)
    .fail(ui.showTrackerFailure);
};

const onCreateTracker = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createTracker(data)
    // .then((response) => {
    //   store.currentTrackerId = response.tracker.id;
    //   return store.currentTrackerId;
    // })
    .done(ui.createTrackerSuccess)
    .fail(ui.createTrackerFailure);
};

const onDeleteTracker = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteTracker(data)
    .done(ui.deleteTrackerSuccess)
    .fail(ui.deleteTrackerFailure);
};

const onUpdateTracker = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateTracker(data)
    .done(ui.updateTrackerSuccess)
    .fail(ui.updateTrackerFailure);
};

const onClickSignUpButton = function() {
  $("#sign-up").toggle();
  $("#sign-in").hide();
};

const onClickSignInButton = function() {
  $("#sign-in").toggle();
  $("#sign-up").hide();
};

const onClickChangePasswordButton = function() {
  $("#change-password").toggle();
};

const onCreateNewRecordBtn = function() {
  $("#new-tracker-form").show();
  $("#show-records-btn").show();
  $("#create-record-btn").hide();
};

const onShowRecordsBtn = function() {
  $("#create-record-btn").show();
  $("#show-records-btn").hide();
  $("#new-tracker-form").hide();
};

const addHandlers = () => {
  $('#get-tracker-form').on('submit', onGetTrackers);
  $('#show-tracker-form').on('submit', onShowTracker);
  $('#new-tracker-form').on('submit', onCreateTracker);
  $('#delete-tracker-form').on('submit', onDeleteTracker);
  $('#update-tracker-form').on('submit', onUpdateTracker);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-up-btn').on('click', onClickSignUpButton);
  $('#sign-in-btn').on('click', onClickSignInButton);
  $('#change-password-btn').on('click', onClickChangePasswordButton);
  $('#sign-out-btn').on('click', onSignOut);
  $('#create-record-btn').on('click', onCreateNewRecordBtn);
  $('#show-records-btn').on('click', onGetTrackers);


};

module.exports = {
  addHandlers,
};
