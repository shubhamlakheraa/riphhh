import puppeteer from "puppeteer"

export default async function scrape(postQuery) {
    // console.log(postQuery)
    const browser  = await puppeteer.launch({
        // headless: false,
        // "slowMo: 250,"
    });    
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/news", {
        waitUntil: 'networkidle2',
    });
    await page.waitForSelector('input[name=q]');
    const finalQuery = postQuery;
    await page.$eval('input[name=q]', (el,finalQuery) => {
        el.value = `${finalQuery}`;
    }, finalQuery)
    
    await page.focus('input[name=q]');
    await page.keyboard.press('Enter');
    await page.waitForSelector('.Story');
    


     const text = await page.evaluate(() => {
        const result = new Array;
       document.querySelectorAll('.Story_title').forEach((el) => {
        result.push(new Object({title: el.textContent}))
       })
       const temp = [];
       document.querySelectorAll("div.Story_title [href*='https://news.ycombinator.com/item?id=']").forEach((el) => {
       temp.push(el.href);
    })
 

    const new_result = result.map((obj, i) => (
    {
        ...obj,
        link: temp[i]

    }))

// Adding Key property to the new_result array.
    new_result.forEach((res) => {
        res.key = res.link.slice(-8, -1);
    })


    return new_result;
      

    
})


    // console.log(text);
    await browser.close();
    return text;

};

