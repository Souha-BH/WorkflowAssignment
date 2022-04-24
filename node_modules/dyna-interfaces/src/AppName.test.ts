import "jest";
import {AppName} from "./AppName";

describe('AppName', () => {
  let appName: AppName;
  beforeEach(() => {
    appName = new AppName({
      projectName: 'Projectus',
      end: "BE",
      machineName: 'test-instance',
      mode: "DEV",
      version: {
        major: 12,
        minor: 7,
        patch: 123,
        flag: 'TSK-92496',
      }
    })
  });

  test('set/update', ()=>{
    appName.updateConfig({
      projectName: 'Celestian',
    });
    expect(appName.name).toBe('Celestian--DEV--BE--test-instance');
  });

  test('set/update', ()=>{
    appName.parse('ContactsApp--STAGE--FE--mobile-Samsung');
    expect(appName.getConfig().projectName).toBe('ContactsApp');
    expect(appName.getConfig().end).toBe('FE');
    expect(appName.getConfig().mode).toBe('STAGE');
    expect(appName.getConfig().machineName).toBe('mobile-Samsung');
    expect(appName.getConfig().version.major).toBe(0);
  });

  test('tags/version', ()=>{
    const tags = appName.tags.join();
    expect(tags).toBe('Projectus,DEV,BE,test-instance,v12.7.123-TSK-92496');
  });

  test('invalid project name', ()=>{
    try{
      appName.updateConfig({projectName: 'PRJ--Peace'});
      fail('Should not update project name with delimiter')
    }catch (e) {
      expect(e).not.toBe(undefined);
    }
  });

  test('invalid machine name', ()=>{
    try{
      appName.updateConfig({machineName: ''});
      fail('Should not update machine name with empty value')
    }catch (e) {
      expect(e).not.toBe(undefined);
    }
  });
});
