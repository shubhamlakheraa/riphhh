import hackernewslogo from "../assets/hackernews.png"
import indielogo from "../assets/indiehackers.png"
import redditlogo from "../assets/reddit.png"
import producthuntlogo from "../assets/product-hunt.png"
import anonymouslogo from "../assets/anonymous.png"
import Search from "./search"

export default function Result(props){

  const content = props.searchResults.data.map((res) => 
  res.map((single) => 
  <div className=" border-[#141414] h-[250px] w-[15%] p-4 m-4 hover:border-[#753a88] hover:scale-125 hover:duration-75 overflow-hidden rounded-lg bg-[#e7d6c4]">
    
    {/* <img src={single.link.search("ycombinator") != -1 ? hackernewslogo: single.link.search("reddit") != -1  ? redditlogo: single.link.search("indiehackers") != -1  ? indielogo: single.link.search("producthunt") != -1  ? producthuntlogo: anonymouslogo  } className="float-left pr-2"/> */}
  <p className="pr-1 text-start font-bold text-[#ff6600]" >{single.title}</p> 
  <p className="">The safe and unsafe modifier keywords can be  </p>
   
  
    

     <a href={single.link} className="hover:underline " target = "_blank" rel = "noopener noreferrer">Link</a>
  {/* <p className="text-[#141414] " >{single.title}</p>  */}
    

</div>
  )) 

  

    return (
     <div>
    
      <Search setquery={props.setquery} squery={props.searchquery}  setsearchResults = {props.setsearchResults}/>

     
      <div className="flex flex-row flex-wrap min-w-[20%] justify-center">
        
        {content}
      </div>
      </div>
      
    )
}


