function addTopic()
{
    var new_input= `<div class="form-group">
    <div class="row">
    <input type="text" class="form-control" placeholder="Topic Name...">
    <br><br>
    <button class="btn btn-info" onclick="addTopic()" >+</button>
</div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label>Video Link</label>
      <input type="text" class="form-control" placeholder="Video Link...">
    </div>
    <div class="form-group col-md-6">
      <label>Pdf Link</label>
      <input type="text" class="form-control" placeholder="Pdf Link...">
    </div>
  </div>`;
      $('#topictab').append(new_input);
}

function addForm()
{
    var new_form = `<div class="form-group">
    <div class="row">
    <input type="text" class="form-control" placeholder="Topic Name...">
    <br><br>
    <button class="btn btn-info" onclick="addTopic()" >+</button>
</div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label>Video Link</label>
      <input type="text" class="form-control" placeholder="Video Link...">
    </div>
    <div class="form-group col-md-6">
      <label>Pdf Link</label>
      <input type="text" class="form-control" placeholder="Pdf Link...">
    </div>
  </div>`;
      $('#topictab').append(new_form);
}