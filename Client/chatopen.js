$(document).ready(function(){
   
    $("#joinchat").click(function(){
    
        var name=document.getElementById("username").value
        var room=document.getElementById("room").value
    
        var link="chat.html"+"#"+name+"#"+room
        window.open(link)
            })
})