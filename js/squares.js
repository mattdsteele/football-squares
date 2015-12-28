class SquaresController {
  constructor(Datasets, Data) {
    this.datasets = Datasets.datasets;
    this.Data = Data;
    this.squares = this.initialize();
  }

  updateDataset() {
    this.squares.populate();
  }

  showAllNumbers() {
    this.squares.showAllNumbers();
  }

  initialize() {
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
      return numbers;
    }

    function clearAllData() {
      // scope this selector
      $('table td[data-outcome]').css('background-color','').attr('data-outcome','');
    }

    return {
      populate : () => {
        clearAllData();
        // should these selectors be cached (or scoped to a specific table?)
        var awayScores = validate('thead td input'),
          homeScores = validate('tbody td input');
        if (!(awayScores && homeScores)) {
          return false;
        }

        // cache this jQuery object
        var dataset = this.dataset.id;
        let data = this.Data.get(dataset);
        var stats = getMinAndMax(data);
        $.each(data, function(index, value) {
          // I usually prefix my jQuery object vars with a $ by convention.
          var square = $(getSquare(value.home, value.away, homeScores, awayScores));
          makeBackground(square, value.outcome, stats);
        });
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
  }
}

let SquaresComponent = {
  template: `
    <div id="container">
      <form id="squares-form">
        <span id="allNumbersCheck">
          <input type="checkbox" id="allNumbers" ng-model="superbowlSquares.allNumbers"
          ng-change="superbowlSquares.showAllNumbers()">
          <label for="allNumbers">Show all numbers</label>
        </span>
        <select id="dataset"
          ng-options="option as option.name for option in superbowlSquares.datasets"
          ng-model="superbowlSquares.dataset"
          ng-change="superbowlSquares.updateDataset()">
          <option value="">Dataset</option>
        </select>
        <table id="squares">
          <thead>
            <tr><td></td>
              <td><input id="away-0" value="0"/></td>
              <td><input id="away-1" value="1"/></td>
              <td><input id="away-2" value="2"/></td>
              <td><input id="away-3" value="3"/></td>
              <td><input id="away-4" value="4"/></td>
              <td><input id="away-5" value="5"/></td>
              <td><input id="away-6" value="6"/></td>
              <td><input id="away-7" value="7"/></td>
              <td><input id="away-8" value="8"/></td>
              <td><input id="away-9" value="9"/></td>
            </tr>
          </thead>
          <tbody>
            <tr><td><input id="home-0" value="0"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-1" value="1"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-2" value="2"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-3" value="3"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-4" value="4"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-5" value="5"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-6" value="6"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-7" value="7"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-8" value="8"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><input id="home-9" value="9"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </form>
    </div>
  `,
  controller: SquaresController
};

export default SquaresComponent;
