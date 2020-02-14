'use strict'
const authEvents = require('./auth/events')
const store = require('./store')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  store.gameBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]
  // store currentPlayer from store file to use in the api
  store.currentPlayer = 'X'
  $('.box').on('click', function (event) {
    // Disable clicking on a box
    // $(event.target).off()
    if (store.gameBoard[event.target.id] === '') {
      authEvents.onClickUpdateGame(event)
      $(event.target).text(store.currentPlayer)
      store.gameBoard[event.target.id] = store.currentPlayer
      if (store.currentPlayer === 'X') {
        store.currentPlayer = 'O'
      } else {
        store.currentPlayer = 'X'
      }
      $('#message').text(store.currentPlayer + ' turn')
      checkWinner()
    }
  })
  const checkWinner = function () {
    if ((store.gameBoard[0] === 'X' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'X') ||
(store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'X') ||
(store.gameBoard[6] === 'X' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'X') ||
(store.gameBoard[0] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[8] === 'X') ||
(store.gameBoard[2] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[6] === 'X') ||
(store.gameBoard[0] === 'X' && store.gameBoard[3] === 'X' && store.gameBoard[6] === 'X') ||
(store.gameBoard[1] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[7] === 'X') ||
(store.gameBoard[2] === 'X' && store.gameBoard[5] === 'X' && store.gameBoard[8] === 'X')) {
      $('#message').text('X Winner')
      $('#gameBoard').hide()
    } else if ((store.gameBoard[0] === 'O' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'O') ||
    (store.gameBoard[3] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'O') ||
    (store.gameBoard[6] === 'O' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[2] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[6] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[3] === 'O' && store.gameBoard[6] === 'O') ||
    (store.gameBoard[1] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[7] === 'O') ||
    (store.gameBoard[2] === 'O' && store.gameBoard[5] === 'O' && store.gameBoard[8] === 'O')) {
      $('#message').text('O Winner')
      $('#gameBoard').hide()
    } else {
      let count = 0
      for (let i = 0; i < store.gameBoard.length; i++) {
        if (store.gameBoard[i] === 'O' || store.gameBoard[i] === 'X') {
          count++
        }
      }
      if (count === 9) {
        $('#message').text('Tie, press new game to start  ')
      }
    }
  }

  $('#reset-game').on('click', authEvents.onRestartGame)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#gameBoard').hide()
  $('#reset-game').hide()
  $('#gameStatus').hide()
  $('#gameStatus').on('click', authEvents.onGameStatus)
})
