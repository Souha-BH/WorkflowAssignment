import "jest";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;

import { buildArgsFromString } from "../../src/buildArgsFromString";

describe('buildArgsFromString', () => {

  [
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js --ENV_MODE production',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js --ENV_MODE production secure',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js --ENV_MODE production secure --TARGET mobile android',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js --ENV_MODE production secure -- basics --TARGET mobile android',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js    --ENV_MODE    production     secure -- basics --TARGET mobile     android',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js --ENV_MODE production -secure -- -verbose',
    '/Users/john/.nvm/versions/node/v12.16.1/bin/node myApp.js build --title Hello World --mode silent --title v2 -- verbose',
  ]
    .forEach(cli => {
      it(`Parse: "${cli}"`, () => {
        expect(buildArgsFromString(cli)).toMatchSnapshot();
      });
    });
});
