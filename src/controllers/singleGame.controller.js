const { config } = require('../config');
const { errors, httpStatusCodes } = require('../constants');
const ErrorsHandler = require('../errors/ErrorsHandler');
const { dataBaseService } = require('../services');

const gamesTable = config.GAMES_TABLE;

module.exports = {
  addNewGame: async (req, res) => {
    try {
      const game = req.body;

      await dataBaseService.addNewInstance(gamesTable, game);

      return res.sendStatus(httpStatusCodes.CREATED);
    } catch (e) {
      console.log(e);
      return res.json(e.message);
    }
  },

  deleteGame: async (req, res, next) => {
    try {
      const { id } = req.params;

      const { isDeleted } = await dataBaseService.deleteInstanceById(gamesTable, id);

      if (!isDeleted) {
        return next(new ErrorsHandler(
          errors.GAME_NOT_FOUND.message(id),
          httpStatusCodes.NOT_FOUND,
          errors.GAME_NOT_FOUND.code,
        ));
      }

      return res.sendStatus(httpStatusCodes.OK);
    } catch (e) {
      console.log(e);
      return res.json(e.message);
    }
  },

  getGameById: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await dataBaseService.getInstanceById(gamesTable, id);

      return res.json(result);
    } catch (e) {
      console.log(e);
      return res.json(e.message);
    }
  },

  updateGame: async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      const { found, updated } = await dataBaseService.updateInstanceById(gamesTable, id, newData);

      if (!found) {
        return next(new ErrorsHandler(
          errors.GAME_NOT_FOUND.message(id),
          httpStatusCodes.NOT_FOUND,
          errors.GAME_NOT_FOUND.code,
        ));
      }

      if (!updated) {
        return next(new ErrorsHandler(
          errors.GAME_NOT_UPDATED.message(id),
          httpStatusCodes.BAD_REQUEST,
          errors.GAME_NOT_UPDATED.code,
        ));
      }

      return res.sendStatus(httpStatusCodes.OK);
    } catch (e) {
      console.log(e);
      return res.json(e.message);
    }
  },
};
