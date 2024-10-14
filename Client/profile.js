// var loadFile = function (event) {
//     var image = document.getElementById("output");
//     image.src = URL.createObjectURL(event.target.files[0]);
//   };
$(document).ready(function(){
  var name=JSON.parse(localStorage.getItem("student")).name
  var rollnumber=JSON.parse(localStorage.getItem("student")).studentId
  var department=JSON.parse(localStorage.getItem("student")).branch
  var email=JSON.parse(localStorage.getItem("student")).email
  document.getElementById("name").innerHTML=name
  document.getElementById("roll").innerHTML=rollnumber
  document.getElementById("dept").innerHTML=department
  document.getElementById("email").innerHTML=email
  document.getElementById("nametop").innerHTML=name
  var urlse="http://3.135.192.97/profile/find"
  dat123={email:email}
  dat123=JSON.stringify(dat123)
  $.ajaxSetup({
    headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
    }
 });
 $.post(urlse, dat123, function (xhr, status, responseText){
    data1=JSON.parse(responseText.responseText)
    if(responseText.responseText!="0")
    {
      localStorage.setItem("images",data1[0].img)
      document.getElementById("source").src=data1[0].img
      document.getElementById("output").src=data1[0].img
      document.getElementById("contacta").value=data1[0].contact
      document.getElementById("contacta").readOnly=true
      document.getElementById("dob").value=data1[0].dob
      document.getElementById("dob").readOnly=true
      document.getElementById("gender").value=data1[0].gender
      document.getElementById("gender").readOnly=true
      document.getElementById("address").value=data1[0].address
      document.getElementById("address").readOnly=true
      document.getElementById("gname").value=data1[0].guardian_name
      document.getElementById("gname").readOnly=true
      document.getElementById("gcontact").value=data1[0].guardian_contact
      document.getElementById("gcontact").readOnly=true
      document.getElementById("exam").value=data1[0].exam_name
      document.getElementById("exam").readOnly=true
      document.getElementById("examrank").value=data1[0].rank
      document.getElementById("examrank").readOnly=true
    }
  })
  $("#submit-details").click(() =>
  {

    var image
    var img=document.getElementById("file")
    var fd = new FormData();
    fd.append("file1", img.files[0]);
    // alert(img.files[0])
    $.ajax({
      type: "post",
      url: "http://3.135.192.97/profile/upload",
      enctype: "multipart/form-data",
      contentType: false,
      processData: false,
      data: fd,
      xhrFields: {
        withCredentials: false,
      },
      headers: {},
      success: function (res) {
        image=res
        // alert(image)
   localStorage.setItem("images",image)
    var contact = $("#contacta").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var address = $("#address").val();
    var guardian_name = $("#gname").val();
    var guardian_contact = $("#gcontact").val();
    var exam_name= $("#exam").val();
    var rank = $("#examrank").val();

    var dat12={
      name:name,
      rollnumber:rollnumber,
      department:department,
      email:email,
      img:image,
      contact:contact,
      dob:dob,
      gender:gender,
      address:address,
      guardian_name:guardian_name,
      guardian_contact:guardian_contact,
      exam_name:exam_name,
      rank:rank
    }

    dat12=JSON.stringify(dat12)
    var url="http://3.135.192.97/profile/reg"
    $.ajaxSetup({
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   });
   $.post(url, dat12, function (xhr, status, responsnseText){
    // alert(responsnseText.responsnseText)

   })
  }
})
    
  })
  $("#edit").click(function(){

    document.getElementById("contacta").readOnly=false
    document.getElementById("dob").readOnly=false
    document.getElementById("gender").readOnly=false
    document.getElementById("address").readOnly=false
    document.getElementById("gname").readOnly=false
    document.getElementById("gcontact").readOnly=false
    document.getElementById("exam").readOnly=false
    document.getElementById("examrank").readOnly=false
  })
})




