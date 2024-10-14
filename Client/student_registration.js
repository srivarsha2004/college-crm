const register = document.getElementById("register");
register.addEventListener("click", () => {
    name1 = document.getElementById("name").value
    email = document.getElementById("email").value
    branch = document.getElementById("branch").value
    semester = document.getElementById("semester").value

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("branch").value="";
    document.getElementById("semester").value="";
    


    fun1(name1,email,branch,semester)


    function fun1(name1,email,branch,semester ) {
        var data = {
          name: name1,
          branch: branch,
          email:email,
          semester:semester
        };
          $.ajax({
            type: "post",
            url: "http://3.135.192.97/students/reg",
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