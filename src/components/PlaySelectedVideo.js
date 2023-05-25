


const PlaySelectedVideo=({video})=>{

    return(
        <div>
            {
                video==null ? <h1>Loading....</h1> :
                (
                    <div className="selectedVideo-container">
                    <iframe width="85%" height="515" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
                    <h2>{video.snippet.title}</h2>
                    <p>{video.snippet.channelTitle}</p>
                    <p>{video.snippet.description}</p>
                    </div>
                )
            }
            
        </div>
    )
}

export default PlaySelectedVideo;