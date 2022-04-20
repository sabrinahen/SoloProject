const Workout = require("../models/workout.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Comment = require("../models/comment.model");

module.exports = {
//     createComment: (req, res)=> {
//         const newCommentObject = new Comment(req.body);

//         const decodedJWT = jwt.decode(req.cookies.usertoken,{
//             complete:true
//         })

//         newCommentObject.createdBy = decodedJWT.payload.id;

//         newCommentObject.save()

//                 .then((newComment)=>{
//                     console.log(newComment);
//                     res.json(newComment);
//                 })
//                 .catch((err)=>{
//                     console.log("Something went wrong in createNewComment");
//                     res.status(400).json(err)
//                 })
//     },

    createNewComment:  (req, res)=>{

        console.log("!!!!!!!!!!!")
        console.log(req.body)
        const {associatedWorkout} = req.body
        Comment.create(req.body)
            .then((commentPosted)=>{
                console.log(commentPosted);
                // const workout = Workout.findOne({_id: req.params.id})
                // workout.comments.push(commentPosted)
                // workout.save()
                console.log('================')
                // console.log(workout)
                // console.log(req.params.id)
                // Workout.findOne({_id: req.params.id}).then(returnedWorkout => console.log(returnedWorkout))
                Workout.findOneAndUpdate({_id: associatedWorkout},
                    {
                        $push: {comments: commentPosted._id}
                    },
                    {
                        new: true,
                        useFindAndModify: true
                    })
                    .populate("comments", "comment _id")
                    .then((workoutToUpdate)=>{
                        console.log(workoutToUpdate);
                        res.json(commentPosted)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            })
            .catch((err)=>{
                console.log(err)
            })
    },

    findAllComments: (req, res) => { 
        Comment.find()
            .then((allComments) => {
                console.log(allComments);
                res.json(allComments);
            })
            .catch((err) => {
                console.log("Find All Comments failed");
                res.json({ message: "Something went wrong in findAll", error: err })
            })
    },

    likeComment: (req, res) => {
        Comment.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .populate("associatedWorkout", "_id")
            .then((likeAdded) => {
                res.json(likeAdded)
            })
            .catch((err) => {
                res.status(400).json(err); //See above
            })
    }

}