$.ajaxSetup({
    beforeSend: function (xhr) {
      xhr.setRequestHeader("token", localStorage.getItem("token"));
    },
  });

  k = window.location.hash;
  console.log(k)
subject = k.substring(1);
console.log(subject)

cou = document.getElementById("cou");
//console.log(cou)

$.get("http://3.135.192.97/courses/reg", function(data,status){

 
  for(i=0;i<data.length;i++)
  {
    if(data[i].courseName==subject)
    {
      document.getElementById("unitName").innerHTML=data[i].courseName
      console.log(data[i].curriculum.length)

      for(let j=0;j<data[i].curriculum.length;j++){
        console.log(data[i].curriculum[j].unitName)
        var template=`     <div class="accordion w-100" id="accordion1">
        <div class="card shadow">
          <div class="card-header" id="heading1">
            <a role="button" href="#collapse1" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
              <strong id="unit1">${data[i].curriculum[j].unitName}</strong>
            </a>
          </div>
          <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#accordion1">
            <div class="card-body">
                <ul>
                    <li> <b>${data[i].curriculum[j].topics[0].topicName}</b> 
                        <ul>
                            <li>${data[i].curriculum[j].topics[0].description}</li>
                        </ul>
                        <li><b>${data[i].curriculum[j].topics[1].topicName}</b>
                        <ul>
                            <li>${data[i].curriculum[j].topics[1].description}</li>
                        </ul>
                        </li>

                        
                    </li>
                </ul>
                
                    <div class="col-md-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AYauVQ9W9T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-md-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EZ3IZg3Jeys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <p><b>Notes</b></p>
                        <ul>
                            <li><a href="${data[i].curriculum[j].topics[0].pdf}">Threads</a></li>
                            <li><a href="${data[i].curriculum[j].topics[1].pdf}">Threads</a></li>
      
                        </ul>
                    </div>
                    </div>

                        
            </div>
          </div>
        </div>`
        $("#unit").append(template)
      }
      
            console.log(data[i])
        
    }
  }
});