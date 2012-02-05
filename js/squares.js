var squares = (function($) {
  // shouldn't be using a jQuery method here, if this is solely operating on arrays (not elements)
  $.fn.compare = function(t) {
    if (this.length != t.length) { return false; }
    var a = this.sort(), b = t.sort();
    for (var i = 0, j = t.length; i < j; i++) {
      if (a[i] != b[i]) { 
        return false;
      }
    }
    return true;
  };

  function arrayIndexOf(val, arr) {
    for (var i=0, j = arr.length; i < j; i++) {
      if (arr[i] == val) { return i; }
    }
    return -1;
  }

  function getSquare(home, away, homeScores, awayScores) {
    var row = arrayIndexOf(away, awayScores),
        column = arrayIndexOf(home, homeScores);

    // cache this selector so it only runs once.
    return $('table tbody td')[(column * 11) + (row + 1)];
  }

  var colors = ["CCFFFF", "52FFFF", "BF00FF", "FF00BF", "FF0040", "FF4000"];

  function makeBackground(square, outcome, stats) {
    var index = Math.round((outcome - stats.min) / stats.max * (colors.length - 1));
    square.css('background-color', "#" + colors[index])
        .attr('data-outcome', outcome)
        .mouseover(function() {
            $(this).html($(this).attr('data-outcome'));
        })
        .mouseleave(function() {
            $(this).empty();
        });
  }

  function getMinAndMax(data) {
    var min = Number.MAX_VALUE,
        max = 0;
    $.each(data, function(i, v) {
      if (v.outcome < min) { min = v.outcome; }
      if (v.outcome > max) { max = v.outcome; }
    });
    var deltas = 6,
        diff = (max - min) / deltas;
    return {"min" : min, "max" : max, "diff" : diff, "deltas" : deltas};
  }

  function validate(selector) {
    var numbers = [];
    $(selector).each(function(i,j) { numbers.push($(j).val()); });
    if (!$(numbers).compare([1,2,3,4,5,6,7,8,9,0])) {
      alert("Please enter valid values!");
      return false;
    }
    return numbers;
  }

  function clearAllData() {
    // scope this selector
    $('table td[data-outcome]').css('background-color','').attr('data-outcome','');
  }

  return {
    populate : function(e) {
      clearAllData();
      // should these selectors be cached (or scoped to a specific table?)
      var awayScores = validate('thead td input'),
          homeScores = validate('tbody td input');
      if (!(awayScores && homeScores)) {
          return false;
      }

      // cache this jQuery object
      var dataset=$('#dataset').val();
      $.get('/' + dataset + '.json', function(data) {
        var stats = getMinAndMax(data);
        $.each(data, function(index, value) {
          // I usually prefix my jQuery object vars with a $ by convention.
          var square = $(getSquare(value.home, value.away, homeScores, awayScores));
          makeBackground(square, value.outcome, stats);
        });
      });
      e.preventDefault();
    },
    showAllNumbers : function() {
      // can all of these jQuery selectors be cached?
      if($('#allNumbers').is(':checked')) {
        $('#squares tbody td').each(function(i,v) {
          // Don't call $(v) twice, store into a var.
          if($(v).attr('data-outcome')) {
            $(v).html($(v).attr('data-outcome'));
          }
        });
      } else {
        $('#squares tbody td').each(function(i,v) {
          // Don't call $(v) twice, store into a var.
          if($(v).attr('data-outcome')) {
            $(v).empty();
          }
        });
      }
    }
  };
})(jQuery);

$(function() {
  $('#dataset').change(squares.populate);
  $('#allNumbers').click(squares.showAllNumbers);
  $('.bigtext').bigtext();
});
