import React, { useEffect } from "react";

const VideoList=({videos,choosenVideo})=>{

    useEffect(()=>
        {
            choosenVideo(videos[0]);
        },[videos])

    return (
        <div>
            {
                videos && videos.map((video,index)=>(
                    <div key={index} style={{outline:"1px solid gray",padding:"5px",margin:"5px"}}
                    onClick={()=>choosenVideo(video)}>

                        <div className="video-container">
                            <img style={{objectFit: "fill"}}
                            src={video.snippet.thumbnails.default.url}
                                alt={video.snippet.title}>
                            </img>

                            <div>
                                <h4>{video.snippet.title}</h4>
                                <p>{video.snippet.channelTitle}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default VideoList;