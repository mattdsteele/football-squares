function getSquare(home, away) {
  return $('table tbody td')[(home * 11) + (away + 1)];
}

function makeBackground(square, outcome) {
  square.css('background-color', "#" + ((255 - Number(Math.round(outcome * 50.0))).toString(16) + "ffff"));
}

$(function() {
  $.get('/scores.json', function(data) {
    $.each(data, function(index, value) {
      square = $(getSquare(value.home, value.away));
      square.html(value.outcome);
      makeBackground(square, value.outcome);
    });
  });
});
