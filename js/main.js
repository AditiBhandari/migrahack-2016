$(function() {

  $.getJSON('js/charts.json', function (data) {

    $('#chart1').highcharts({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Refugee Arrivals Per Year from Southeast Asia'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        allowDecimals: false,

      plotLines: [{
          color: '#FF0000', // Red
          width: 2,
          value: 1984, 
  	label: {
  	  text:  "Many is resettled in Richmond, Virginia"
  	}
      }],

        labels: {
          formatter: function() {
            return this.value; // unformatted number for year
          }
        }
      },
      yAxis: {
        title: {
          text: 'number of refugees'
        },
        labels: {
          formatter: function() {
            return this.value;
          }
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y:,.0f}</b> refugees'
      },
      plotOptions: {
        line: {
          pointStart: 1975,
          lineWidth: 1,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: data.series1
    });

    $('#chart2').highcharts({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Total Cumulative Arrivals of Refugees from Southeast Asia'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        allowDecimals: false,

      plotLines: [{
          color: '#FF0000', // Red
          width: 2,
          value: 1984, 
    label: {
      text:  "Many is resettled in Richmond, Virginia"
    }
      }],

        labels: {
          formatter: function() {
            return this.value; // unformatted number for year
          }
        }
      },
      yAxis: {
        title: {
          text: 'number of refugees'
        },
        labels: {
          formatter: function() {
            return this.value;
          }
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y:,.0f}</b> refugees'
      },
      plotOptions: {
        line: {
          pointStart: 1975,
          lineWidth: 1,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: data.series2
    });


  });
});
