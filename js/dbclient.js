var inspect = require('util').inspect;
var Client = require('mariasql');

exports.addTurtle = function(req, res) {
    var turtle = req.body;

    var name = turtle.turtle_name;
    var species = turtle.turtle_species;
    var age = turtle.turtle_age;
    var location = turtle.turtle_location;

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client Error: ' + err ); })
        .on('close', function() { console.log('Client Closed'); });

    c.query('INSERT INTO known_turtles VALUES (?, ?, ?, ?)',
        [name, species, age, location])
        .on('result', function(res) {
            res.on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results: ' + info); });
        })
        .on('end', function() {
            res.redirect('/dashboard');
        });
}

exports.speciesWeight = function(req, res) {
    console.log('getting species weight');
    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT species, avg_weight FROM turtle_species')
        .on('result', function(res) {
            res.on('row', function(row) { rows.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].species,
                    data: [parseInt(rows[i].avg_weight)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
}

exports.speciesAge = function(req, res) {
    console.log('getting species age');
    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT species, avg_age FROM turtle_species')
        .on('result', function(res) {
            res.on('row', function(row) { rows.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].species,
                    data: [parseInt(rows[i].avg_age)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
}

exports.turtleSpecies = function(req, res) {
    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT species, count(species) as count FROM known_turtles GROUP by species')
        .on('result', function(res) {
            res.on('row', function(row) { console.log(row); rows.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].species,
                    data: [parseInt(rows[i].count)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
}

exports.turtleLocation = function(req, res) {
    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT location, count(location) as count FROM known_turtles GROUP by location')
        .on('result', function(res) {
            res.on('row', function(row) { console.log(row); rows.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].location,
                    data: [parseInt(rows[i].count)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
}

exports.turtleAge = function(req, res) {
    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT age, count(age) as count FROM known_turtles GROUP by age')
        .on('result', function(res) {
            res.on('row', function(row) { console.log(row); rows.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].age,
                    data: [parseInt(rows[i].count)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
}


exports.speciesDiet = function(req, res) {
    console.log('getting species diet');
    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'cttibbetts',
        password: 'cttibbetts_pw',
        db: 'cttibbetts_db'
    });

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT diet, count(diet) AS count FROM turtle_diet GROUP BY diet')
        .on('result', function(res) {
            res.on('row', function(row) { rows.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].diet,
                    data: [parseInt(rows[i].count)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
}


