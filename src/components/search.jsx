import { useNavigate } from "react-router-dom";
import Axios from "axios";


export default function Search(props){


    // Axios.post("/", {
    //     query: props.squery,
    // })
    // .then((response) => {
    //     if(!response.data){
    //       console.log("error")
    //     }
    // });

    const sendQuery = () => {
        Axios.post("http://localhost:3000/sendQuery", {
          query: props.squery,
        }).then((response) => {
          console.log(response);
          props.setsearchResults(response);
        });
      };





    const navigate = useNavigate();

    function handlekeypress(target) {
      var askQuery = document.getElementById('input_query').value
      if (target.charCode == 13 && askQuery != "" && askQuery != null) {
        
        navigate("/search");
        console.log(props.squery)
        sendQuery();
      }

    }





    return (
      <div className="">
        <h1 className="rainbow-text text-8xl text-[#141414] pt-10 font-[favorit] text-transparent bg-clip-text bg-gradient-to-r from-[#000428] to-[#004e92]">Riphhh</h1>
        <div className="mt-10">
          <input
            id="input_query"
            type="text"
            placeholder="Search"
            className="rounded-md text-center w-80 h-10 bg-[#e7d6c4]"
            onKeyPress={handlekeypress}
            onChange={(e) => {
              props.setquery(e.target.value);
            }}
            required
          />
        </div>
        <footer className="font-bold mt-5" >Made with ☕ by <a href="https://twitter.com/shubhamlakheraa" className="hover:underline " target = "_blank" rel = "noopener noreferrer">shubham lakhera</a> </footer>
      </div>
    );
}