const { config } = require('../config');
const connection = require('../db');
const { dbDataProcessor } = require('../helpers');

const gamesTable = config.GAMES_TABLE;

module.exports = {
  addNewGame: async (gameData) => {
    const [names, values] = await dbDataProcessor.dataToCreate(gameData);

    await connection.query(`INSERT INTO ${gamesTable} (${names}) VALUES (${values})`);
  },

  deleteGame: async (id) => {
    await connection.query(`DELETE FROM ${gamesTable} WHERE id='${id}'`);
  },

  getAllGames: async () => {
    const [results] = await connection.query(`SELECT * FROM ${gamesTable}`);

    return results;
  },

  getGameById: async (id) => {
    const [result] = await connection.query(`SELECT * FROM ${gamesTable} WHERE id='${id}'`);

    return result;
  },

  getInstancesByParams: async (params) => {
    const conditions = await dbDataProcessor.paramsForSelect(params);

    console.log('cond', conditions);

    const [result] = await connection.query(`SELECT * FROM ${gamesTable} WHERE ${conditions}`);

    return result;
  },

  updateGame: async (id, newData) => {
    const data = await dbDataProcessor.dataToUpdate(newData);

    await connection.query(`UPDATE ${gamesTable} SET ${data} WHERE id='${id}'`);
  },
};
