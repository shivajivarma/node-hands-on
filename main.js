console.log("/************** OUTPUT | START**************/")

/**
* Importing user defined module using require function
**/console.log("\n1. Exporting and Importing modules:")

var sampleFunctions = require("./sampleFunctions.js");

console.log("add( 1, 1, 1): " + sampleFunctions.add( 1, 1, 1) + "\n");
sampleFunctions.print('Hello','World!');
//sampleFunctions.localFunction(); //This will fail as it is not exported on sampleFunctions.js


/**
* EventEmitter Sample implementation
**/console.log("\n\n2. EventEmitter:")

var events = require('events');
var eventEmitter = new events.EventEmitter();
 
var doorOpen = function doorOpen(){
 console.log('Door Opened');
}
eventEmitter.on('doorOpen', doorOpen); //Subscribing to event
 
var ringBell = function ringBell(){
 console.log('ringBell Event fired. After 5 secs doorOpen event will be fired.');
 setTimeout(function(){eventEmitter.emit('doorOpen')},5000);
}
eventEmitter.on('ringBell', ringBell); //Subscribing to event

eventEmitter.emit('ringBell'); //Triggering the ringBell event

/**
* http
**/console.log("\n\n3. http:")
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
console.log("http server running at http://127.0.0.1:8000, just outputs 'Hello world' for all URL paths");

/**
* ExpressJS
**/console.log("\n\n4. ExpressJS: Routing & Interceptors")
var express = require('express');
var myApp = express();

var globalInterceptor = function(req,res,next){console.log("Global Interceptor"); next()}
myApp.use(globalInterceptor);

myApp.get('/', function(req,res,next){console.log("Single Interceptor on '/'"); next()},function(req,res){
	res.send("You are on '/' path <br/><h3>birdsRouter:</h3>"+
	"<ul><li><a href='/birds/1'>1</a></li><li><a href='/birds/2'>2</a></li></ul>");
});


var birdsRouter = express.Router();
birdsRouter.get('/1', function(req,res,next){console.log("Single Interceptor on '/birds/1'"); next()}, function(req,res){
	res.send("1 is parrot");
});
birdsRouter.get('/2', function(req,res,next){console.log("Single Interceptor on '/birds/2'"); next()}, function(req,res){
	res.send("2 is crow");
});

myApp.use('/birds', birdsRouter);	
				
myApp.listen(3000, function () {console.log('ExpressJS: Example app listening on http://127.0.0.1:%s', this.address().port)});

console.log("\n/************** OUTPUT | END **************/")
