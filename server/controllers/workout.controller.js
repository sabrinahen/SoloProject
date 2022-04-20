const Workout = require("../models/workout.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Comment = require("../models/comment.model")

var populateQuery = [{path:'comments', select:'comment likes createdBy associatedWorkout'}, {path:'createdBy', select:'username email'} ];

module.exports = {

    createNewWorkout: (req, res)=> {
        const newWorkoutObject = new Workout(req.body);

        const decodedJWT = jwt.decode(req.cookies.usertoken,{
            complete:true
        })

        newWorkoutObject.createdBy = decodedJWT.payload.id;

        newWorkoutObject.save()

                .then((newWorkout)=>{
                    console.log(newWorkout);
                    res.json(newWorkout);
                })
                .catch((err)=>{
                    console.log("Something went wrong in createNewWorkout");
                    res.status(400).json(err)
                })
    },

    findAllWorkouts: (req, res)=>{
        Workout.find()
            // .populate("createdBy", "username email")
            .populate(populateQuery)
            .then((allWorkouts)=>{
                console.log(allWorkouts);
                res.json(allWorkouts);
            })
            .catch((err)=>{
                console.log("findAllWorkouts has failed!");
                res.json({ message: "Something went wrong in findAll", error: err })
            })
    },

    findOneWorkout: (req, res)=>{
        Workout.findOne({ _id: req.params.id })
        .populate(populateQuery)
        // .populate("createdBy")
            .then((oneWorkout)=>{
                console.log(oneWorkout);
                res.json(oneWorkout);
            })
            .catch((err)=>{
                console.log("Find One Workout failed");
                res.json({ message: "Something went wrong in findOneWorkout", error: err })
            })
    },

    updateWorkout: (req, res)=> {
        Workout.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            // .populate("createdBy", "username email")
            .populate(populateQuery)
            .then((updatedWorkout)=>{
                console.log(updatedWorkout)
                res.json(updatedWorkout)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateWorkout");
                res.status(400).json(err)
            })
    },

    deleteOneWorkout: (req, res)=>{
        Workout.deleteOne({_id: req.params.id})
            .then((deletedWorkout)=>{
                console.log(deletedWorkout);
                res.json(deletedWorkout);
            })
            .catch((err)=>{
                console.log("deleteOnWorkout has failed!");
                res.json({message: "Something went wrong with deleteOneWorkout", error: err})
            })
    },

    findAllWorkoutsByUser: (req, res)=>{

        if(req.jwtpayload.username !== req.params.username){
            console.log("not the user");

            User.findOne({username: req.params.username})
                .then((userNotLoggedIn)=>{
                    Workout.find({createdBy: userNotLoggedIn._id})
                        .populate("createdBy", "username")
                        .then((allWorkoutsFromUser)=>{
                            console.log(allWorkoutsFromUser);
                            res.json(allWorkoutsFromUser);
                        })
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        }

        else{
            console.log("current user")
            console.log("req.jwtpayload.id:", req.jwtpayload.id);
            Workout.find({ createdBy: req.jwtpayload.id })
                .populate("createdBy", "username")
                .then((allWorkoutsFromLoggedInUser) => {
                    console.log(allWorkoutsFromLoggedInUser);
                    res.json(allWorkoutsFromLoggedInUser);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                })
        }

    },

    likeWorkout: (req, res) => {
        Workout.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((likeAdded) => {
                res.json(likeAdded)
            })
            .catch((err) => {
                res.status(400).json(err); //See above
            })
    }

}