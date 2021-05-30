'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const path = require('path')
// server config
const port = process.env.PORT || 3000;

// register routes
registerRoutes(app);

// serves statics filles 
app.use('/',(request,response) => response.sendFile(path.resolve(__dirname, '../public/index.html')));


// Global error handler
app.use((err, request, response, next) => {
    const defaultErr = {
      status: 400,
      message: 'An error occurred',
    };
    const errorObj = Object.assign({}, defaultErr);
    errorObj.message = err.message;
    const errorStatus = err.status || 404;
    return response.status(errorStatus).json(errorObj);
});

const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve();
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`);
    });
};

module.exports = start;


