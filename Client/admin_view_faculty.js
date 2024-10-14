$(document).ready(function(){
    console.log("he")

   // $.get("http://localhost:8080/courses/reg", function(data){
    var url="http://3.135.192.97/faculty/reg"
    $.get(url,function(data){
      console.log("hello")
        console.log(data)
        for(let i=0;i<data.length;i++)
        {
          console.log(data)
        $("#views").append(`    <tr>
        <td>${data[i].facultyId}</td>
        <td>${data[i].facultyName}</td>
        <td>${data[i].email}</td>
        <td>${data[i].branch}</td>
       
      </tr>`)
        }
        $("#dataTable1").DataTable();
    })
})