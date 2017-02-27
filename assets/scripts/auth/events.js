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
    .catch(ui.onSignInFailure);
};

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .catch(ui.failure);
};

const onSignOut = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

// STUDENT EVENTS

const onGetTrackers = function(event) {
  event.preventDefault();
  api.getTrackers()
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
    .then((response) => {
      store.currentTrackerId = response.tracker.id;
      return store.currentTrackerId;
    })
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
};

module.exports = {
  addHandlers,
};
