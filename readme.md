### About
This module allows you to download a `.tar.gz` archive from a url, and decompress it on the fly by utilizing nodejs
streams, finally writing it to a selected directory.

### Usage

```
var untarRequest = require('untar-request');

var options = {
     url: 'http://example.com/some-archive.tar.gz',
     dest: './'
}

untarRequest(options, function() {
    console.log('done');
});
```

You may want to use `options.dmode` and `options.fmode` to set appropriate access modes for directories and files, e.g.:
```
var options = {
     url: 'http://example.com/some-archive.tar.gz',
     dest: './',
     dmode: 0555,
     fmode: 0444
}
```
