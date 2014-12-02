$(function() {

    // initialize species chart
    var speciesData = {
        chart: {
            renderTo: 'speciesData',
            type: 'bar',
            marginLeft: 50,
            marginRight: 50
        },
        title: {
            text: 'Average Weight of Turtles by Species'
        },
        xAxis: {
            title: {
                text: 'Weight in Pounds'
            }
        },
        yAxis: {
            title: {
                text: 'Species of Turtle'
            }
        },
        series: []
    };

    $.getJSON('/speciesWeight', function(data) {
        speciesData.series = data;
        var speciesWeightChart = new Highcharts.Chart(speciesData);
    });

    $('#weightGraph').click(function() {
        speciesData.chart.type = "bar";

        $.getJSON('/speciesWeight', function(data) {
            speciesData.series = data;
            var speciesWeightChart = new Highcharts.Chart(speciesData);
        });
    });

    // Change Snack Consumption from bar to line
    $('#ageGraph').click(function() {
        speciesData.chart.type = "bar";

        $.getJSON('/speciesAge', function(data) {
            speciesData.series = data;
            var speciesAgeChart = new Highcharts.Chart(speciesData);
        });
    });


});