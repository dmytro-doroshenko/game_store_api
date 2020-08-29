module.exports = {

  // ----- 404: BAD REQUEST -----
  GAME_NOT_UPDATED: {
    message: (id) => `Game #${id} found but not updated. No difference between old and new data`,
    code: 4001,
  },
  NO_PARAMS: {
    message: 'No params to update. Put at least one new parameter',
    code: 4002,
  },

  // ----- 404: NOT FOUND -----
  GAME_NOT_FOUND: {
    message: (id) => `Game #${id} not found. Check id and try again`,
    code: 4041,
  },
};
