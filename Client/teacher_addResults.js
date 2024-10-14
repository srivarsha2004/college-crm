const que = document.getElementById("submit");
var semester
var branch
$("#go").click(function(){
  branch=document.getElementById("branch").value
  semester=document.getElementById("sem").value

  var url="http://3.135.192.97/students/reg"
  $.get(url,function(data,status){
    for(let i=0;i<data.length;i++){

      if(data[i].branch==branch && data[i].semester==semester){
    
        var temp=`<option value="${data[i].studentId}">${data[i].studentId}</option>`
        $("#student_id").append(temp)
      }
    }
  })
  document.getElementById("form").style.display="block"
})
que.addEventListener("click", () => {
    console.log("hello")
  studentId = document.getElementById("student_id").value;
  subjectName = document.getElementById("subject").value;
  marks = document.getElementById("marks").value;
  percentage =  marks;
  grade = document.getElementById("grade").value;
  document.getElementById("student_id").value = "";
  document.getElementById("sem").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("grade").value = "";

  data = {
    studentId: studentId,
    semester: semester,
    subjectName: subjectName,
    marks: marks,
    percentage: percentage,
    grade:grade
  };
  obj1 = JSON.stringify(data);
 
  // $.post("http://localhost:3008/queries/res",data,
  // function(result)
  // {
  //   console.log(result)
  // });
  $.ajax({
    type: "post",
    url: "http://3.135.192.97/result/postResults",
    contentType: "application/json",
    data: JSON.stringify(data),
    xhrFields: {
      withCredentials: false,
    },
    headers: {},
    success: function (res) {
      console.log(res);
    },
    error: function () {
      console.log("We are sorry but our servers are having an issue right now");
    },
  });

  /*var xhttp=new XMLHttpRequest()
  xhttp.open("POST","http://localhost:3008/queries",true)
  xhttp.setRequestHeader("content-type","application/json")
  xhttp.onreadystatechange=function(){

      if(this.readyState==4)
      {
          var response=this.responseText
          console.log(response)
      }
  }
  xhttp.send(obj1)*/
});