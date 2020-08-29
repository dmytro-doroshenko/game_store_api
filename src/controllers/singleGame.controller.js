const { gameService } = require('../services');

module.exports = {
  addNewGame: async (req, res) => {
    try {
      const game = req.body;

      await gameService.addNewGame(game);

      res.send('ok');
    } catch (e) {
      console.log(e);
      res.end();
    }
  },

  deleteGame: async (req, res) => {
    try {
      const { id } = req.params;

      await gameService.deleteGame(id);

      res.send('ok');
    } catch (e) {
      console.log(e);
      res.end();
    }
  },

  getAllGames: async (req, res) => {
    const result = await gameService.getAllGames();

    res.send(result);
  },

  getGameById: async (req, res) => {
    const { id } = req.params;

    const result = await gameService.getGameById(id);

    res.json(result);
  },

  getGameByParams: async (req, res) => {
    const params = req.query;

    console.log('par', params);
    res.end();
  },

  updateGame: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      await gameService.updateGame(id, newData);

      res.send('ok');
    } catch (e) {
      console.log(e);
      res.end();
    }
  },
};
