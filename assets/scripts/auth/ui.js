'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up!')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onSignUpFailure = function (response) {
  $('#message').text('Fail to sign up!')
  $('#message').removeClass()
  $('#message').addClass('fail-message')
}
const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully logged in!')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
}
const onSignInFailure = function (response) {
  $('#message').text('fail to log in!')
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('change password!')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function (response) {
  $('#message').text('fail to change password!')
}
const onSignOutSuccess = function (response) {
  $('#message').text('signed out!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  store.user = null
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
