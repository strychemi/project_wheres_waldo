$(document).ready(function() {
  $("#photos-show").on("click", ".tag > .delete-tag", function(e) {
    var tagId = $(e.target).parent().attr("data-tagid");
    $.ajax({
      url: "http://localhost:3000/tags/" + tagId,
      type: "DELETE",
      data: { id: tagId },
      dataType: "json",
      success: function(data) {
        tagId = data.id;
        $("[data-tagid='" + tagId + "']").remove();
      }
    });
  });
});
