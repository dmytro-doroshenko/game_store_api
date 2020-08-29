const { Router } = require('express');

const { singleGameController } = require('../../controllers');
const { gameToUpdateValidatorMiddleware, newGameValidatorMiddleware } = require('../../middlewares');

const { addNewGame, deleteGame, getGameById, updateGame } = singleGameController;

const singleGameRouter = Router();

singleGameRouter.get('/:id', getGameById);

singleGameRouter.post('/:id/delete', deleteGame);
singleGameRouter.post('/:id/update', gameToUpdateValidatorMiddleware, updateGame);
singleGameRouter.post('/add', newGameValidatorMiddleware, addNewGame);

module.exports = singleGameRouter;
