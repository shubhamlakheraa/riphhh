// import express from "express"
// const app = express();

// import bodyParser from "body-parser"; 
// import cors from 'cors'
// import scrape from "./scrape.js"
// import scrapeReddit from "./scrapeReddit.js"
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));




// app.post("/sendQuery", async (req, res) => {
//  const postQuery = req.body.query
//   console.log(postQuery);
//   // res.send("Ok")
//   const hndata = await scrapeReddit(postQuery);
//   console.log(hndata);
//  res.send(hndata);


// })






// app.listen(3000, ()=> {
//     console.log("Server running on port 3000");
// })


import scrape from "./scrape.js"
import scrapeReddit from "./scrapeReddit.js"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const postQuery = req.body.query;
    console.log(postQuery);
    const hndata = await scrapeReddit(postQuery);
    console.log(hndata);
    res.send(hndata);
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }
}
