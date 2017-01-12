/**
 * Created by varfa on 12.01.2017.
 */

var http = require("http");
var chat = require("./chat");
var fs = require("fs");

http.createServer(function(req, res) {
        switch(req.url) {
            case "/":
                sendFile("index.html", res);
                break;
            case "/publish":
                var body = "";
                req.on("readable", function () {
                    console.log("readable");
                    var data = req.read();
                    if (data) {
                        body += data;
                    }
                })
                    .on("end", function () {
                        body = JSON.parse(body);
                        chat.publish(body.message);
                        res.end("ok");
                    });
                break;
            case "/subscribe":
                    chat.subscribe(res);
        }
    }
).listen(3000);

function sendFile(fileName, res){
    var fileContent = fs.readFileSync(fileName);
    res.end(fileContent);
}