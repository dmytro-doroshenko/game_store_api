const { paramsWithRange } = require('../constants');

module.exports = {
  dataToCreate: async (obj) => {
    const namesArray = [];
    const valuesArray = [];

    await Object.entries(obj).forEach(([key, value]) => {
      namesArray.push(key);
      valuesArray.push(`'${value}'`);
    });

    const names = namesArray.join(', ');
    const values = valuesArray.join(', ');

    return [names, values];
  },

  dataToUpdate: async (obj) => {
    const resultsArray = [];

    await Object.entries(obj).forEach(([key, value]) => {
      resultsArray.push(`${key}='${value}'`);
    });

    return resultsArray.join(', ');
  },

  paramsForSelect: async (obj) => {
    const resultsArray = [];

    await Object.entries(obj).forEach(([key, value]) => {
      if (paramsWithRange.includes(key)) {
        if (value.includes('-')) {
          const [scopeLeft, scopeRight] = value.split('-');

          resultsArray.push(`${key} BETWEEN '${scopeLeft}' AND '${scopeRight}'`);
        } else {
          resultsArray.push(`${key} = '${value}'`);
        }
      } else {
        resultsArray.push(`${key} LIKE '%${value}%'`);
      }
    });

    return resultsArray.join(' AND ');
  },
};
