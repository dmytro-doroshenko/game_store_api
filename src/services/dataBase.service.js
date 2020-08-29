const connection = require('../db');
const { dbDataProcessor } = require('../helpers');

module.exports = {
  addNewInstance: async (tableName, gameData) => {
    const [names, values] = await dbDataProcessor.dataToCreate(gameData);

    await connection.query(`INSERT INTO ${tableName} (${names}) VALUES (${values})`);
  },

  deleteInstanceById: async (tableName, id) => {
    const [result] = await connection.query(`DELETE FROM ${tableName} WHERE id='${id}'`);

    return {
      isDeleted: result.affectedRows,
    };
  },

  getAllInstances: async (tableName) => {
    const [results] = await connection.query(`SELECT * FROM ${tableName}`);

    return results;
  },

  getInstanceById: async (tableName, id) => {
    const [result] = await connection.query(`SELECT * FROM ${tableName} WHERE id='${id}'`);

    return result;
  },

  getInstancesByParams: async (tableName, params) => {
    const conditions = await dbDataProcessor.paramsForSelect(params);

    const [results] = await connection.query(`SELECT * FROM ${tableName} WHERE ${conditions}`);

    return results;
  },

  updateInstanceById: async (tableName, id, newData) => {
    const data = await dbDataProcessor.dataToUpdate(newData);

    const [result] = await connection.query(`UPDATE ${tableName} SET ${data} WHERE id='${id}'`);

    return {
      found: result.affectedRows,
      updated: result.changedRows,
    };
  },
};
