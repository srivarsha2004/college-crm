const register = document.getElementById("post");
register.addEventListener("click", () => {
    to = document.getElementById("reasons").value
    title = document.getElementById("title").value
    message = document.getElementById("message").value
   

    document.getElementById("reasons").value="";
    document.getElementById("title").value="";
    document.getElementById("message").value="";
    
    


  

   fun1(title,message)


    function fun1(title, message) {
        var data = {
            to:to,
          title: title,
          message: message
        
        };
          $.ajax({
            type: "post",
            url: "http://3.135.192.97/announce/reg",
            contentType: "application/json",
            data: JSON.stringify(data),
            xhrFields: {
              withCredentials: false,
            },
            headers: {},
            success: function (res) {
                console.log("hello")
                console.log("done")
                //res.send("done")
            },
            error: function () {
              console.log(
                "We are sorry but our servers are having an issue right now"
              );
            }
          });
        }

})