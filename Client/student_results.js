$("#sub1").click(() => {
   // console.log("hii")
    sem = document.getElementById("sem").value;
    //console.log(sem)



  
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('token',localStorage.getItem('token'));
        }
    });


    console.log("hello")
    rollNo = JSON.parse(localStorage.getItem("student")).studentId;
    console.log(rollNo)
  //student = localStorage.getItem('student.studentId');
  //studentId = student.studentId
  //console.log(student)
  


  $.get(
    `http://3.135.192.97/result/getResults/${rollNo}`,
    function (data) {
     console.log(data);
      for (i = 0; i < data.length; i++) {
        console.log("hello")
        if(data[i].semester==sem)
        //console.log(semester)
        {
        templateString =
        
                '<tr>'+
					'<td>'+
                    data[i].subjectName +
                    '</td>'+
					'<td>'+
                    data[i].marks+
                    '</td>'+
					'<td>100</td>'+
					'<td>'+
                    data[i].percentage+
                    '%</td>'+
					'<td class="grade-b">'+
                    data[i].grade+
                    '</td>'+
				'</tr>';
			
			
       
    
        $("#results").append(templateString);
        }
      }
    }
  );
})