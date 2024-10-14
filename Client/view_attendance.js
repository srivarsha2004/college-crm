$(document).ready(function(){
    var url="http://3.135.192.97/attendance/reg"
    $.get(url,function(data,status){
        var total=0
        var present=0
        var id=JSON.parse(localStorage.getItem("student")).studentId
        for(let i=0;i<data.length;i++)
        {
            if(data[i].rollNumber==id){
                var template=`       <tr>
                <td>${data[i].date}</td>`
                var temp=``
                for(let j=0;j<data[i].sub.length;j++)
                {
                    total=total+1
                    if(data[i].sub[j]){
                        present=present+1
                        temp=temp+`<td>Present</td>`
                    }
                    else{
               
                temp=temp+`<td>Absent</td>`
                    }
                }

       
              template=template+temp+`</tr>`

              $("#viewattend").append(template)
            }
        }
        $("#dataTable-3").DataTable();
        document.getElementById("present").innerHTML=present
        document.getElementById("total").innerHTML="out of "+total.toString()
        document.getElementById("percent").innerHTML=(present/total)*100+"%"
        var percent=(present/total)*100
        if(percent<75)
        {
            document.getElementById("attend").innerHTML="You are about to detain improve your attendance"
        }
        else if(percent>=75 && percent<80)
        {
            document.getElementById("attend").innerHTML="you have adequate attendance improve more"   
        }
        else {
            document.getElementById("attend").innerHTML="Your attendance is good please maintain it"
        }
    

    })
})