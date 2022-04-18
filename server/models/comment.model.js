const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({

    comment: {
        type: String,
        minLength: [2, "You need more than 2 characters"],
        required: [true, "Let is know your thoughts!"]
    },

    likes: {
        type: Number,
        default: 0
    },

    associatedWorkout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout"
    },

    createdBy: {
        type: String
    }

}, {timestamps: true})

module.exports = mongoose.model("Comment", CommentSchema);