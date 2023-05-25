import React,{useState} from "react";
// import youtube from "./apis/youtube";
import SearchVideos from "./components/SearchVideos";
import VideoList from "./components/VideoList";
import "./style.css"

import PlaySelectedVideo from "./components/PlaySelectedVideo";

function App() {

  const [videos,setVideos] = useState([])

  const [selectedVideo,setSelectedVideo] = useState(null)

  return (
    <div>
     

      <SearchVideos addVideos={setVideos}/>

      <div style={{display:"flex"}}>
        <div style={{width:"75vw"}}>
          <PlaySelectedVideo video={selectedVideo}/>
        </div>
        <div style={{width:"30vw"}}>
            <VideoList videos={videos}  choosenVideo={setSelectedVideo}/>
        </div>
      </div>
      


    </div>
  );
}

export default App;
