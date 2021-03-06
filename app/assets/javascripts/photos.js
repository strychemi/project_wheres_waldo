
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

var charList = ["Waldo", "Wenda", "Oldlaw", "Wizard Whitebeard", "Woof"];

var makeTag = function(x, y, data) {
  var self = this;

  $tag = $("<div></div>");
  $tag.attr("class", "tag");
  $tag.attr("data-tagid", data.id);
  $tag.css( { left: x, top: y } );

  $deleteTag = $("<div></div>");
  $deleteTag.text("X");
  $deleteTag.attr("class", "delete-tag");
  $deleteTag.appendTo($tag);

  $tagName = $("<p></p>");
  $tagName.text(charList[data.character_id - 1]);
  $tagName.attr("class", "tagged-name");
  $tagName.appendTo($tag);

  $('#photos-show').append($tag);
};


$(document).ready(function() {

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
      var position = $(".target").position();
      $.post({
        url: "/tags.json",
        dataType: "json",
        data: { tag: { character_id: $el.attr("data-character"), photo_id: 1, x: position.left, y: position.top } },
        success: function(data) {
          makeTag(data.x, data.y, data);
          $('#waldo-photo').addClass('searching');
          $('.target').removeClass('clicked');
          hideDropdown();
        },
        error: function(xhr, status, errorThrown) {
          console.log("Error: " + errorThrown);
          console.log("Status: " + status);
          alert("Character is already tagged!");
        }
      });
    });
  }

});
