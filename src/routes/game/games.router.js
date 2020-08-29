const { Router } = require('express');

const { gamesController } = require('../../controllers');
const { gamesFilterValidatorMiddleware } = require('../../middlewares');

const { getGamesByParams } = gamesController;

const gamesRouter = Router();

gamesRouter.get('/', gamesFilterValidatorMiddleware, getGamesByParams);

module.exports = gamesRouter;
