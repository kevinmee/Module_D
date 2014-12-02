$(function() {

    // initialize species chart
    var speciesData = {
        chart: {
            renderTo: 'speciesData',
            type: 'bar'
        },
        title: {
            text: 'Average Weight of Turtles by Species'
        },
        xAxis: {
            title: {
                text: 'Species of Turtle'
            },
            yAxis: {
                title: {
                    text: 'Weight in Pounds'
                }
            }
        },
        series: []
    };

    $.getJSON('/speciesWeight', function(data) {
        speciesData.series = data;
        var speciesWeightChart = new Highcharts.Chart(speciesData);
    });


});