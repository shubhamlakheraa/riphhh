// import puppeteer from "puppeteer"


// export default async function scrapeReddit(postQuery) {
//     // console.log(postQuery)

//     const browser  = await puppeteer.launch({
//         // headless: false,
//         // "slowMo: 250,"
//     });    


//     const page = await browser.newPage();
//     await page.goto("https://google.com", {
//         waitUntil: 'networkidle2',
//     });



//     await page.waitForSelector('input[name=q]');
//     const finalQuery = postQuery;
//     const sites = [" hackernews", " reddit", " producthunt", " indiehackers"];
//     const final_results = new Array();

//     for(let i=0;i<sites.length;i++){

//         await page.$eval('input[name=q]', (el,finalQuery, sites,i) => {
//             el.value = `${finalQuery + sites[i]}`;
//         }, finalQuery, sites,i)

//         await page.focus('input[name=q]');
//         await page.keyboard.press('Enter');
//         await page.waitForSelector('.MjjYud');


//         const text = await page.evaluate(() => { 
//             const result = new Array;
//            document.querySelectorAll('.LC20lb.MBeuO.DKV0Md').forEach((el) => {
//             result.push(new Object({title: el.textContent}))
//            })
//            const temp = [];
//            document.querySelectorAll("div.yuRUbf a").forEach((el) => {
//            temp.push(el.href);
//         })
     
    
//         const new_result = result.map((obj, i) => (
//         {
//             ...obj,
//             link: temp[i]
    
//         }))
    
//     // Adding Key property to the new_result array.
//         // new_result.forEach((res) => {
//         //     res.key = res.link.slice(-8, -1);
//         // })
    
    
//         return new_result;
          
    
        
//     })
//     final_results.push(text);
    
//     }

//     // console.log(text);
//     await browser.close();
//     return final_results;

// };


export async function scrapeReddit(postQuery) {
    const sites = ["hackernews", "reddit", "producthunt", "indiehackers"];
    const final_results = [];
  
    for (let i = 0; i < sites.length; i++) {
      const query = postQuery + " " + sites[i];
      const response = await fetch(`https://www.google.com/search?q=${query}`);
  
      if (response.ok) {
        const text = await response.text();
  
        const result = [];
        const regex = /<h3 class="[^"]*"><a href="([^"]*)"[^>]*>([^<]*)<\/a><\/h3>/g;
        let match;
        while ((match = regex.exec(text)) !== null) {
          result.push({
            title: match[2],
            link: match[1],
          });
        }
  
        final_results.push(result);
      }
    }
  
    return final_results;
  }