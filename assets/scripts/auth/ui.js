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
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully logged in!')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#gameBoard').hide()
  $('#reset-game').show()
  $('#startGameMessage').text('Press New Game to Start')
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
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function (response) {
  $('#message').text('signed out!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#gameBoard').hide()
  $('#reset-game').hide()
  $('#change-password').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#gameStatus').hide()
  store.user = null
}

const onRestartGameSuccess = function (response) {
  $('#message').text('New Game X goes first')
  $('#gameBoard').show()
  $('#startGameMessage').hide()
  $('#gameStatus').show()
  store.game = response.game
}

const onGameStatusSuccessful = function (data) {
  $('#message').text("you've played" + data.games.length)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onRestartGameSuccess,
  onGameStatusSuccessful
}
