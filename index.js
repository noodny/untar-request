'use strict';

var request = require('request');
var gunzip = require('gunzip-maybe');
var tar = require('tar-fs');
var PassThrough = require('stream').PassThrough;

module.exports = function(options, cb) {
    if(!options.url) {
        throw new Error('Url option is required');
    }

    if(!options.dest) {
        throw new Error('Dest option is required');
    }

    var stream = new PassThrough();
    var unzip = gunzip();
    var untar = tar.extract(options.dest, options);

    stream.pipe(unzip).pipe(untar);

    request.get(options.url)
        .on('error', function(err) {
            console.error(err);
            if(cb && typeof cb === 'function') {
                cb();
            }
        })
        .on('data', function(data) {
            stream.write(data);
        })
        .on('end', function() {
            if(cb && typeof cb === 'function') {
                cb();
            }
        });
};
