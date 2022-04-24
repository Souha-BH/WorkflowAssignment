import "jest";

import { dynaNodeArguments } from "../../src";

describe('dynaNodeArguments variable', () => {
  it(`Should have the proper value`, () => {
    console.log('process.argv:', process.argv);
    console.log('dynaNodeArguments:', dynaNodeArguments);
    expect(dynaNodeArguments.node.indexOf('/node')).toBeGreaterThan(0);
    expect(dynaNodeArguments.app.indexOf('/jest')).toBeGreaterThan(0);
    expect(Object.keys(dynaNodeArguments.args).length).toBeGreaterThan(0);
  });
});
