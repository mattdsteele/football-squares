function getSquare(home, away) {
  return $('table tbody td')[(home * 11) + (away + 1)];
}
$(function() {
  $.get('/scores.json', function(data) {
    $.each(data, function(index, value) {
      $(getSquare(value.home, value.away)).html(value.outcome);
    });
  });
});
