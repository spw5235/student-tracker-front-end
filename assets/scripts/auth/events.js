'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const logic = require('./logic');
// const eventsjs = require('./events');

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
      let tableId = $('<table id="table-gen-id" class="table-striped"></table>');
      let tableBody = $("<tbody></tbody>");
      let tableRowDesc = $('<tr class="tg-tr-description"><th class="tg-td-description tg-id-hide">Student ID</td><th class="tg-td-description">First Name</td><th class="tg-td-description">Last Name</td><th class="tg-td-description">Grade</td><th class="tg-td-comment tg-id-hide">Comments</td><th class="tg-td-description">View</td><th class="tg-td-description">Update</td><th class="tg-td-description">Delete</td></tr>');
      tableBody.append(tableRowDesc);
      let newGenRow;
      store.numOfStudents = response.trackers.length;
      for (let i = 0; i < store.numOfStudents; i++) {
        const studObject = response.trackers[i];
        const studObjectId = studObject.id;
        const studObjectFirstName = studObject.first_name;
        const studObjectLastName = studObject.last_name;
        const studObjectGrade = studObject.grade;
        const studObjectComment = studObject.comments;
        let textclass = studObjectId.toString();
        newGenRow = logic.createRowHTML(studObjectId, studObjectFirstName, studObjectLastName, studObjectGrade, studObjectComment);
        $("tg-td-details").addClass(textclass);
        tableBody.append(newGenRow);
      }
      let h1Title = $('<h1 class="h1-title" id="h1-dashboard-table">Counselor Dashboard:</h1>');
      tableId.append(tableBody);
      $(".table-generated").append(h1Title);
      $(".table-generated").append(tableId);
    })
    .done(ui.getTrackerSuccess)
    .fail(ui.getTrackerFailure);
};

// const onShowTracker = function() {
//   event.preventDefault();
//   api.showTracker()
//     .then((response) => {
//       console.log(response);
//       console.log(store.buttonShowVal);



    //   $( ".update-button" ).on( "click", function() {
    //    // let btnClassName = parseInt( $( this ).attr("id") );
    //    store.buttonShowVal = parseInt($( this ).attr("id"));
    //    store.btnShowFnText = $( this ).parent().parent().children(".tg-td-fn").text();
    //    store.btnShowText = $( this ).parent().parent().children(".tg-td-ln").text();
    //    store.btnShowGradeText = $( this ).parent().parent().children(".tg-td-grade").text();
    //    store.btnShowCommentText = $( this ).parent().parent().children(".tg-td-comment").text();
    // })
//     .done(ui.showTrackerSuccess)
//     .fail(ui.showTrackerFailure);
// };

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
  $("#sign-out-success").hide();
  $("#sign-up").toggle();
  $("#sign-in").hide();
  $(".alert").hide();
};

const onClickSignInButton = function() {
  $("#sign-out-success").hide();
  $("#sign-in").toggle();
  $("#sign-up").hide();
  $(".alert").hide();
};

const onClickChangePasswordBtn = function() {
  $("#change-password").toggle();
  $("#update-form-error").hide();
  $("#table-gen-id").remove();
  $("#new-tracker-form").hide();
  $("#table-gen-show").remove();
  $(".dashboard-btn").show();
  $("#update-tracker-form").hide();
  $("#new-form-error").hide();
  $(".h1-title").remove();
  $("#update-form-success").hide();
  $("#new-form-success").hide();
  // $("#change-password-btn").hide();
};

const onDashButtons = function() {
  $(".alert").hide();
  $("#update-form-error").hide();
  $("#table-gen-show").remove();
  $("#update-form-error").hide();
  $("#change-password").hide();
  $(".h1-title").remove();
};

const onCreateNewRecordBtn = function() {
  onDashButtons();
  $("#new-tracker-form").show();
  $("#show-records-btn").show();
  $("#create-record-btn").hide();
  // $(".table-generated-container").hide();
  $("#update-tracker-form").hide();
  $(".comments-input").text('');
  $("#table-gen-id").remove();
  $(".h1-title").remove();
  $("#h1-dashboard-table").remove();
};

const onShowRecordsBtn = function() {
  onDashButtons();
  $(".h1-show-table-generated").show();
  $("#show-records-btn").hide();
  $("#new-tracker-form").hide();
  $(".table-generated-container").show();
  $("#update-tracker-form").hide();
  $("#table-gen-id").remove();
  $("#create-record-btn").show();
  // $("#h1-dashboard-table").remove();
};

 $('#show-records-btn').on('click', onShowRecordsBtn);
 // $('#sign-in-btn').on('click', onClickSignInButton());

//  $( "#sign-in-btn" ).on( "click", function() {
//   onClickSignInButton();
// });

const addHandlers = () => {
  $('#get-tracker-form').on('submit', onGetTrackers);
  // $('#show-tracker-form').on('submit', onShowTracker);
  $('#new-tracker-form').on('submit', onCreateTracker);
  $('#delete-tracker-form').on('submit', onDeleteTracker);
  $('#update-tracker-form').on('submit', onUpdateTracker);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-up-btn').on('click', onClickSignUpButton);
  $('#change-password-btn').on('click', onClickChangePasswordBtn);
  $('#sign-out-btn').on('click', onSignOut);
  $('#create-record-btn').on('click', onCreateNewRecordBtn);
  $('#show-records-btn').on('click', onGetTrackers);
  $('.delete-button').on('click', onGetTrackers);
  $('#sign-in-btn').on('click', onClickSignInButton);
  // $('.view-button').on('click', eventsjs.showRow);

  // $('.table-gen-btn-delete').on('click', onDeleteTracker);
  // $( ".delete-button" ).on( "click", function() {
  //  let btnClassName = parseInt( $( this ).attr("id") );
  //  console.log(btnClassName);
  // });
};

module.exports = {
  addHandlers,
  onDeleteTracker,
  // onShowTracker,
};
