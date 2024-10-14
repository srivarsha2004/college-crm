const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName=document.getElementById('room-name')
const userList=document.getElementById('users')


name = window.location.hash.substring(1)

username=name.split('#')[0]
room = name.split('#')[1]


const socket = io('http://3.135.192.97');

//Join chatroom
socket.emit('joinRoom',{username,room})


socket.on('roomusers',({room,users})=>{
    outputRoomName(room);
    outputUsers(users);
})


//message from server

socket.on("msg", message => {
    console.log(message);
    outputMessage(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
})


//Message submit
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    //Getting message text
    const msg = document.getElementById("msg").value;

    //Emitting message to server
    socket.emit("chatmsg", msg);

    document.getElementById("msg").value = "";
    document.getElementById("msg").focus();

})


function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`
    document.querySelector(".chat-messages").appendChild(div);
}


//Add Room name to DOM
function outputRoomName(roomname){
    roomName.innerHTML=roomname;
}

//Add users to DOM
function outputUsers(users){
    console.log(users);
    userList.innerHTML=users.username
    
}