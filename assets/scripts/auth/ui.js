'use strict';

const api = require('./api');
const store = require('../store');
const logic = require('./logic');

// let screenWidth = $(window).width();
// let mobileClearfix = $('<div class="clearfix mobile-clearfix"></div>');
//
// if (screenWidth < 700) {
//   $(".insert-mobile-clearfix").append(mobileClearfix);
// };

// const cleafixMobile = function() {
//   if ( screenWidth > 700 ) {
//     alert('below');
//   }
// };

// cleafixMobile();
// const eventsjs = require('./events');

// Success/Fail Handler

// $("#show-records-btn").html();

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
  $(".dashboard-description").show();
  $(".prelogin").hide();
  $(".postlogin").show();
  // $(".password-warning").hide();
  $("#sign-in").hide();
  $(".dashboard-container").show();
  // $("#sign-up-success").show();
  $('#create-record-btn').show();
  $('#show-records-btn').show();
  $(".alert").hide();
  // $("#sign-up-success").hide();
  $("#sign-in-success").show();
  $(".homepage-desc-container").hide();
};

const signInFailure = function() {
  // $("#sign-in-warning").hide();
  // $(".warning").hide();
  // $("#sign-in-success").hide();
  $(".alert").hide();
  $("#sign-in-warning").show();
};

const signUpSuccess = function() {
  $(".alert").hide();
  // $("#sign-up-warning").hide();
  $("#sign-up").hide();
  $("#sign-in").show();
  // $(".warning").hide();
  $("#sign-up-success").show();
  $("#sign-up-btn").hide();
  $("#sign-in-btn").hide();
};

const signUpFailure = function() {
  $(".alert").hide();
  $("#sign-up-warning").show();
};

const changePasswordSuccess = function() {
  console.log("change password success");
  $(".alert").hide();
  $("#change-password").hide();
  $("#change-password-success").show();
};

const changePasswordFailure = function() {
  console.log("change password failure");
  $(".alert").hide();
  $("#change-password-error").show();
};

const signOutSuccess = function() {
  console.log("signout success");
  $(".alert").hide();
  $(".prelogin").show();
  $(".postlogin").hide();
  $(".tracker-form").hide();
  $(".dashboard-description").hide();
  $(".credential-form").hide();
  // $(".table-generated-container").hide();
  $("#new-tracker-form .field-input").val("");
  $("#sign-out-success").show();
  $("#change-password").hide();
  $("#table-gen-id").remove();
  $(".h1-title").remove();
  $("#table-gen-show").remove();
  $(".homepage-desc-container").show();
};

// To Hide Signout Warning when signing in or signing up

const signOutFailure = function() {
  console.log("signout failure");
  $(".h1-title").remove();
  $(".alert").hide();
  $("#sign-out-warning").show();
};

///////////////////////
// Tracker UI

const getTrackerFailure = (data) => {
  console.log('get tracker failure');
  console.log(data);
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
    $("#show-records-btn").show();
    $("#update-tracker-form").show();
    $(".fn-input").val(store.btnUpdateFnText);
    $(".ln-input").val(store.btnUpdateLnText);
    $(".grade-input").val(store.btnUpdateGradeText);
    $(".comments-input").text(store.btnUpdateCommentText);
    $("#table-gen-id").remove();
    $(".h1-title").remove();
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
    // $(".table-generated").hide();
    $(".fn-input").val(store.showUpdateFirstName);
    $(".ln-input").val(store.showUpdateLastName);
    $(".grade-input").val(store.showUpdateGradeText);
    $(".comments-input").text(store.showUpdateCommentText);
    $("#table-gen-show").remove();
    $(".h1-title").remove();
    // $("#table-gen-id").remove();
  });
};

const showTrackerSuccess = (data) => {
  console.log('show tracker success');
  console.log(data);
  $("#show-records-btn").show();
  $("#update-form-error").hide();
  updateButtonInShow();
  $(".warning").hide();
  // $("#table-gen-show").remove();
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
  $(".warning").hide();

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
  $(".warning").hide();
};

const updateTrackerFailure = (data) => {
  $("#update-form-error").show();
  console.log('update tracker failure');
  console.log(data);
};

const showRow = function() {
  let insertH1 = $('<h1 class="h1-title h1-show-table-generated" id="h1-show-table">Student Note:</h1>');
  $( ".view-button" ).on( "click", function() {
   // let btnClassName = parseInt( $( this ).attr("id") );
    store.buttonShowVal = parseInt($( this ).attr("id"));
    console.log(store.buttonShowVal);
    api.showTracker()
      .then((response) => {
        store.showId = response.tracker.id;
        store.showFn = response.tracker.first_name;
        store.showLn = response.tracker.last_name;
        store.showGrade = response.tracker.grade;
        store.showComments = response.tracker.comments;

        let showTableHtml = logic.createShowTable(store.showFn, store.showLn, store.showGrade, store.showComments);
        console.log(showTableHtml);
        $(".show-table-generated-container").append(insertH1);
        $(".show-table-generated-container").append(showTableHtml);
    })
    .done(showTrackerSuccess)
    .fail(showTrackerFailure);
    $("#table-gen-id").remove();
    $(".h1-title").show();
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
  updateButtonInShow,
};
