$(document).ready(function(){
    var branch
    var semester
    var name
    var id
    var amount

    $("#sget").click(function(){
        branch=document.getElementById("exambranch").value
        semester=document.getElementById("examsemester").value
        id=JSON.parse(localStorage.getItem("student")).studentId

        name=JSON.parse(localStorage.getItem("student")).name
       
        var url="http://3.135.192.97/payments/reg"
        $.get(url,function(data,status){
            for(let i=0;i<data.length;i++)
            {
                if(data[i].studentName==name)
                {
                    if(data[i].due!=0)
                    {
                        alert("You have fee dues to clear please clear them to register for exams")
                    }
                    else{
                        var urls="http://3.135.192.97/exams/reg"
                        $.get(urls,function(data,status){
                            for(let j=0;j<data.length;j++)
                            {
                                if(data[j].branch==branch && data[j].semester==semester)
                                {
                                    amount=data[j].amount
                                    document.getElementById("examfee").style.display="block";
                                    document.getElementById("studentName").value=name
                                    document.getElementById("studentName").readOnly=true
                                    document.getElementById("studentId").value=id
                                    document.getElementById("studentId").readOnly=true
                                    document.getElementById("amount").value=data[j].amount
                                    document.getElementById("amount").readOnly=true
                                }
                            }
                        })
                     
                    }
                }
            }
            $("#pay").click(async function(){
                data12={
                    studentName:id,
                    studentName:name,
                    branch:branch,
                    semester:semester,
                    amount:amount

                }
                data12=JSON.stringify(data12)
                var url="http://3.135.192.97/exampayments/reg"
                $.ajaxSetup({
                    headers: {
                       'Content-Type': 'application/json',
                       'Accept': 'application/json'
                    }
                 });
                 alert("Exam Registration completed successfully")
                 await $.post(url, data12, function (xhr, status, responseText) {
                    
                    alert(responseText.responseText)
                 });
                 
            })
        })
    })
})