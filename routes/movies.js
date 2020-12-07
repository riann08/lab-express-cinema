//require("./../configs/db.config");

const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model")

/* GET home page */

  router.get("/", async (req, res, next) => {
    try {
      //try to find all labels stored in labels collection
      const movies = await MovieModel.find();
         //if succes, send the found array as a view parameter
        res.render("movies", {movies} );  //we are ready now to loop through each label and display @view
      } catch (err) {
        //  else if error thrown by LabelModel, pass the error to the next function
        //  next() is provided by express
        //  the next will display the error on error.hbs view       
        next(err);
      }
    });

module.exports = router;