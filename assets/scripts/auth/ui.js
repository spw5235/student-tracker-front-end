'use strict';

const api = require('./api');
const store = require('../store');
const logic = require('./logic');

const success = (data) => {
  console.log('success completed');
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function() {
  $(".prelogin").hide();
  $(".postlogin").show();
  $("#sign-in").hide();
  $('#show-records-btn').show();
  $(".alert").hide();
  $("#sign-in-success").show();
  $(".homepage-desc-container").hide();
  $("#create-record-btn").show();
};

const signInFailure = function() {
  $(".alert").hide();
  $("#sign-in-warning").show();
};

const signUpSuccess = function() {
  $(".alert").hide();
  $("#sign-up").hide();
  $("#sign-in").show();
  $("#sign-up-success").show();
  $("#sign-up-btn").hide();
  $("#sign-in-btn").hide();
};

const signUpFailure = function() {
  $(".alert").hide();
  $("#sign-up-warning").show();
};

const changePasswordSuccess = function() {
  $(".alert").hide();
  $("#change-password").hide();
  $("#change-password-success").show();
};

const changePasswordFailure = function() {
  $(".alert").hide();
  $("#change-password-error").show();
};

const signOutSuccess = function() {
  $(".alert").hide();
  $(".prelogin").show();
  $(".postlogin").hide();
  $(".tracker-form").hide();
  $(".credential-form").hide();
  $("#create-record-btn").hide();
  $("#show-records-btn").hide();
  $("#new-tracker-form .field-input").val("");
  $("#sign-out-success").show().delay(1500).slideUp();
  $("#change-password").hide();
  $("#table-gen-id").remove();
  $(".h1-title").remove();
  $("#table-gen-show").remove();
  $(".homepage-desc-container").show();
  $("#sign-in .field-input").val("");
  $("#sign-up .field-input").val("");
};

// To Hide Signout Warning when signing in or signing up

const signOutFailure = function() {
  $(".h1-title").remove();
  $(".alert").hide();
  $("#sign-out-warning").show();
};

///////////////////////
///// Tracker UI///////
//////////////////////

const getTrackerFailure = (data) => {
  console.log('get tracker failure');
  console.log(data);
};

const updateRow = function() {
   $( ".update-button" ).on( "click", function() {
     $("#create-record-btn").hide();
    store.buttonUpdateVal = parseInt($( this ).attr("id"));
    store.btnUpdateFnText = $( this ).parent().parent().children(".tg-td-fn").text();
    store.btnUpdateLnText = $( this ).parent().parent().children(".tg-td-ln").text();
    store.btnUpdateGradeText = $( this ).parent().parent().children(".tg-td-grade").text();
    store.btnUpdateCommentText = $( this ).parent().parent().children(".tg-td-comment").text();
    $("#show-records-btn").show();
    $("#update-tracker-form").show();
    $(".fn-input").val(store.btnUpdateFnText);
    $(".ln-input").val(store.btnUpdateLnText);
    $(".grade-input").val(store.btnUpdateGradeText);
    $(".comments-input").text(store.btnUpdateCommentText);
    $("#table-gen-id").remove();
    $(".h1-title").remove();
    $("#h1-dashboard-table").remove();
    $("#create-record-btn").show();
   });
};

const updateButtonInShow = function() {
  $( "#update-record-btn" ).on( "click", function() {
    store.buttonUpdateVal = store.showId;
    const fullNameArr = $(".td-gen-name-show").text().split(" ");
    const firstNameUpdate = fullNameArr[0].trim();
    const lastNameUpdate = fullNameArr[1].trim();

    const gradeArr = $(".td-gen-grade-show").text().split(": ");
    let gradeUpdate = gradeArr[1].trim();


    store.showUpdateFirstName = firstNameUpdate;
    store.showUpdateLastName = lastNameUpdate;
    store.showUpdateGradeText = gradeUpdate;
    store.showUpdateCommentText = $(".td-gen-comments-show").text();
    $("#update-tracker-form").show();
    $(".fn-input").val(store.showUpdateFirstName);
    $(".ln-input").val(store.showUpdateLastName);
    $(".grade-input").val(store.showUpdateGradeText);
    $(".comments-input").text(store.showUpdateCommentText);
    $("#table-gen-show").remove();
    $(".h1-title").remove();
    $("#create-record-btn").show();
  });
};

const showTrackerSuccess = (data) => {
  console.log('show tracker success');
  console.log(data);
  $("#show-records-btn").show();
  $("#update-form-error").hide();
  updateButtonInShow();
  $(".warning").hide();
  $("#create-record-btn").show();
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
  $(".warning").hide();
  $("#new-form-success").show();
  $("#create-record-btn").show();
};

const createTrackerFailure = (data) => {
  console.log('create tracker failure');
  console.log(data);
  $("#new-form-error").show();
};

const deleteTrackerSuccess = (data) => {
  console.log('delete tracker success');
  console.log(data);
  $(".warning").hide();
};

const deleteTrackerFailure = (data) => {
  console.log('delete tracker failure');

  console.log(data);
};

const updateTrackerSuccess = (data) => {
  console.log('update tracker success');
  console.log(data);
  $("#update-tracker-form").hide();
  $("#show-records-btn").show();
  let form = document.getElementById("update-tracker-form");
  form.reset();
  $(".alert").hide();
  $('#update-form-success').show();
  $("#create-record-btn").show();
};

const updateTrackerFailure = (data) => {
  $(".alert").hide();
  $("#update-form-error").show();
  console.log('update tracker failure');
  console.log(data);
};

const showRow = function() {
  let insertH1 = $('<h1 class="h1-title h1-show-table-generated" id="h1-show-table">Student Note:</h1>');
  $( ".view-button" ).on( "click", function() {
    $("#create-record-btn").hide();
    store.buttonShowVal = parseInt($( this ).attr("id"));
    api.showTracker()
      .then((response) => {
        store.showId = response.tracker.id;
        store.showFn = response.tracker.first_name;
        store.showLn = response.tracker.last_name;
        store.showGrade = response.tracker.grade;
        store.showComments = response.tracker.comments;

        let showTableHtml = logic.createShowTable(store.showFn, store.showLn, store.showGrade, store.showComments);
        $(".show-table-generated-container").append(insertH1);
        $(".show-table-generated-container").append(showTableHtml);
    })
    .done(showTrackerSuccess)
    .fail(showTrackerFailure);
    $("#h1-dashboard-table").remove();
    $("#table-gen-id").remove();
    $(".h1-title").show();
  });

};

const deleteRow = function() {
   $( ".delete-button" ).on( "click", function() {
     $("#create-record-btn").hide();
    store.buttonDeleteVal = $( this ).attr("id");
    api.deleteTracker(store.buttonDeleteVal)
      .done(deleteTrackerSuccess)
      .fail(deleteTrackerFailure);
    $(this).parent().parent().hide();
    $("#delete-form-success").show().delay(1500).slideUp();
   });
};


const getTrackerSuccess = (data) => {
  $("#create-record-btn").show();
  deleteRow();
  updateRow();
  showRow();
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
  showRow,
  updateButtonInShow,
};
