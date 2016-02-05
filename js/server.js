var http = require('http');
var util = require('util');
var redis = require('redis');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });

    var client = redis.createClient('redis://h:pbhphsjl7um5sr1jelfosp2saqn@ec2-54-83-57-64.compute-1.amazonaws.com:15819');

    client.get('games', function(error, games) {
        response.write(games.toString());
        response.end();
    });
});

server.listen(8081);

console.log('Server running on port 8081');
