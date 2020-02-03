'use strict'
const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const gameBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]
  let currentPlayer = 'X'
  $('.box').on('click', function (event) {
    // Disable clicking on a box
    $(event.target).off()
    $(event.target).text(currentPlayer)
    gameBoard[event.target.id] = currentPlayer
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    checkWinner()
  })

  const checkWinner = function () {
    console.log(gameBoard)
    if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
(gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
(gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
(gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
(gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
(gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
(gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
(gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
(gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
(gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
    ) {
      console.log('winnerr')
    }
    //  console.log('winner')
  }

  $('#reset-game').on('click', function (event) {
    $('.box').empty()
  })
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
