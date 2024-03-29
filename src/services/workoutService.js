const Workout = require("../database/Workout")
const { v4: uuid } = require("uuid");


const getAllWorkouts = (filterParams) => {
    const allWorkouts = Workout.getAllWorkouts(filterParams)
    return allWorkouts
};

const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
};

const createNewWorkout = (x) => {
    const workoutToInsert = {
        ...x,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    
    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } 
    
    catch (error) {
        throw error;
    }
    
};

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};