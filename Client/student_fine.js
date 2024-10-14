$(document).ready(function(){
    var url="http://3.135.192.97/books/payfine"
    $.get(url,function(data,status){
        for(let i=0;i<data.length;i++){
            
            $("#libadd3").append(`<tr>
            <td>${data[i].user_id}</td>
            <td>${data[i].book_name}</td>
            <td><input type="button" value="Return" onclick="pay('${data[i].book_name}')"></td>
            </tr>`)
        }
    })
})

function borrow(book_name){

    var id=JSON.parse(localStorage.getItem("student")).studentId
    alert(id)
    dat16={
        user_id:id,
        book_name:book_name,
        paidDate:Date.now()
    }
    dat16=JSON.stringify(dat16)
    alert(dat16)
    var url="http://3.135.192.97/books/payfine"
    $.ajaxSetup({
        headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        }
     });
     $.post(url, dat16, function (xhr, status, responseText){
        alert(responseText.responseText)
     })
}