/**
 * Created by varfa on 12.01.2017.
 */

var clients = [];

exports.publish = function(message){
    console.log("Message: %s", message);
    clients.forEach(function(res){
        res.end(message);
    });
    clients = [];
};

exports.subscribe = function (res) {
    clients.push(res);
    Console.log(clients.length);
};