'use strict';

const config = require('../config');
const store = require('../store');

// Login Api

const signUp = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function() {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const changePassword = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: data,
  });
};

// Trackers API

const getTrackers = function() {
  return $.ajax({
    url: config.apiOrigin + '/trackers/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showTracker = function() {
  return $.ajax({
    url: config.apiOrigin + '/trackers/' + store.buttonShowVal,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createTracker = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/trackers/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteTracker = function() {
  return $.ajax({
    url: config.apiOrigin + '/trackers/' + store.buttonDeleteVal,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateTracker = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/trackers/' + store.buttonUpdateVal,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const updateTrackerinShow = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/trackers/' + store.showId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getTrackers,
  showTracker,
  createTracker,
  deleteTracker,
  updateTracker,
  updateTrackerinShow,
};
