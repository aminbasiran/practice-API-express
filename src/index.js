const express = require("express");
const v1Router = require("./v1/routes/workoutRoutes") 
const bodyParser = require("body-parser");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json())
// For testing purposes 


app.use("/api/v1/workouts", v1Router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
    V1SwaggerDocs(app,PORT)
});