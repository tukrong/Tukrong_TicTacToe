# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": null
  }
}'

echo
