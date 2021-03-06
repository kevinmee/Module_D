$(function () {

    var turtleData = {
        chart: {
            renderTo: 'knownTurtles',
            type: 'bar',
            marginLeft: 50,
            marginRight: 50
        },
        title: {
            text: 'Count of Turtles in each Location'
        },
        xAxis: {
            title: {
                text: 'Location'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Number of Turtles'
            }
        },
        series: []
    };

    $.getJSON('/turtleLocation', function (data) {
        turtleData.series = data;
        new Highcharts.Chart(turtleData);
    });

    $('#species').click(function () {
        $.getJSON('/turtleSpecies', function (data) {
            turtleData.series = data;
            turtleData.xAxis.title.text = 'Species';
            turtleData.title.text = 'Count of each Species of Turtle';
            new Highcharts.Chart(turtleData);
        });
    });
    $('#location').click(function () {
        $.getJSON('/turtleLocation', function (data) {
            turtleData.series = data;
            turtleData.xAxis.title.text = 'Location';
            turtleData.title.text = 'Count of Turtles in each Location';
            new Highcharts.Chart(turtleData);
        });
    });
    $('#age').click(function () {
        $.getJSON('/turtleAge', function (data) {
            turtleData.series = data;
            turtleData.xAxis.title.text = 'Age';
            turtleData.title.text = 'Count of Turtles by Age';
            new Highcharts.Chart(turtleData);
        });
    });



    // initialize species chart
    var speciesData = {
        chart: {
            renderTo: 'speciesData',
            type: 'column',
            marginLeft: 75,
            marginRight: 50
        },
        title: {
            text: 'Average Weight of Turtles by Species'
        },
        xAxis: {
            title: {
                text: 'Species of Turtle'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Weight in Pounds'
            }
        },
        series: []
    };

    $.getJSON('/speciesWeight', function(data) {
        speciesData.series = data;
        new Highcharts.Chart(speciesData);
    });

    $('#weightGraph').click(function () {
        $.getJSON('/speciesWeight', function (data) {
            speciesData.series = data;
            speciesData.title.text = 'Average Weight of Turtles by Species';
            speciesData.xAxis.title.text = 'Weight in Pounds';
            new Highcharts.Chart(speciesData);
        });
    });
    $('#ageGraph').click(function () {
        $.getJSON('/speciesAge', function (data) {
            speciesData.series = data;
            speciesData.title.text = 'Average Life Expectency of Turtles by Species';
            speciesData.xAxis.title.text = 'Life Expectency in Years';
            new Highcharts.Chart(speciesData);
        });
    });


    var dietData = {
        chart: {
            renderTo: 'dietData',
            type: 'column',
            marginLeft: 75,
            marginRight: 50
        },
        title: {
            text: 'Turtle species that have similar Diet'
        },
        xAxis: {
            title: {
                text: 'Food'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Count'
            },
            allowDecimals: false
        },
        series: []
    };

    $.getJSON('/speciesDiet', function(data) {
        dietData.series = data;
        var speciesDietChart = new Highcharts.Chart(dietData);
    })


});