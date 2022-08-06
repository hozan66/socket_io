// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
// let updatedRoomName;
// app.use(cors());

// let active=[];
// const server = http.createServer(app);
//  let d=[];
// const io = new Server(server, {
//   cors: {
//     origin: "http://10.0.2.2:3001",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log('Backend connected!');
//  // console.log(User Connected: ${socket.id});
     
//   socket.on("join_room", (data) => {
//     socket.join(data);
// //    console.log(User with ID: ${socket.id} joined room: ${data});
//   });
//   socket.on("setActive", (data) => {
//     active.push({username:data.username,id:socket.id}) 
//   });
//   socket.on('join', room => {
//      updatedRoomName =room; // 'username1--with--username2'
//    //  console.log(User with ID: ${socket.id} joined room: ${room});

//      socket.join(room);})
  
//   socket.on("Actives", (data) => {
//    // d.push({username:data.username,room:data.room,id:socket.id})
//     let G=active.filter((i)=>i.username==data.username)
//   //  socket.emit("receive_id", G );
// if(G.length==0){
//   G=false
// }else G=true;
//     socket.emit("receive_Active", G );
//   })
//   socket.on("delete_message",(data)=>{
//     socket.to(data.room).emit("after_delete",data);
//   })
//   socket.on("update_message",(data)=>{
//     socket.to(data.room).emit("after_update",data.messageList);
//   })

//   socket.on("send_message", (data) => {
//     console.log("on send message :",updatedRoomName)
//         socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     active=active.filter(i=>i.id!=socket.id)
//   //  console.log("User Disconnected", socket.id);
//   });
// });

// server.listen(3001, () => {
//   console.log("SERVER RUNNING 3001");
// });