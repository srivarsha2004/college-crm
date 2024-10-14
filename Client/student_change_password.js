

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    old   =   document.getElementById("old_password").value
    new_pass   =   document.getElementById("new_password").value
    studentId = JSON.parse(localStorage.getItem("student")).studentId;


    document.getElementById("old_password").value="";
    document.getElementById("new_password").value="";
 
    


    fun1(old,new_pass)


    function fun1(old,new_pass) {
        var data = {
            studentId:studentId,
          old: old,
          new_pass: new_pass
          
        };
          $.ajax({
            type: "post",
            url: "http://3.135.192.97/students/change",
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