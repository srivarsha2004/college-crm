$(document).ready(function(){
    $("#sent1").click(function(){
        var name=document.getElementById("fac").value
        var branch="cse"
        var semester="semester4"
        var monday=[]
        var tuesday=[]
        var wednesday=[]
        var thursday=[]
        var friday=[]
        monday.push(document.getElementById("mon31").value)
        monday.push(document.getElementById("mon21").value)
        monday.push(document.getElementById("mon32").value)
        monday.push(document.getElementById("mon22").value)
        monday.push(document.getElementById("mon33").value)
        monday.push(document.getElementById("mon23").value)
        monday.push(document.getElementById("mon34").value)
        monday.push(document.getElementById("mon24").value)
        monday.push(document.getElementById("mon35").value)
        monday.push(document.getElementById("mon25").value)
        tuesday.push(document.getElementById("tue31").value)
        tuesday.push(document.getElementById("tue21").value)
        tuesday.push(document.getElementById("tue32").value)
        tuesday.push(document.getElementById("tue22").value)
        tuesday.push(document.getElementById("tue33").value) 
        tuesday.push(document.getElementById("tue23").value)
        tuesday.push(document.getElementById("tue34").value)
        tuesday.push(document.getElementById("tue24").value)
        tuesday.push(document.getElementById("tue35").value)
        tuesday.push(document.getElementById("tue25").value)
        wednesday.push(document.getElementById("wed31").value)
        wednesday.push(document.getElementById("wed21").value)
        wednesday.push(document.getElementById("wed32").value)
        wednesday.push(document.getElementById("wed22").value)
        wednesday.push(document.getElementById("wed33").value) 
        wednesday.push(document.getElementById("wed23").value)
        wednesday.push(document.getElementById("wed34").value)
        wednesday.push(document.getElementById("wed24").value)
        wednesday.push(document.getElementById("wed35").value)
        wednesday.push(document.getElementById("wed25").value)
        thursday.push(document.getElementById("thu31").value)
        thursday.push(document.getElementById("thu21").value)
        thursday.push(document.getElementById("thu32").value)
        thursday.push(document.getElementById("thu22").value)
        thursday.push(document.getElementById("thu33").value)
        thursday.push(document.getElementById("thu23").value) 
        thursday.push(document.getElementById("thu34").value)
        thursday.push(document.getElementById("thu24").value)
        thursday.push(document.getElementById("thu35").value)
        thursday.push(document.getElementById("thu25").value)
        friday.push(document.getElementById("fri31").value)
        friday.push(document.getElementById("fri21").value)
        friday.push(document.getElementById("fri32").value)
        friday.push(document.getElementById("fri22").value)
        friday.push(document.getElementById("fri33").value) 
        friday.push(document.getElementById("fri23").value)
        friday.push(document.getElementById("fri34").value)
        friday.push(document.getElementById("fri24").value)
        friday.push(document.getElementById("fri35").value)
        friday.push(document.getElementById("fri25").value)
        datatimer={
            name:name,
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
  
         datatimer=JSON.stringify(datatimer)
         var url="http://3.135.192.97/teachtimetables/reg"
         $.post(url, datatimer, function (xhr, status, responseText) {
            console.log(responseText.responseText)
         })

    })



})