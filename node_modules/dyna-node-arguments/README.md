# dyna-node-arguments

Simplify the way you read nodeJS command line arguments.

The double dash used to declare a variable and the rest are the values of the variable.

The `ynaNodeArguments` is an object variable with values.

# Import

``` 
import {dynaNodeArguments} from "dyna-node-arguments"
``` 

# Examples

### command line: node myApp.js
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "root": "",
  },
}
``` 

### command line: node myApp.js --ENV_MODE production
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "ENV_MODE": "production",
    "root": "",
  },
}
``` 

### command line: node myApp.js --ENV_MODE production secure
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "ENV_MODE": "production secure",
    "root": "",
  },
}
```

### command line: node myApp.js --ENV_MODE production secure --TARGET mobile android
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "ENV_MODE": "production secure",
    "TARGET": "mobile android",
    "root": "",
  },
}
``` 

### command line: node myApp.js --ENV_MODE production -secure -- -verbose
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "ENV_MODE": "production -secure",
    "root": "-verbose",
  },
}
``` 

### command line: node myApp.js --ENV_MODE production secure -- basics --TARGET mobile android
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "ENV_MODE": "production secure",
    "TARGET": "mobile android",
    "root": "basics",
  },
}
``` 

### command line: node myApp.js build --title Hello World --mode silent --title v2 -- verbose
``` 
{
  "node": "/Users/john/.nvm/versions/node/v12.16.1/bin/node",
  "app": "myApp.js",
  "args": {
    "mode": "silent",
    "root": "build verbose",
    "title": "Hello World v2",
  },
}
``` 

