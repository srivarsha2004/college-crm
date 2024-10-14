$(document).ready(function(){
    $("#timeget").click(function(){
        var branch=document.getElementById("timebranch").value
        var semester=document.getElementById("timesemester").value
        var numberOfPeriods=document.getElementById("periods").value
        var time=document.getElementById("timings").value.split(",")
        var arr=[]
        for(let i=0;i<time.length;i++)
        {
            arr.push(time[i])
        }
        var data21={
            branch:branch,
            semester:semester,
            numberOfPeriods:numberOfPeriods,
            start:arr
        }
        data21=JSON.stringify(data21)
        var url="http://3.135.192.97/data/reg"
        $.ajaxSetup({
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            }
         });
        $.post(url, data21, function (xhr, status, responseText) {
            alert(responseText.responseText)
        });
    })
})