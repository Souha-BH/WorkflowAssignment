import "jest";
import {deleteTempFolder} from "../utils/deleteTempFolder";

import {saveJSON, loadJSON, deleteFile, getPath, getFilename, mkdir, isFolderEmpty, rmdir, exists} from './../../src';

const data: any = {
  name: 'John',
  age: 32,
  cars: [
    'WV', 'Volvo', 'Lexus'
  ],
};

const tempPath: string = './temp/';

describe('Load Save Delete file', () => {
  it('should delete the file', (done: Function) => {
    deleteFile(tempPath + 'test-data.json')
      .then(() => {
        expect(true).toBe(true);
        done();
      })
      .catch((error => {
        console.error('cannot save the file', error);
        expect(error).toBe(null);
        done();
      }));
  });
  it('should save the file', (done: Function) => {
    saveJSON(tempPath + 'test-data.json', data, true)
      .then(() => {
        expect(true).toBe(true);
        done();
      })
      .catch((error => {
        console.error('cannot save the file', error);
        expect(error).toBe(null);
        done();
      }));
  });
  it('should load the file', (done: Function) => {
    loadJSON(tempPath + 'test-data.json')
      .then((loadedData) => {
        expect(loadedData.name).toBe(data.name);
        expect(loadedData.age).toBe(data.age);
        done();
      })
      .catch((error => {
        console.error('cannot load the file', error);
        expect(error).toBe(null);
        done();
      }));
  });
  it('should delete the file', (done: Function) => {
    deleteFile(tempPath + 'test-data.json')
      .then((deleted: boolean) => {
        expect(deleted).toBe(true);
        done();
      })
      .catch((error => {
        console.error('cannot save the file', error);
        expect(error).toBe(null);
        done();
      }));
  });
});

describe('Path parse', () => {
  it('should get the path from full file name', () => {
    expect(getPath('src/feature\\base/myFeature.ts')).toBe('src/feature/base');
  });
  it('should get the filename from full file name', () => {
    expect(getFilename('src/feature\\base/myFeature.ts')).toBe('myFeature.ts');
  });
});

describe('Empty folder check', () => {
  const testEmptyFolder: string = tempPath + 'empty-folder-test';
  const testEmptyFolderFile: string = testEmptyFolder + '/test-file-with-data.json';

  it('should clean up from previous', (done: Function) => {
    deleteTempFolder(done);
  });
  it('should create a new temp folder', (done: Function) => {
    mkdir(testEmptyFolder)
      .then(() => done())
      .catch((error: any) => {
        console.error('cannot create', tempPath + 'empty-folder-test', {error});
        done();
      });
  });
  it('should return that the folder is empty', (done: Function) => {
    isFolderEmpty(testEmptyFolder)
      .then((isEmpty: boolean) => {
        expect(isEmpty).toBe(true);
        done();
      })
      .catch((error: any) => {
        console.error('cannot check if the folder if empty (1)', {error});
        done();
      });
  });
  it('should create a test file', (done: Function) => {
    saveJSON(testEmptyFolderFile, {name: 'John'}, true)
      .then(() => {
        done();
      })
      .catch((error: any) => {
        console.error('cannot create the test file to check if the folder is empty', {error});
        done();
      });
  });
  it('should return that the folder is not empty', (done: Function) => {
    isFolderEmpty(testEmptyFolder)
      .then((isEmpty: boolean) => {
        expect(isEmpty).toBe(false);
        done();
      })
      .catch((error: any) => {
        console.error('cannot check if the folder if empty (2)', {error});
        done();
      });
  });
  it('should delete the test file', (done: Function) => {
    deleteFile(testEmptyFolderFile)
      .then((deleted: boolean) => {
        expect(deleted).toBe(true);
        done();
      })
      .catch((error: any) => {
        console.error('cannot delete the test file', {error});
        done();
      });
  });
  it('should return that the folder is empty', (done: Function) => {
    isFolderEmpty(testEmptyFolder)
      .then((isEmpty: boolean) => {
        expect(isEmpty).toBe(true);
        done();
      })
      .catch((error: any) => {
        console.error('cannot check if the folder if empty (3)', {error});
        done();
      });
  });
  it('should delete the temp folder', (done: Function) => {
    deleteTempFolder(done);
  });
  it('should return error since the folder doesn\'t exist', (done: Function) => {
    isFolderEmpty(testEmptyFolder)
      .then((isEmpty: boolean) => {
        console.error('it got info from the deleted folder');
        done();
      })
      .catch((error: any) => {
        expect(!!error).toBe(true);
        done();
      });
  });

});

describe('Delete folder', () => {
  const testEmptyFolder: string = tempPath + 'empty-folder-test';
  const testEmptyFolderFile: string = testEmptyFolder + '/test-file-with-data.json';

  it('should clean up from previous', (done: Function) => {
    deleteTempFolder(done);
  });
  it('should not find the test folder (since is not yet created)', (done: Function) => {
    exists(testEmptyFolder)
      .then((exist: boolean) => {
        expect(exist).toBe(false);
        done();
      })
      .catch((error: any) => {
        console.error(`cannot check if the folder [${testEmptyFolder}] exists`);
        done();
      });
  });
  it('should create a new temp folder', (done: Function) => {
    mkdir(testEmptyFolder)
      .then(() => done())
      .catch((error: any) => {
        console.error('cannot create', tempPath + 'empty-folder-test', {error});
        done();
      });
  });
  it('should create a test file', (done: Function) => {
    saveJSON(testEmptyFolderFile, {name: 'John'}, true)
      .then(() => {
        done();
      })
      .catch((error: any) => {
        console.error('cannot create the test file to check if the folder is empty', {error});
        done();
      });
  });
  it('should find the test folder (since it is just created)', (done: Function) => {
    exists(testEmptyFolder)
      .then((exist: boolean) => {
        expect(exist).toBe(true);
        done();
      })
      .catch((error: any) => {
        console.error(`cannot check if the folder [${testEmptyFolder}] exists`);
        done();
      });
  });
  it('should return that the folder is not empty', (done: Function) => {
    isFolderEmpty(testEmptyFolder)
      .then((isEmpty: boolean) => {
        expect(isEmpty).toBe(false);
        done();
      })
      .catch((error: any) => {
        console.error('cannot check if the folder if empty (2)', {error});
        done();
      });
  });
  it('should delete the folder', (done: Function) => {
    rmdir(testEmptyFolder)
      .then(() => {
        done();
      })
      .catch((error: any) => {
        console.error('cannot delete the test folder', {error});
        done();
      });
  });
  it('should not find the test folder (since is deleted)', (done: Function) => {
    exists(testEmptyFolder)
      .then((exist: boolean) => {
        expect(exist).toBe(false);
        done();
      })
      .catch((error: any) => {
        console.error(`cannot check if the folder [${testEmptyFolder}] exists`);
        done();
      });
  });
  it('should delete the temp folder', (done: Function) => {
    deleteTempFolder(done);
  });
  it('should return error since the folder doesn\'t exist', (done: Function) => {
    isFolderEmpty(testEmptyFolder)
      .then((isEmpty: boolean) => {
        console.error('it got info from the deleted folder');
        done();
      })
      .catch((error: any) => {
        expect(!!error).toBe(true);
        done();
      });
  });

});
