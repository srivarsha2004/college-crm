$(document).ready(function(){
    $("#send").click(function(){

    var images
    var img=document.getElementById("image")
    var fd = new FormData();
    fd.append("files", img.files[0]);
    // alert(img.files[0])
    $.ajax({
      type: "post",
      url: "http://3.135.192.97/books/update",
      enctype: "multipart/form-data",
      contentType: false,
      processData: false,
      data: fd,
      xhrFields: {
        withCredentials: false,
      },
      headers: {},
      success: function (res) {
        images=res
        // alert(images)
    var book_name = $("#book-name").val();
    var genres = $("#example-select").val();
    var price= $("#price").val();
    var author_name= $("#author-name").val();
    var publisher = $("#publisher").val();
    var quantity = $("#quant").val();

    var dat13={
      book_name:book_name,
      cover_image:images,
      genres:genres,
      price:price,
      author_name:author_name,
      publisher:publisher,
      quantity:quantity
    }

    dat13=JSON.stringify(dat13)
    var url="http://3.135.192.97/books/reg"
    $.ajaxSetup({
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   });
   $.post(url, dat13, function (xhr, status, responseText){
    // alert(responseText.responseText)

   })
}
    })
})
})