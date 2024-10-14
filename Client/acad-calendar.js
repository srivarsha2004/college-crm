$(document).ready(()=>{
    $("#go").click(()=>{
        sem = $("#sem").val();
        console.log("hello")
        $.get("http://3.135.192.97/calendar/reg", function (data)
        {
            console.log(data)
            for(i = 0; i < data.length; i++)
            {
                console.log("hello")
                if(data[i].semester == 1)
                { 
                    console.log("hello")
                    console.log(data[i].event)

                for( j = 0; j < data[i].event.length; j++)
                {
                    t = `<tr>
                    <td>${data[i].date[j]}</td>
                    <td>${data[i].event[j]}</td>
                </tr>`

                $("#eventbody").append(t);
                }
               
            }
            }

        })
    }
    )
}
)