### About
This module allows you to download a `.tar.gz` archive from a url, and decompress it on the fly by utilizing nodejs
streams, finally writing it to a selected directory.

### Usage

```
var untarRequest = require('untar-request');

var url = 'http://example.com/some-archive.tar.gz';
var dest = './';

untarRequest(url, dest, function() {
    console.log('done');
});
```
