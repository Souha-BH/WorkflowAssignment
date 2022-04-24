# About
 
Webpack configuration for ES5/ES6 for Typescript Library or Module.
 
Debug with devTools and test with Jest.
 
This boilerplate consist of minimum configuration and dependencies to create a Module written in Typescript.
 
**Have fun!**

# Install

- Clone this repo, call `git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module`
- Change directory to `my-ts-module`
- Call `npm run create-module` for TS module **or**
- Call `npm run create-module-with-react` for TS module that supports also React components and JSX syntax
- Update `the package.json` with `version` and `repository.url`
- You are ready!
 
# Develop
 
## General
 
The source code of your project is under the `src/` folder.
 
## Debug
 
There are several options how to debug your application. You can debug it on nodeJs or in any web browser.
 
So you can test your module on how much compatible is in different environments. 
 
### Debug on any web browser with browser's debugger
 
Call `npm run debug-browser` to start the builder and open a dev server (via webpack).
 
Open http://localhost:8027/ address in any browser.
 
_In this case there is no need to start additionally a builder as the other options, webpack takes care of it._
 
You can use any web browser to test it.
 
### Debug on nodeJs with devTools (via node --inspector)
 
Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.
 
Call `npm run debug-devtools` to start and debug with the devTools debugger of your Chrome browser.
 
Alternatively, you can call `npm run debug-devtools-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.
 
Open [chrome://inspect/#devices](chrome://inspect/#devices) to list the debuggable instances in your localhost, you should see your app there to debug it.
 
Alternatively, copy paste the link generated from `debug-devtools`;
it is something like this: chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/659747f3-20d7-45d9-8f8d-48c707d6f5eb
 
The debugger is the debugger of your Chrome's browser, you should have Chrome to use.
 
### Debug on nodeJs with node-debug
 
**Dependency**, you have to `npm install -g node-inspector`.
 
Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.
 
Call `npm run debug-inspector` to start and node-debug your app.
 
You can close the devTools and this script will be called again to instantiate new devTools (changes in your code will be loaded at this point).
 
Alternatively, can call `npm run debug-inspector-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.
 
The debugger will start automatically (as web page) in your default browser. The debugger works **only** in Chrome.
 
### Run debug code

Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `npm run run-debug-build` and will run you debug application on node.js.

The built code, ready to run is under the `debug-ground/debug-dev-on-nodejs` path.  
 
# Test
 
## Write tests
 
For tests the [Jest](https://facebook.github.io/jest) is used, check the documentation.
 
Test files can be everywhere but they should have name `*.(test|spec).(ts|tsx|js|jsx)`. There is `tests/` folder if you want to use it but this is not a limitation.
 
## Run tests
 
Call `npm run test` to run your tests and coverage. This test also builds your application, ts errors can be shown here.

Call `npm run test-only` to run your tests only including coverage, no build no ts errors.
 
Call `npm run test-watch` to run your tests on any changes, no build, no ts errors, no coverage.
 
## Debug tests (experimental)
 
There is a small mock library where works like Jest but supports only some of the Jest functions. This is the `test/mock-jest.js` file where behave like Jest and can run on any browser and of course under node.js.
 
It doesn't support all the comparisons and features of the Jest but it helps to debug the test files. Feel free to fork it or suggest another way how to debug Jest test files.
 
The debug test commands are similar to the debug app commands. 

### Debug test in any browser

- Run `debug-test-browser`
- The browser will be opened at `http://localhost:8023`

### Debug test with devtools

- Run `debug-test-build` _where builds your test code_
- Run `debug-test-devtools` or `debug-test-devtools-brk`

### Debug test with node-inspector

- Run `debug-test-build` _where builds your test code_
- Run `debug-test-inspector` or `debug-test-inspector-brk`
 
# Dist / Release
 
Call `npm run dist` or `npm run release`
to create a distributable version of your project
under the `dist/` folder.
 
The package configuration exports the `dist/` folder so you have to call the `npm run dist` every time you want to publish this package. The typescript declarations are there out of the box.
 
When you deploy your application on server side there is no need to run `npm install`. The `dist` folder has everything and it is ready to run. The typescript declaration are useless there (are only for debugging), your whole application is ins the `dist/index.js`.
 	
Server or Container holders are executing the `npm start`, where in the `package.json` is configured to run the `dist/index.js`.
 
# Start
 
`start` starts the compiled application under the `dist/` folder.

You should `dist` before call this.
 
# Others

## Link your modules easily
 
Npm offers out of the box, link on development time of your project and of your own packages.
 
Instead of using in packages `"my-lovely-component": "file_./../../../myPackages/my-lovely-component"` try https://docs.npmjs.com/cli/link
 
**Tip 1:** During development, there is no need to call `dist` on any code change, you can import the `src/` folder of this module like this: `import {MyModule} from 'my-module/src';` instead of `import {MyModule} from 'my-module';`.
 
**Tip 2:** You can link this module with your main application using the `npm link` for more read https://docs.npmjs.com/cli/link.
 
**Tip 2.1:** With npm > 5.0.0 the above link can be made defining the "file:xxx" instead of version number. 

## React
 
This boilerplate includes React components, only to support the jsx syntax. This boilerplate is not intended for  React components. You can work with React and export it, JSX syntax is also supported but there is no friendly environment to develop. For React check (dyna-ts-react-module-boilerplate)[https://github.com/aneldev/dyna-ts-react-module-boilerplate]. You can safely remove the react from this boilerplate.

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
