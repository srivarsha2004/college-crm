$(document).ready(function(){
    $("#sent").click(function(){
        var branch=document.getElementById("branc").value
        var semester=document.getElementById("sem").value
        var monday=[]
        var tuesday=[]
        var wednesday=[]
        var thursday=[]
        var friday=[]
        monday.push(document.getElementById("mon1").value)
        monday.push(document.getElementById("mon2").value)
        monday.push(document.getElementById("mon3").value) 
        monday.push(document.getElementById("mon4").value)
        monday.push(document.getElementById("mon5").value)
        tuesday.push(document.getElementById("tue1").value)
        tuesday.push(document.getElementById("tue2").value)
        tuesday.push(document.getElementById("tue3").value) 
        tuesday.push(document.getElementById("tue4").value)
        tuesday.push(document.getElementById("tue5").value)
        wednesday.push(document.getElementById("wed1").value)
        wednesday.push(document.getElementById("wed2").value)
        wednesday.push(document.getElementById("wed3").value) 
        wednesday.push(document.getElementById("wed4").value)
        wednesday.push(document.getElementById("wed5").value)
        thursday.push(document.getElementById("thu1").value)
        thursday.push(document.getElementById("thu2").value)
        thursday.push(document.getElementById("thu3").value) 
        thursday.push(document.getElementById("thu4").value)
        thursday.push(document.getElementById("thu5").value)
        friday.push(document.getElementById("fri1").value)
        friday.push(document.getElementById("fri2").value)
        friday.push(document.getElementById("fri3").value) 
        friday.push(document.getElementById("fri4").value)
        friday.push(document.getElementById("fri5").value)
        datatimes={
            branch:branch,
            semester:semester,
            monday:monday,
            tuesday:tuesday,
            wednesday:wednesday,
            thursday:thursday,
            friday:friday
        }

        $.ajaxSetup({
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            }
         });
  
         datatimes=JSON.stringify(datatimes)
         var url="http://3.135.192.97/stutimetables/reg"
         $.post(url, datatimes, function (xhr, status, responseText) {
            console.log(responseText.responseText)
         })

    })



})