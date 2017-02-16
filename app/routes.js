// app/routes.js

// grab the photo model

var Photo = require('./models/photo');

  module.exports = function(app) {


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route 
    app.get('/photos', function(req, res) {
      Photo.find(function(err, photos) {

        if (err)
          res.send(err);
        res.json(photos);

      });
    });

    // CREATE ROUTE

    // DELETE ROUTE

    // frontend routes ===========================================================
    // route to handle angular requests

    app.get('*', function(req, res) {
      res.sendfile('./public/views/index.html'); // load public/index.html file
    });












  };