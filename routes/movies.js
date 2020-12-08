//require("./../configs/db.config");

const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model") //require MovieModel

/* GET movies page */

  router.get("/", async (req, res, next) => {
    try {
      //try to find all labels stored in labels collection
      const movies = await MovieModel.find();

      //console.log(movies);

         //if succes, send the found array as a view parameter
        res.render("movies", {movies} );  //we are ready now to loop through each label and display @view
      } catch (err) {
        //  else if error thrown by LabelModel, pass the error to the next function
        //  next() is provided by express
        //  the next will display the error on error.hbs view       
        next(err);
      }
    });

    router.get("movies/:id", async (req, res) => {
      try {
        console.log ("toto");
        //try to find all labels stored in labels collection
        const movie = await MovieModel.findById(req.params.id);

        console.log(movie);

          res.render("movie", {movie} );  //we are ready now to loop through each label and display @view
        } catch (err) {  
          res.render ("not-found");
        }
      });

module.exports = router;