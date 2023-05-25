import axios from 'axios'
import React from 'react'

const apiKey= process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params :{
        key : apiKey,
        maxResults : 10,
        part:"snippet"
        }
})