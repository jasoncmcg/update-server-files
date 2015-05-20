var fs = require('fs');
var async = require('async');

var config = require("./config.json");
var servers = require("./serverList.json");


var writeNewContents = function (NewContents, filePath) {

	fs.writeFile(filePath, NewContents, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("The file was saved! ->" + filePath);
		}

	});

}

var readFileContents = function (filePath) {
	fs.readFile(filePath, 'utf8', function (err, fileContents) {
		if (err) {
			console.log('problem reading file contents' + filePath);
		} else {
			var reg = new RegExp(config.replaceOld, "g");

			var newFileContents = fileContents.replace(reg, config.withNew);
			writeNewContents(newFileContents, filePath);
		}

	});

}

async.each(servers, function (serverItem, callback) {
	var filePath = "\\\\" + serverItem.server + config.filePath;
	console.log(filePath);
	readFileContents(filePath);
		
});

