$(document).ready(function(){
    var url="http://3.135.192.97/books/reg"
    $.get(url,function(data,status){
        var row=0
        var count=0
        for(let i=0;i<data.length;i++){
        if(count%4==0){
            count=0
            row=row+1
            var rows=row.toString();
            var template=`<tr id="${rows}"></tr>`
            $("#addlib").append(template)
            var temp=`<td>
            <img src="${data[i].cover_image}" height="150" alt="">
            <p><b>${data[i].author_name}</b> <br>${data[i].publisher}<br>genre: ${data[i].genres} <br> <button data-toggle="modal" data-target="#borrowModal" style="margin-top:1%;" class="btn btn-primary" onclick="addBorrow('${data[i].book_name}') " >Borrow</button> </p>
        </td>`
        var res="#"+rows
        $(res).append(temp)
        count=count+1
        }
        else{
            count=count+1
            var temp=`<td>
            <img src="${data[i].cover_image}" height="150" alt="">
            <p><b>${data[i].author_name}</b> <br>${data[i].publisher}<br>genre: ${data[i].genres} <br> <button data-toggle="modal" data-target="#borrowModal" style="margin-top:1%;" class="btn btn-primary" onclick="addBorrow('${data[i].book_name}') " >Borrow</button> </p>
        </td>              `
        var resi="#"+rows
        $(resi).append(temp)
        }
       }
        
    })

})

function addBorrow(book_name){
    var id=JSON.parse(localStorage.getItem("student")).studentId
    // alert(id)
    dat14={
        user_id:id,
        book_name:book_name,
        borrowedDate:Date.now()
    }
    dat14=JSON.stringify(dat14)
    // alert(dat14)
    var url="http://3.135.192.97/books/borrow"
    $.ajaxSetup({
        headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        }
     });
     $.post(url, dat14, function (xhr, status, responseText){
        // alert(responseText.responseText)
     })

}