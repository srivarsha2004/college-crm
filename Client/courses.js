$("documnet").ready(async function () {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('token',localStorage.getItem('token'));
        }
    });
    console.log("hello")
    branch=JSON.parse(localStorage.getItem("student")).branch;
    semester = JSON.parse(localStorage.getItem("student")).semester;
    console.log(branch)


    var sub
    await $.get("http://3.135.192.97/department/reg", function (data) {
        
        //console.log(data)
        //console.log("hey")
        for(i=0;i<data.length;i++)
        {
            console.log("bye")
            //console.log(data[0])
            if(data[i].departmentName == branch)
            {
               // console.log(data)
            sub = data[i][semester];
            
            }
        }

       
        // parent = document.getElementById("parent");
        // places_card = data;
        // for (i = 0; i < places_card.length; i++) {
        //   let templateString =
        //     '<div class="col-lg-4 my-3 col-md-6 d-flex align-items-stretch"><div class="card shadow-sm"><img src=' +
        //     places_card[i].imgSrc +
        //     ' alt="cg"><rect width="100%" height="100%" fill="#55595c"/><div class="card-body height" style="background-color: white;"><h3 style="color: black;">' +
        //     places_card[i].Destination +
        //     "</h3>" +
        //     '<p class="card-text1" style="color: black;">' +
        //     places_card[i].Description.substring(0, 100) +
        //     " ..." +
        //     "</p>" +
        //     '<div class="d-flex justify-content-between align-items-center">' +
        //     '<div class="btn-group">' +
        //     '<button type="button" class="btn btn-sm btn-outline-secondary" style="background-color: #28a745; color: white;" onclick="show_place(this)">View</button>' +
        //     "</div>" +
        //     '<small class="text-muted"></small>' +
        //     "</div>" +
        //     "</div>" +
        //     "</div>" +
        //     "</div>";
        //   parent.innerHTML = parent.innerHTML + templateString;
        // }
      });
      console.log("ghsaku")
      console.log(sub)
     // card = document.getElementById("cards")
      await $.get("http://3.135.192.97/courses/reg", function (data) {
        
        //console.log(data)
        //console.log("hey")
        var colors = ["blue", "green", "yellow", "brown", "purple","orange"]
        //console.log(colors[0])
        x =0;
        for(i=0;i<data.length;i++)
        {
            course = data[i].courseName
            console.log(course)
        
            num = sub.indexOf(course)
           // console.log(colors[i])
            //console.log(data[0])
            //curriculum
            //console.log( data[0].curriculum[0])
           
          if(num>=0)
          {
            
            templateString = '<div class="col-md-4 col-sm-6 content-card">'+
            '<div class="card-big-shadow">'+
                '<div class="card card-just-text" data-background="color" data-color='+
                colors[x]+
                ' data-radius="none">'+
                    '<div class="content">'+
                        '<h6 class="category">'+
                        '</h6>'+
                        '<h4 class="title"><a href="curriculum.html#'+
                        data[i].courseName+
                        '">'+
                        data[i].courseName+
                        '</a></h4>'+
                        '<p class="description"><a href = "curriculum.html#'+
                        data[i].courseName+
                        '">'+
                    
                        '</a></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';
        x++;
            
        $("#cards").append(templateString);
        console.log(course)
          }
        }
    })


      







    });