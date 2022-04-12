const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.SchemaType({

    completion: {
        type: String, 
        enum: [
            "I completed my workout!",
            "I did some of my workout!",
            "I didn't do my workout today."
        ]
        },

    completionMessage: {
        type: String,
        minLength: [2, "You need more than 2 characters!"],
        required: [true, "Please let us know how your day and/or workout went!"]
    },

    recipeName:{
        type: String,
        minLength: [2, "The recipe name needs more than 2 characters!"]
    },

    recipeLink: {
        type: String,
        minLength: [2, "The recipe name needs more than 2 characters!"]
    },

    audioType: {
        type: String,
        enum: [
            "Playlist",
            "Song",
            "Audiobook",
            "Podcast"
        ]
    },

    audioName:{
        type: String,
        minLength: [2, "The recipe name needs more than 2 characters!"]
    },

    audioLink: {
        type: String,
        minLength: [2, "The recipe name needs more than 2 characters!"]
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
}, {timestamps: true})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;