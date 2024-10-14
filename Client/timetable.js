$(document).ready(function(){
    $("#get").click(async function(){
        var branch=document.getElementById("branch").value;
        var semester=document.getElementById("semester").value;
        document.getElementById("headb").innerHTML=branch.toUpperCase(),
        document.getElementById("semb").innerHTML=semester.toUpperCase()
        var url = 'http://3.135.192.97/stutimetables/reg';
    
    
      await $.get(url,function(data,status){
        for(let i=0;i<data.length;i++)
        {
            if(branch==data[i].branch && semester==data[i].semester)
            {
                document.getElementById("mon1").innerHTML=data[i].monday[0],
                document.getElementById("mon2").innerHTML=data[i].monday[1],
                document.getElementById("mon3").innerHTML=data[i].monday[2],
                document.getElementById("mon4").innerHTML=data[i].monday[3],
                document.getElementById("mon11").innerHTML=data[i].monday[0],
                document.getElementById("mon22").innerHTML=data[i].monday[1],
                document.getElementById("mon33").innerHTML=data[i].monday[2],
                document.getElementById("mon44").innerHTML=data[i].monday[3],
                document.getElementById("tue1").innerHTML=data[i].tuesday[0],
                document.getElementById("tue2").innerHTML=data[i].tuesday[1],
                document.getElementById("tue3").innerHTML=data[i].tuesday[2],
                document.getElementById("tue4").innerHTML=data[i].tuesday[3],
                document.getElementById("tue11").innerHTML=data[i].tuesday[0],
                document.getElementById("tue22").innerHTML=data[i].tuesday[1],
                document.getElementById("tue33").innerHTML=data[i].tuesday[2],
                document.getElementById("tue44").innerHTML=data[i].tuesday[3],
                document.getElementById("wed1").innerHTML=data[i].wednesday[0],
                document.getElementById("wed2").innerHTML=data[i].wednesday[1],
                document.getElementById("wed3").innerHTML=data[i].wednesday[2],
                document.getElementById("wed4").innerHTML=data[i].wednesday[3],
                document.getElementById("wed5").innerHTML=data[i].wednesday[4],
                document.getElementById("wed11").innerHTML=data[i].wednesday[0],
                document.getElementById("wed22").innerHTML=data[i].wednesday[1],
                document.getElementById("wed33").innerHTML=data[i].wednesday[2],
                document.getElementById("wed44").innerHTML=data[i].wednesday[3],
                document.getElementById("wed55").innerHTML=data[i].wednesday[4],
                document.getElementById("thu1").innerHTML=data[i].thursday[0],
                document.getElementById("thu2").innerHTML=data[i].thursday[1],
                document.getElementById("thu3").innerHTML=data[i].thursday[2],
                document.getElementById("thu4").innerHTML=data[i].thursday[3],
                document.getElementById("thu5").innerHTML=data[i].thursday[4],
                document.getElementById("thu11").innerHTML=data[i].thursday[0],
                document.getElementById("thu22").innerHTML=data[i].thursday[1],
                document.getElementById("thu33").innerHTML=data[i].thursday[2],
                document.getElementById("thu44").innerHTML=data[i].thursday[3],
                document.getElementById("thu55").innerHTML=data[i].thursday[4],
                console.log(data[i].friday[0])
                document.getElementById("fri1").innerHTML=data[i].friday[0],
                document.getElementById("fri2").innerHTML=data[i].friday[1],
                document.getElementById("fri3").innerHTML=data[i].friday[2],
                document.getElementById("fri4").innerHTML=data[i].friday[3]
                document.getElementById("fri11").innerHTML=data[i].friday[0],
                document.getElementById("fri22").innerHTML=data[i].friday[1],
                document.getElementById("fri33").innerHTML=data[i].friday[2],
                document.getElementById("fri44").innerHTML=data[i].friday[3]
            }
        }

      });
      var arr=[]
      var urlse='http://3.135.192.97/department/reg'
      await $.get(urlse,function(data1,status){
        for(let i=0;i<data1.length;i++){
            if(data1[i].departmentName==branch)
            {

                arr=data1[i][semester]
                console.log(arr);
            }
        }
      })
      console.log(arr)
      var urls='http://3.135.192.97/courses/reg'
      await $.get(urls,function(data2,status){
        for(let i=0;i<arr.length;i++)
        {
        for(let j=0;j<data2.length;j++)
        {
          if(arr[i]==data2[j].courseName)
          {
            console.log(arr[i])
               $("#teachadd").append(`<tr>
               <td>${data2[j]._id.substring((data2[j]._id.length)-7,data2[j]._id.length)}</td>
               <td>${data2[j].courseName}</td>
               <td>${data2[j].assignedTeachers}</td>
               </tr>`)

               $("#teachadd1").append(`<tr>
               <td>${data2[j]._id.substring((data2[j]._id.length)-7,data2[j]._id.length)}</td>
               <td>${data2[j].courseName}</td>
               <td>${data2[j].assignedTeachers}</td>
               </tr>`)
          }
        }
        }
      });

      document.getElementById("timest").style.display="block";
    })
})