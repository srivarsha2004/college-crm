
var branch
var sem
var subj=[]
$("#go").click(() => {
    
    branch =document.getElementById("branch").value;
    sem = document.getElementById("sem").value;

   // document.getElementById("branch")="";
    //document.getElementById("semester")="";


    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('token',localStorage.getItem('token'));
        }
    });
    //console.log(branch)
    $.get(`http://3.135.192.97/department/reg`,function (data) {
        console.log(data)

            for(i=0;i<data.length;i++)
            {
               // console.log(branch)
                if(data[i].departmentName==branch)
                {
                   // console.log("hiii")
                    //console.log(sem)
                    console.log(data[i][sem])
                    break;

                }
            }
            //console.log(i)
            //console.log(data[i][sem])
            subj = data[i][sem]
            for(j=0;j<data[i][sem].length;j++)
            {
                console.log("sayui")
                template = ` <div class="col-md-6">
                <div class="form-group mb-3">
                    <label for="example-select">Subject</label>
                    <select class="form-control" id="subject">
                      <option id="${subj[j]}" value = ${subj[j]}>${subj[j]}</option>
                     
                    </select>
                  </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-3">
                <label for="example-email">Date</label>
                <input type="date" id="${subj[j]}date" name="doe" class="form-control" placeholder="Date Of Exam">
            </div>
              </div>` ;
               $("#display").append(template);
            }
            
    })
    $("#submit1").click(function(){
        subject=[]
        for(let i=0;i<subj.length;i++){
            val=subj[i]
            vald=subj[i]+"date"
            name=document.getElementById(val).value
            date=document.getElementById(vald).value
            var sets={
                name:name,
                date:date
            }
            subject.push(sets)
        }
        var dat18={
            semester:sem,
            branch:branch,
            subjects:subject
        }
     
        dat18=JSON.stringify(dat18)
        var url="http://3.135.192.97/hallticket/reg"
        $.ajaxSetup({
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            }
         });
         $.post(url, dat18, function (xhr, status, responseText){
            alert(responseText.responseText)
         })
    })

})