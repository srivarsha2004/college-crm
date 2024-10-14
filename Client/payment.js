$(document).ready(function(){
    var id;
    var name;
    var amt=0;
    var branch;
    var semester;
    var feetype;
    $("#gets").click(function(){
        feetype=document.getElementById("feetype").value
        branch=document.getElementById("feebranch").value
        semester=document.getElementById("feesemester").value
        name=JSON.parse(localStorage.getItem("student")).name
        var url="http://3.135.192.97/payments/reg"


        $.get(url,function(data,status){
            console.log(data)
            for(let i=0;i<data.length;i++){
                if(data[i].studentName==name){
                    id=data[i].studentId
                    amt=data[i].amount
                    $("#feeadd").append(`   <tr><td>${data[i].studentId}</td>
                    <td>${data[i].studentName}</td>
                    <td>${data[i].branch}</td>
                    <td>${data[i].semester}</td>
                    <td>${data[i].amount}</td>
                    <td>${data[i].paid}</td>
                    <td>${data[i].due}</td>
                    <td><button type="submit" onclick="accept()">Pay</button></td></tr>`)
                }
            }
            document.getElementById("feetab").style.display="block"

        })
    })
        $("#pay").click(function(){
            var studentId=id
            var studentName=name
           var date=Date.now()
            var paymenttype=feetype
            var amount=document.getElementById("amount").value
        
            amt=amt-amount
            var dat={
                studentId:studentId,
                studentName:studentName,
                branch:branch,
                semester:semester,
                date:date,
                paymenttype:paymenttype,
                amountpaid:amount,
                amt:amt
            }
       
            dat=JSON.stringify(dat)
         
            var url="http://3.135.192.97/mypayments/reg"
            $.ajaxSetup({
                headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/json'
                }
             });
             $.post(url, dat, function (xhr, status, responseText) {
                alert(responseText.responseText)
             });
            var urls="http://3.135.192.97/payments/update"
            $.ajaxSetup({
                headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/json'
                }
             });
             $.post(urls, dat, function (xhr, status, responseText) {
                alert(responseText.responseText)
                window.open("mypayments.html")

                
             });

    
       
    })
})
function accept(){
    document.getElementById("fees").style.display="block";
}