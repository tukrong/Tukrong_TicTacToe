'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
}

const onStartGame = function (event) {
  event.preventDefault()
  // console.log(event.target)
  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const onClickUpdateGame = function (event) {
  event.preventDefault()
  const clickData = event.target.id
  api.updateClick(clickData)
    .then(ui.onClickUpdateSuccess)
    .catch(ui.onClickUpdateFailure)
}
const onRestartGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  store.currentPlayer = 'X'
  for (let i = 0; i < store.gameBoard.length; i++) {
    store.gameBoard[i] = ''
  }
  api.restartGame()
    .then(ui.onRestartGameSuccess)
}

const onGameStatus = function (event) {
  event.preventDefault()
  api.getGameStatus()
    .then(ui.onGameStatusSuccessful)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onClickUpdateGame,
  onRestartGame,
  onGameStatus
}
