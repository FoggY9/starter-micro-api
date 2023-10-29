var http = require('http');
http.createServer(function (req, res) {
    console.log(new Date())
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
