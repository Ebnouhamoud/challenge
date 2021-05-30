'use strict';
/**
 * The reason I created this route is because I didn't want
 * the frontend to query the server two times and process the data.
 */
const mockDBCalls = require('../database/index.js');

const getItemsHandler = async (request, response, next) => {
  try {
    const data = await mockDBCalls.getItems();
    return response.status(200).send(JSON.stringify(data));
  } catch (error) {
    return next(new Error("Couldn't get items data"));
  };
};

module.exports = (app) => {
    app.get('/items', getItemsHandler);
};
