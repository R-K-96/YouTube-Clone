import React,{useState,useEffect} from "react"
import youtube from "../apis/youtube"


const SearchVideos=({addVideos})=>{

    const [searchTerm,setSearchTerm] = useState("React Tutorials")
    
    useEffect(()=>{
        getDataFromApi();
    },[])
  
    function getDataFromApi(){

            youtube.get("/search",
        {
            params :{
            q : searchTerm,
            type :"video",
            videoCaption:"any"
            }
        })
        .then((response) => addVideos(response.data.items))
        .catch((err)=>console.log("Error"))
        }


    return(
        <div className="mainPage-header">
          
            <h1>You<span style={{color:"red"}}>Tube</span></h1>
           
            <input className="searchInput" type="text" placeholder="Search"
                style={{width:"70%",height:"20px"}}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />

            <button className="searchBtn" onClick={getDataFromApi}>Search</button>

        </div>
    )

}

export default SearchVideos;