const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    title: {type: String, required: true},
    director: String, 
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

// below : user is the collection name (mongo will append a s to user => users)
const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
