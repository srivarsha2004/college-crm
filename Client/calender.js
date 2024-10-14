const register = document.getElementById("save");
register.addEventListener("click", () => {
    title = document.getElementById("eventTitle").value
    note = document.getElementById("eventNote").value
    type = document.getElementById("eventType").value
    start = document.getElementById("drgpicker-start").value
    end =  document.getElementById("drgpicker-end").value

    document.getElementById("eventTitle").value="";
    document.getElementById("eventNote").value="";
    document.getElementById("eventType").value="";
    document.getElementById("drgpicker-start").value="";
    document.getElementById("drgpicker-end").value="";
    


    

   fun1(title,note,type,start,end)


    function fun1(title,note,type,start,end ) {
    
        var data = {
          title: title,
          note: note,
          type:type,
          startDate:start,
          endDate : end
        };
        console.log(data)
          $.ajax({
            type: "post",
            url: "http://3.135.192.97/calenderEvents/reg",
            //http://3.135.192.97/students/reg
            contentType: "application/json",
            data: JSON.stringify(data),
            xhrFields: {
              withCredentials: false,
            },
            headers: {},
            success: function (res) {
                console.log("hello")
                console.log("done")
                //res.send("done")
            },
            error: function () {
              console.log(
                "We are sorry but our servers are having an issue right now"
              );
            }
          });
        }

})