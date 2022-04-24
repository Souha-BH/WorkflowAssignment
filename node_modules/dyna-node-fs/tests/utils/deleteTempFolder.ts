import {rmdir} from "../../src";

export const deleteTempFolder = (done: Function): void => {
  rmdir('./temp')
    .then(() => done())
    .catch((error: any) => {
      console.error('cannot delete ./temp folder', error);
      done();
    });
};
