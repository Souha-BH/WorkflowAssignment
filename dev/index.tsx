import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState} from "react";

import {App} from '../src';

declare const module: any;
let hmrUpdate: undefined | (() => void);

const Start = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = useState<number>(0);
  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return <App/>;
};

ReactDOM.render(<Start/>, document.getElementById('dyna-module-root'));

if (module.hot) {
  module.hot.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}
