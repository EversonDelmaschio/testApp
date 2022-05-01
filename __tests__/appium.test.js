import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
const PORT = 4723;
const config = {
  platformName: 'iOS',
  platformVersion: '15.0',
  deviceName: 'iPhone 13',
  app: '/Users/eversondelmaschio/Library/Developer/Xcode/DerivedData/testApp-cixurbzwjaurreayxpdgdlilkgtb/Build/Products/Debug-iphonesimulator/testApp.app', // relative to root of project
  automationName: 'XCUITest',
};
const driver = wd.promiseChainRemote('0.0.0.0', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
});

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
});

test('appium button click', async () => {
  expect(await driver.elementByAccessibilityId('saldo').getValue()).toBe(
    '1000',
  );
  await driver.elementByAccessibilityId('button-deposito').click();
  await driver.elementByAccessibilityId('valor').type(20);
  await driver.elementByAccessibilityId('button-transaction').click();
  const counter = await driver.elementByAccessibilityId('saldo').getValue();
  expect(counter).toBe('1020');
});
