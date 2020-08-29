module.exports = async (obj) => {
  const namesArray = [];
  const valuesArray = [];

  await Object.entries(obj).forEach(([key, value]) => {
    namesArray.push(key);
    valuesArray.push(`'${value}'`);
  });

  const names = namesArray.join(', ');
  const values = valuesArray.join(', ');

  return [names, values];
};
