'use strict';

var request = require('request');
var gunzip = require('gunzip-maybe');
var tar = require('tar-fs');
var PassThrough = require('stream').PassThrough;

module.exports = function(url, dir, cb) {
    var stream = new PassThrough();
    var unzip = gunzip();
    var untar = tar.extract(dir);

    stream.pipe(unzip).pipe(untar);

    request.get(url)
        .on('error', function(err) {
            console.error(err);
            cb();
        })
        .on('data', function(data) {
            stream.write(data);
        })
        .on('end', function() {
            cb();
        });
};
