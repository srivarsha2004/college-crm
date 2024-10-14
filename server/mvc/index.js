const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const errorHandler = require("./middleWares/errorHandler");
const path=require('path')
const dotenv = require("dotenv").config({path:__dirname+'/.env'});
const nodemailer=require("nodemailer")
app.use(cors())
app.use(express.json());
app.use(cors())
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages').formatMessage;
const { getCurrentUser, userJoin, userLeave, getRoomUsers } = require('./utils/users');

const server = http.createServer(app);
const io = socketio(server,{cors:{}});



const botName = "CRM";

app.get('/',(req,res)=>{
  res.send("Hello world")
})

const attendanceRoutes = require('./routes/attendance.js')

app.use('/attendance', attendanceRoutes)

const calendarRoutes = require('./routes/calendar.js')

app.use('/calendar', calendarRoutes)

const profileRoutes = require('./routes/profile.js')

app.use('/profile', profileRoutes)

const resultRoutes = require('./routes/results.js')

app.use('/result', resultRoutes)

const departmentRoutes = require('./routes/department')

app.use('/department', departmentRoutes)

const coursesRoutes = require('./routes/courses')

app.use('/courses', coursesRoutes)

const timetableRoutes = require('./routes/timetable')

app.use('/timetables', timetableRoutes)

const stutimetableRoutes = require('./routes/stutimetable')

app.use('/stutimetables', stutimetableRoutes)

const teachtimetableRoutes = require('./routes/teachtimetable')

app.use('/teachtimetables', teachtimetableRoutes)

const studentRoutes = require('./routes/students')

app.use('/students', studentRoutes)

const paymentRoutes = require('./routes/payments')

app.use('/payments', paymentRoutes)

const mypaymentRoutes=require('./routes/mypayments')

app.use('/mypayments',mypaymentRoutes)

const myexampaymentRoutes=require('./routes/exampayments')

app.use('/exampayments',myexampaymentRoutes)

const examRoutes=require('./routes/exams')

app.use('/exams',examRoutes)

const dataRoutes=require('./routes/data')

app.use('/data',dataRoutes)

const bookRoutes=require('./routes/books')

app.use('/books',bookRoutes)

const announcementRoutes=require('./routes/announcement')

app.use('/announce',announcementRoutes)


const hallticketRoutes=require('./routes/hallticket')

app.use('/hallticket',hallticketRoutes)


const eventsRoutes=require('./routes/eventCalender')

app.use('/calenderEvents',eventsRoutes)
app.use("/api/users", require("./routes/userRoutes"));
app.use("/faculty", require("./routes/facultyRoutes"));
app.use(errorHandler);
const { validationResult } = require("express-validator");


io.on('connection', socket => {
    
  // console.log("New websocket connection");

  socket.on('joinRoom', ({ username, room }) => {

      const user = userJoin(socket.id, username, room)

      socket.join(user.room);

      // socket.emit("msg", formatMessage(botName, "sample message to check emit function of socket io!!!!"))//emitting to serve and client


      //Broadcast when user connects
      socket.broadcast.to(user.room).emit("msg", formatMessage(botName, `${user.username} has joined in the chat`));       //emitting to all the clients except sender

      //send users and room info
      io.to(user.room).emit('roomusers', {
          room: user.room,
          users: getRoomUsers(user.room)
      })
  })



  socket.on("chatmsg", message => {

      let user = getCurrentUser(socket.id);
      io.to(user.room).emit("msg", formatMessage(user.username, message));
  })


  //Runs when user disconnects
  socket.on("disconnect", () => {
      const user = userLeave(socket.id);

      if (user) {
          io.to(user.room).emit("msg", formatMessage(botName, `${user.username} has left the chat`));      //emitting to all the users

          //send users and room info
          io.to(user.room).emit('roomusers', {
              room: user.room,
              users: getRoomUsers(user.room)
          })
      }


  })


})


// app.use(express.static('public'))







server.listen(8080, () => console.log("server listening on 8080 port"))