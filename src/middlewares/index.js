const gamesFilterValidatorMiddleware = require('./game/checkIsGamesFilterValid.middleware');
const gameToUpdateValidatorMiddleware = require('./game/checkIsGameToUpdateValid.middleware');
const newGameValidatorMiddleware = require('./game/checkIsGameToAddValid.middleware');

module.exports = {
  gamesFilterValidatorMiddleware,
  gameToUpdateValidatorMiddleware,
  newGameValidatorMiddleware,
};
