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

    var dietData = {
        chart: {
            renderTo: 'dietData',
            type: 'bar',
            marginLeft: 50,
            marginRight: 50
        },
        title: {
            text: 'Diet of turtles'
        },
        xAxis: {
            title: {
                text: 'Food'
            }
        },
        yAxis: {
            title: {
                text: 'Species'
            }
        },
        series: []
    };

    $.getJSON('/speciesDiet', function(data) {
        dietData.series = data;
        var speciesDietChart = new Highcharts.Chart(dietData);
    })

    $.getJSON('/speciesWeight', function(data) {
        speciesData.series = data;
        var speciesWeightChart = new Highcharts.Chart(speciesData);
    });

    $('#weightGraph').click(function() {
        speciesData.chart.type = "bar";

        $.getJSON('/speciesWeight', function(data) {
            speciesData.series = data;
            speciesData.title.text = 'Average Weight of Turtles by Species';
            speciesData.xAxis.title.text = 'Weight in Pounds';
            var speciesWeightChart = new Highcharts.Chart(speciesData);
        });
    });


    $('#ageGraph').click(function() {
        speciesData.chart.type = "bar";

        $.getJSON('/speciesAge', function(data) {
            speciesData.series = data;
            speciesData.title.text = 'Average Life Expectency of Turtles by Species';
            speciesData.xAxis.title.text = 'Life Expectency in Years';
            var speciesAgeChart = new Highcharts.Chart(speciesData);
        });
    });


});