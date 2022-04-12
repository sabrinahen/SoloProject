const WorkoutController = require("../controllers/workout.controller");
const {authenticate} = require("../config/jwt.config")

module.exports=(app)=> {

    app.get("/api/workouts", WorkoutController.findAllWorkouts);

    app.post("/api/workouts", authenticate, WorkoutController.createNewWorkout);

    app.get("/api/workouts/:id", WorkoutController.findOneWorkout);

    app.get("/api/workoutsbyuser/:username", authenticate, WorkoutController.findAllWorkoutsByUser);

    app.delete("/api/workouts/:id", WorkoutController.deleteOneWorkout);

    app.put("/api/workouts/:id", WorkoutController.updateWorkout);
}