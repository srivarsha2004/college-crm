const logn = document.getElementById("submit");
logn.addEventListener("click", () => {
    console.log("hello")
  facultyId = document.getElementById("facultyId").value;
  password = document.getElementById("password").value;
 
  document.getElementById("facultyId").value = "";
  document.getElementById("password").value = "";

  //localStorage.setItem('studentId', studentId);

  login(facultyId, password);})
  


 

  function login(facultyId, password) {
    var data = {
      facultyId: facultyId,
      password: password,
    };
      $.ajax({
        type: "post",
        url: "http://3.135.192.97/faculty/login",
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: {
          withCredentials: false,
        },
        headers: {},
        success: function (res) {
            console.log("hello")
            console.log(res.faculty)
          localStorage.setItem("faculty", res.faculty.facultyName);
          //  localStorage.setItem("token", res.accessToken);
           window.open("faculty_dashboard.html")
        },
        error: function () {
          console.log(
            "We are sorry but our servers are having an issue right now"
          );
        }
      });
    }
    