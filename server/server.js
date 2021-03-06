require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const socket = require('socket.io');


//This parses incoming requests with JSON payloads.
//Allows us to recognize Request Object as a JSON Object.
app.use(express.json())
//This parses incoming requests with JSON payloads consisting of STRINGS OR ARRAYS.
    //Allows us to recognize Request Object as a strings or arrays.
app.use(express.urlencoded({extended:true}))


//This lets our front-end at port 3000 make calls to our back-end at port 8000.
//Taking it away will result in "cors errors" when attempting your axios calls!
//This security feature is built into the browser. That's why we don't experience it in Postman.
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}))

app.use(cookieParser())


require("./config/mongoose.config")

require("./routes/workout.routes")(app)

require("./routes/user.routes")(app)

require("./routes/comment.routes")(app)


//After connecting to our port (8000), this console.log lets us know we're connected to our server.
const server = app.listen(process.env.MY_PORT, () => console.log(`You are connected to port ${process.env.MY_PORT}`))

const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
})

io.on("connection", (socket) => {
    console.log("socket.id " + socket.id);

    socket.on("Update_chat", (data) => {
        console.log("The payload: ", data);
        io.emit("Update_chat_likes", data);
    })
})