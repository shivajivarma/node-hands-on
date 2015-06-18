var add = function(){
	var sum = 0;
	for(i=0; i < arguments.length; i++){
		sum = sum + arguments[i];
	}
	return sum;
}
var localFunction = function(){ // This function is local to this module. It's not exported.
	console.log('localFunction() // Called inside sampleFunctions.print function')
}

/*
* One way to export a Object
*/
module.exports.add = add;

/*
* Other way to export a Object
*/
module.exports.print = function(){
	var output = "";
	for(i=0; i < arguments.length; i++){
		output = output + arguments[i] + " "
	}
	console.log(output);
	localFunction();
}
