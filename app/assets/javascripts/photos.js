var displayTarget = function() {
  $('.target').addClass("active searching");
};

var hideTarget = function() {
  $('.target').removeClass("active searching");
};

var animateDropdown = function() {
  $('.dropdown').slideDown();
};

var hideDropdown = function() {
  $('.dropdown').slideUp();
};

function Tag(x, y, name) {
  var self = this;
  this.x = x;
  this.y = y;

  //this.html = $("<tag></tag>");
  this.html = $('#tag-prototype').clone().removeAttr('id');

  $('#photos-show').append(this.html);
  this.html.show();
  //this.html.addClass('faded');
  this.html.find('.tagged-name').html(name);
  this.html.css({
    left: x,
    top: y
  });
  this.html.find('.delete-tag').click(function() {
    self.html.fadeOut();
  });
}


$(document).ready(function() {

  var charactersList = $(".data-character");

  if ($('#photos-show').length) {

    $('#waldo-photo').hover(displayTarget, hideTarget);

    // make sure cursor is in the center of tagging box
    $('#waldo-photo').on('mousemove', function(e) {
      // make the box float on mouse move
      if ($(this).hasClass('searching')) {
        $('.target').css({
          left: e.pageX - 20,
          top: e.pageY - 20
        });
      }
    });

    // if you click, stop the box from moving
    $('#waldo-photo').click(function() {
      if ($(this).hasClass('searching')) {
        $(this).removeClass('searching');
        $('.target').addClass('clicked');
        animateDropdown();
      } else {
        $(this).addClass('searching');
        $('.target').removeClass('clicked');
        hideDropdown();
      }
    });

    $(".button_to").on("click", function(e) {
      e.preventDefault();
      var $el = $(e.target);
      $.post({
        url: "/tags",
        dataType: "script",
        data: { tag: { character_id: $el.attr("data-character"), photo_id: 1, x: e.pageX, y: e.pageY } },
        success: function(data) {

          var name = $el.attr("value");
          var position = $(".target").position();
          var tag = new Tag(position.left, position.top, name);
          $('#waldo-photo').addClass('searching');
          $('.target').removeClass('clicked');
          hideDropdown();

        },
        error: function(xhr, status, errorThrown) {
          console.log("Error: " + errorThrown);
          console.log("Status: " + status);
        }
      });
    });
  }

});
