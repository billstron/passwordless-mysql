# passwordless-mysql
This module provides token storage for Passwordless, a node.js module for express that allows website
authentication without password using verification through email or other means. 
Visit the project's website https://passwordless.net for more details.

Tokens are stored in a MongoDB database and are hashed and salted using 
[bcryptjs](https://github.com/dcodeIO/bcrypt.js). 

## Usage
First, install the module:

```bash
$ npm install passwordless-mysql --save
```

Afterwards, follow the guide for Passwordless. A typical implementation may look like this:

```javascript
var passwordless = require('passwordless');
var MySQLStore = require('passwordless-mysql');

var connStr = 'mysql://test@localhost/test';
passwordless.init(new MySQLStore(connStr));

passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback) {
        // Send out a token
    });

app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken());
```
## Initialization
```javascript
new MySQLStore(uri, [options]);
```
- uri: (string) MySQL URI as further described in the MySQL docs.  
- [options]: (object) Optional. 

Example:

```javascript
var connStr = 'mysql://test@localhost/test';
passwordless.init(new MySQLStore(connStr, {
    server: {
        auto_reconnect: true
    }
}));
```

### Options
Currently there are no options supported. 

## Acknowledgement
Thanks to [Battochon](https://github.com/Battochon) for the 
[passwordless-postgrestore](https://github.com/Battochon/passwordless-postgrestore)
library for which this was largely cribbed.  

## License
Copyright (c) 2015, William J. Burke
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
