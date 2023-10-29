var http = require('http');
http.createServer(function (req, res) {
    res.write(new Date());
    res.end();
}).listen(process.env.PORT || 3000);
