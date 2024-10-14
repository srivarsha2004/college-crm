$(document).ready(function(){
    var url="http://3.135.192.97/books/getborrow"
    $.get(url,function(data,status){
        for(let i=0;i<data.length;i++){
            
            $("#libadd1").append(`<tr>
            <td>${data[i].user_id}</td>
            <td>${data[i].book_name}</td>
            <td>${data[i].borrowedDate.substring(0,10)}</td>
            <td>${data[i].borrowedDate.substring(0,8)+(parseFloat(data[i].borrowedDate.substring(8,10))+7).toString()}</td>
            <td><input type="button" value="Return" onclick="borrow('${data[i].book_name}')"></td>
            </tr>`)
        }
    })
})

function borrow(book_name){

    var id=JSON.parse(localStorage.getItem("student")).studentId
    // alert(id)
    dat15={
        user_id:id,
        book_name:book_name,
        returnedDate:Date.now()
    }
    dat15=JSON.stringify(dat15)
    // alert(dat15)
    var url="http://3.135.192.97/books/return"
    $.ajaxSetup({
        headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        }
     });
     $.post(url, dat15, function (xhr, status, responseText){
        // alert(responseText.responseText)
     })
}