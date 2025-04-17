const { Builder, By, until } = require('selenium-webdriver');

async function checkPageTitle(driver, expectedTitle) {
  const title = await driver.getTitle();
  if (title === expectedTitle) {
    console.log(`Test passed: Page title is "${expectedTitle}"`);
  } else {
    console.log(`Test failed: Expected title "${expectedTitle}", but got "${title}"`);
  }
}

(async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().setTimeouts({ implicit: 2000 });

  try {
    // Test 1: Check homepage loads
    await driver.get('http://localhost:3000/');
    await driver.sleep(1000);
    const title = await driver.getTitle();
    console.log(`Loaded title: ${title}`);

    // Test 2: Basic Calc add
    const basicInput1 = await driver.findElement(By.css('.cheese-calc input:nth-of-type(1)'));
    const basicInput2 = await driver.findElement(By.css('.cheese-calc input:nth-of-type(2)'));
    const addButton = await driver.findElement(By.xpath("//div[contains(@class, 'cheese-calc')]//button[text()='+']"));

    await basicInput1.clear();
    await basicInput2.clear();
    await basicInput1.sendKeys('7');
    await basicInput2.sendKeys('3');
    await addButton.click();
    await driver.sleep(500);
    const basicResult = await driver.findElement(By.css('.cheese-calc .calculator-display span')).getText();
    console.log(`Basic Calc Add Result (7 + 3): ${basicResult}`);

    await basicInput1.clear();
    await basicInput2.clear();
    await basicInput1.sendKeys('cheese');
    await basicInput2.sendKeys('3');
    await addButton.click();
    await driver.sleep(500);
    const basicError = await driver.findElement(By.css('.cheese-calc .calculator-display span')).getText();
    console.log(`Basic Calc Invalid Input Result: ${basicError}`);

    // Test 3: Advanced Calc reverse
    const advInput = await driver.findElement(By.css('.adv-calc input'));
    const reverseButton = await driver.findElement(By.xpath("//div[contains(@class, 'adv-calc')]//button[contains(text(),'REVERSE')]"));

    await advInput.clear();
    await advInput.sendKeys('cheese');
    await reverseButton.click();
    await driver.sleep(500);
    const advReverse = await driver.findElement(By.css('.adv-calc .calculator-display span')).getText();
    console.log(`Advanced Calc Reverse Result: ${advReverse}`);

    const capButton = await driver.findElement(By.xpath("//div[contains(@class, 'adv-calc')]//button[contains(text(),'CAPITALIZE')]"));
    await advInput.clear();
    await advInput.sendKeys('cheese is tasty');
    await capButton.click();
    await driver.sleep(500);
    const advCap = await driver.findElement(By.css('.adv-calc .calculator-display span')).getText();
    console.log(`Advanced Calc Capitalize Result: ${advCap}`);

    const palButton = await driver.findElement(By.xpath("//div[contains(@class, 'adv-calc')]//button[contains(text(),'PALINDROME')]"));
    await advInput.clear();
    await advInput.sendKeys('racecar');
    await palButton.click();
    await driver.sleep(500);
    const advPal = await driver.findElement(By.css('.adv-calc .calculator-display span')).getText();
    console.log(`Advanced Calc Palindrome Result: ${advPal}`);

    // Test 4: Card Obscurer
    const cardInput = await driver.findElement(By.css('.card-obscurer input'));
    const obscureButton = await driver.findElement(By.xpath("//div[contains(@class, 'card-obscurer')]//button[text()='OBSCURE']"));

    await cardInput.clear();
    await cardInput.sendKeys('1234567812345678');
    await obscureButton.click();
    await driver.sleep(500);
    const cardResult = await driver.findElement(By.css('.card-obscurer .calculator-display span')).getText();
    console.log(`Card Obscurer Result: ${cardResult}`);

    await cardInput.clear();
    await cardInput.sendKeys('invalid-card');
    await obscureButton.click();
    await driver.sleep(500);
    const cardError = await driver.findElement(By.css('.card-obscurer .calculator-display span')).getText();
    console.log(`Card Obscurer Invalid Input Result: ${cardError}`);

    // Test 5: Regex Match
    const regexTextInput = await driver.findElement(By.css('.regex-analyzer input:nth-of-type(1)'));
    const regexPatternInput = await driver.findElement(By.css('.regex-analyzer input:nth-of-type(2)'));
    const matchButton = await driver.findElement(By.xpath("//div[contains(@class, 'regex-analyzer')]//button[text()='MATCH']"));

    await regexTextInput.clear();
    await regexPatternInput.clear();
    await regexTextInput.sendKeys('hello world');
    await regexPatternInput.sendKeys('hello');
    await matchButton.click();
    await driver.sleep(500);
    const regexMatch = await driver.findElement(By.css('.regex-analyzer .calculator-display span')).getText();
    console.log(`Regex Match Result: ${regexMatch}`);

    const validateButton = await driver.findElement(By.xpath("//div[contains(@class, 'regex-analyzer')]//button[text()='VALIDATE']"));
    await regexTextInput.clear();
    await regexPatternInput.clear();
    await regexTextInput.sendKeys('Just Letters');
    await validateButton.click();
    await driver.sleep(500);
    const regexValid = await driver.findElement(By.css('.regex-analyzer .calculator-display span')).getText();
    console.log(`Regex Validate Result: ${regexValid}`);
  } catch (err) {
    console.error('Test failed with error:', err);
  } finally {
    await driver.quit();
  }
})();
