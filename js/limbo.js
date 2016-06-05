(function(window, d3, $, Waypoint) {
  function limboAnimation() {
    /*
    var width = 900,
      height = 1000,
      personWidth = 5,
      personHeight = 5,
      personMargin = 2;
    */
    var numberFormat = d3.format(',d');

    var component = function(selection) {
      selection.each(function(data) {
        var container = d3.select(this);
        var i = 0;
        var yearMin = d3.min(data, function(d) { return d.Year });
        /*
        var canvas = container.append("canvas")
          .attr("width", width)
          .attr("height", height);
        var ctx = canvas.node().getContext('2d');
        var x = 0, y = 0;
        var endAngle = Math.PI * 2;
        var numPeople = d3.max(data, function(d) { return d['TOTAL LIMBO']; });
        var cols = Math.floor(width  / (personWidth + personMargin));
        var itemArea = ((personWidth + personMargin) * (personHeight + personMargin));
        var totalPeople = 0;
        */

        var update = function(yearData) {
          var yearLabel = container.selectAll('.year-label').data([yearData], function(d) { return d.Year });
          var inner = yearLabel.enter().append('div')
              .attr('class', 'year-label');

          inner.append('div')
              .attr('class', 'limbo-count')
              .text(function(d) {
                return "In limbo: " + numberFormat(d['TOTAL LIMBO']);
              });

          inner.append('div')
              .attr('class', 'deported-count')
              .text(function(d) {
                return "Deported: " + numberFormat(d['TOTAL Deport']);
              });


          inner.append('div')
              .attr('class', 'deported-limbo-year-label')
              .text(function(d) {

                if (d.Year == yearMin) {
                  return d.Year;
                }
                else {
                  return yearMin + "-" + d.Year;
                }
              });
          

           
          yearLabel.exit().remove();

          /*
          var i, row, col;
          for (i = 1; i <= yearData['LIMBO SE Asia']; i++) {
            totalPeople++;
            row = Math.floor(totalPeople / cols); 
            col = ((totalPeople - 1) % cols);
            x = (col * (personWidth + (personWidth / 2)))  + personMargin + (personWidth / 2);
            y = (row * (personHeight + (personHeight / 2))) + personMargin + (personHeight / 2);
            ctx.beginPath();
            ctx.arc(x, y, personWidth / 2, 0, endAngle);
            ctx.fill();
          }
          */
        };

        var intervalId = setInterval(function() {
          if (i >= data.length) {
            clearInterval(intervalId);
            return;
          }
          var yearData = data[i];
          update(yearData);
          i++;
        }, 400);
      });
    }

    return component;
  }

  var LimboApp = function(options) {
    var initialized = false;
    d3.csv(options.dataUrl, function(data) {
      var waypoint = new Waypoint({
        element: document.getElementById('limbo'),
        handler: function(direction) {
          if (!initialized) {
            initialized = true;
            var animation = limboAnimation();
            d3.select(options.container).datum(data)
              .call(animation);
          }
        },
        offset: '25%'
      });
    });
  }; 

  $(function() {
    var app = new LimboApp({
      container: $('#limbo-animation-container')[0],
      dataUrl: 'data/deportations_and_limbo.csv'
    });
  });
})(window, d3, $, Waypoint);
