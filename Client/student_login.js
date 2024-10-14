const logn = document.getElementById("submit");
logn.addEventListener("click", () => {

    console.log("hello")
  studentId = document.getElementById("studentId").value;
  password = document.getElementById("password").value;


 
  document.getElementById("studentId").value = "";
  document.getElementById("password").value = "";

  //localStorage.setItem('studentId', studentId);

  if(studentId=="admin" && password=="admin123")
  {
    window.open("admin_dashboard.html")
  }
  else{login(studentId, password);}

  
})

  
  


 

  function login(studentId, password) {
    var data = {
      studentId: studentId,
      password: password,
    };
      $.ajax({
        type: "post",
        url: "http://3.135.192.97/students/login",
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: {
          withCredentials: false,
        },
        headers: {},
        success: function (res) {
            console.log("hello")
            localStorage.setItem("student", JSON.stringify(res.user));
            localStorage.setItem("token", res.token);
            window.open("student_dashboard.html")
        },
        error: function () {
          console.log(
            "We are sorry but our servers are having an issue right now"
          );
        }
      });
    
    }
    