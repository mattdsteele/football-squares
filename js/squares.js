function getSquare(home, away) {
  return $('table tbody td')[(home * 11) + (away + 1)];
}

var colors = ["CCFFFF", "52FFFF", "BF00FF", "FF00BF", "FF0040", "FF4000"]

function makeBackground(square, outcome, stats) {
  var index = Math.round((outcome - stats.min) / stats.max * (colors.length - 1));
  square.css('background-color', "#" + colors[index]);
  square.attr('data-outcome', outcome);
  square.mouseover(function() {
    $(this).html($(this).attr('data-outcome'));
  });
  square.mouseleave(function() { $(this).empty(); });
}

function getMinAndMax(data) {
  var min = Number.MAX_VALUE;
  var max = 0;
  $.each(data, function(i, v) {
    if (v.outcome < min) { min = v.outcome; }
    if (v.outcome > max) { max = v.outcome; }
  });
  var deltas = 6;
  var diff = (max - min) / deltas;
  return {"min" : min, "max" : max, "diff" : diff, "deltas" : deltas};
}
var populate = function() {
  $.get('/scores.json', function(data) {
    var stats = getMinAndMax(data);
    $.each(data, function(index, value) {
      var square = $(getSquare(value.home, value.away));
      makeBackground(square, value.outcome, stats);
    });
  });
};

$(function() {
  $('#theButton').click(populate);
});
