const gamesFilterValidationSchema = require('./game/gamesFilter.validator');
const gameToUpdateValidationSchema = require('./game/gameToUpdate.validator');
const newGameValidationSchema = require('./game/newGame.validator');

module.exports = {
  gamesFilterValidationSchema,
  gameToUpdateValidationSchema,
  newGameValidationSchema,
};
