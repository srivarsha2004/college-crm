$(document).ready(function(){
    var url="http://3.135.192.97/payments/reg"
    var name=JSON.parse(localStorage.getItem("student")).name
    $.get(url,function(data,status){
        for(let i=0;i<data.length;i++){
            if(name==data[i].studentName){

                document.getElementById("namep").innerHTML=data[i].studentName
                document.getElementById("rollp").innerHTML=data[i].studentId
                document.getElementById("brancp").innerHTML=data[i].branch
                document.getElementById("semp").innerHTML=data[i].semester.substring(data[i].semester.length-1,data[i].semester.length)
                document.getElementById("due").innerHTML=data[i].due
            }

        }
    })
    var urls="http://3.135.192.97/mypayments/reg"
    $.get(urls,function(data,status){
        console.log(data)
        for(let i=0;i<data.length;i++){
            console.log(data[i])
            if(name==data[i].studentName)
            {
                console.log(data[i].studentName)
                $("#paytab").append(`<tr>   <td>${data[i].date.substring(0,10)}</td>
                <td>${data[i].paymenttype}</td>
                <td>${data[i].branch}</td>
                <td>${data[i].semester}</td>
                <td>${data[i].amountpaid}</td>
                <td><button type="submit" onclick="recieve()">Download Receipt</button></td></tr>`)
            }
        }
    })
})

function recieve(){
    window.open("reciept.html")
}