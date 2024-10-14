$(document).ready(function(){
    var url="http://3.135.192.97/mypayments/reg"
    var name=JSON.parse(localStorage.getItem("student")).name
    console.log(name)
    $.get(url,function(data,status){
        console.log(data)
        for(let i=0;i<data.length;i++){
            if(data[i].studentName==name){
                console.log(name)
                document.getElementById("stuname").innerHTML=data[i].studentName
                document.getElementById("studentid").innerHTML=data[i].studentId
                document.getElementById("course").innerHTML=data[i].branch
                document.getElementById("sem").innerHTML=data[i].semester
                document.getElementById("date").innerHTML=data[i].date.substring(0,10)
                document.getElementById("amount").innerHTML=data[i].amountpaid
                document.getElementById("tot").innerHTML="Total: Rs."+data[i].amountpaid


            }
        }
    })
})