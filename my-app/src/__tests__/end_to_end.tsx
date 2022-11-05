import puppeteer from 'puppeteer';

/**
 * @description End-to-end test where we mimic the interactions of 
 * inputing "Horror" in the search field, then clicking the first movie 
 * in the results. To check if we have the expected result we evaluete 
 * if the title is "100 Bloody Acres" as is expected.
 */


jest.setTimeout(100000);
test('search functionality', async () => {
    //launch browser in headless mode
    const browser = await puppeteer.launch()
    //browser new page
    const page = await browser.newPage();
    //launch URL
    await page.goto('http://localhost:3000/')
    //identify element with id & enter text
    await page.type('#search', 'Horror');
    // Wait for results to appear.
    const allResultsSelector = '.Results';
    await page.waitForSelector(allResultsSelector)
    await page.click(".Results div:nth-child(1) div button")
    // Wait for movieInfo popup
    await page.waitForSelector(".movieInfo")

    // Evaluate the results from the info-box.
        const inner_html = await page.$eval(".movieInfo h3", element => element.innerHTML);
        expect(await page.$eval(".movieInfo h3", (e) => e.innerHTML)).toBe(
            '100 Bloody Acres'
        );

        console.log(inner_html);

    //wait for sometime
    await page.waitForTimeout(4000)
    //browser close
    await browser.close()
});


