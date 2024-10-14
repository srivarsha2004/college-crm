
$("documnet").ready(async function () {

studentId = JSON.parse(localStorage.getItem("student")).studentId
dues=[]
await $.get("http://3.135.192.97/payments/reg",function(data1,status){
      //console.log(data1[0].paid)
      //console.log("heli")
      for(i=0;i<data1.length;i++)
      {
        //console.log("heli")
        //console.log(data1[i].paid)
      if(data1[i].paid == 0)
      {
        dues.push(data1[i].studentId)
       // num = sub.indexOf(course)

      }
    }
    })
  
    console.log(dues)
$.get("http://3.135.192.97/announce/reg",function(data,status){
 console.log(data)


  for(i=0;i<data.length;i++)
  {
    if(data[i].to == "all")
 {
    template= `<div class="list-group-item bg-transparent">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="fe fe-box fe-24"></span>
                </div>
                <div class="col">
                  <small><strong>${data[i].title}</strong></small>
                  <div class="my-0 text-muted small">${data[i].message}</div>
                  
                </div>
              </div>
            </div>`;
            $("#notification").append(template)
  }
  //dues=[]
  else{
  if(data[i].to = "fee_dues")
  {
    //console.log(data[i].to)
  
    num = dues.indexOf(studentId)
    console.log(num)
    if(num>=0)
    {
      template= `<div class="list-group-item bg-transparent">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="fe fe-box fe-24"></span>
                </div>
                <div class="col">
                  <small><strong>${data[i].title}</strong></small>
                  <div class="my-0 text-muted small">${data[i].message}</div>
                  
                </div>
              </div>
            </div>`;
            $("#notification").append(template)
    }
  }
}
  
 
}


})
})
