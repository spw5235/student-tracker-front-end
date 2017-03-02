'use strict';

const api = require('./api');
const store = require('../store');
const logic = require('./logic');

// Button jQuery

// Success/Fail Handler

$("#show-records-btn").html()

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
  $("#table-gen-show").remove();
  $("#table-gen-id").remove();
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
  $("#table-gen-id").remove();
  $("#table-gen-id");
  $("#show-records-btn").show();
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
  $("#table-gen-id").remove();

  // $("#create-setting-stud-id").attr("value", store.currentTrackerId);
};

const createTrackerFailure = (data) => {
  console.log('create tracker failure');
  console.log(data);
  $("#new-form-error").show();
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
  $("#update-tracker-form").hide();
  $("#show-records-btn").show();
  $("#table-gen-id").remove();
  let form = document.getElementById("update-tracker-form");
  $("#update-form-error").hide();
  form.reset();
};

const updateTrackerFailure = (data) => {
  $("#update-form-error").show();
  console.log('update tracker failure');
  console.log(data);
};

const showRow = function() {
  $( ".view-button" ).on( "click", function() {
   // let btnClassName = parseInt( $( this ).attr("id") );
    store.buttonShowVal = parseInt($( this ).attr("id"));
    console.log(store.buttonShowVal);
    api.showTracker()
      .then((response) => {
        store.showFn = response.tracker.first_name;
        store.showLn = response.tracker.last_name;
        store.showGrade = response.tracker.grade;
        store.showComments = response.tracker.comments;

        let showTableHtml = logic.createShowTable(store.showFn, store.showLn, store.showGrade, store.showComments);
        console.log(showTableHtml);
        $(".show-table-generated-container").append(showTableHtml);
    })
    .done(showTrackerSuccess)
    .fail(showTrackerFailure);
  });
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

const updateRow = function() {
   $( ".update-button" ).on( "click", function() {
    // let btnClassName = parseInt( $( this ).attr("id") );
    store.buttonUpdateVal = parseInt($( this ).attr("id"));
    store.btnUpdateFnText = $( this ).parent().parent().children(".tg-td-fn").text();
    store.btnUpdateLnText = $( this ).parent().parent().children(".tg-td-ln").text();
    store.btnUpdateGradeText = $( this ).parent().parent().children(".tg-td-grade").text();
    store.btnUpdateCommentText = $( this ).parent().parent().children(".tg-td-comment").text();
    console.log(store.btnUpdateCommentText);
    $("#update-tracker-form").show();
    $(".table-generated").hide();
    $("#update-tracker-form").show();
    $(".fn-input").val(store.btnUpdateFnText);
    $(".ln-input").val(store.btnUpdateLnText);
    $(".grade-input").val(store.btnUpdateGradeText);
    $(".comments-input").text(store.btnUpdateCommentText);
   });
};



const getTrackerSuccess = (data) => {
  console.log('get tracker success');
  console.log(data);
  $("#show-records-btn").hide();
  deleteRow();
  updateRow();
  showRow();
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
  showRow,
};
