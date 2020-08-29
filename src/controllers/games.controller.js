const { config } = require('../config');
const { dataBaseService } = require('../services');

const gamesTable = config.GAMES_TABLE;

module.exports = {
  getGamesByParams: async (req, res) => {
    try {
      const params = req.query;
      let result;

      if (!Object.keys(params).length) {
        result = await dataBaseService.getAllInstances(gamesTable);
      } else {
        result = await dataBaseService.getInstancesByParams(gamesTable, params);
      }

      return res.json(result);
    } catch (e) {
      console.log(e);
      return res.json(e.message);
    }
  },
};
