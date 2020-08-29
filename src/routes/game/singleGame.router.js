const { Router } = require('express');

const { gameController } = require('../../controllers');

const { addNewGame, deleteGame, getAllGames, getGameById, getGameByParams, updateGame } = gameController;

const singleGameRouter = Router();

singleGameRouter.get('/', getAllGames);
singleGameRouter.get('/:id', getGameById);
singleGameRouter.get('/games', getGameByParams);

singleGameRouter.post('/:id/delete', deleteGame);
singleGameRouter.post('/:id/update', updateGame);
singleGameRouter.post('/add', addNewGame);

module.exports = singleGameRouter;
