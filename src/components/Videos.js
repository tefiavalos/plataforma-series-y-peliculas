import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const VideoStyled = styled.article`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
.iframe{
 width: 280px;
 margin: 10px;
 iframe{
     width:100%
 }
 h4{
     font-weight: 300;
     font-size: 20px;
 }
 p{
    font-weight: 300;
     font-size: 15px;
 }
}
 @media(max-width: 910px){
     .iframe{
     width: 210px;
     h4{
         font-size: 15px;
         margin: 5px 0;
     }
     p{
         font-size: 10px;
         margin: 5px 0;
     }
 }
}
`


const Videos = () => {
    const paramsVideo = useParams()
    const videos = useFetch(`https://api.themoviedb.org/3/${[paramsVideo.media]}/${[paramsVideo.id]}/videos?api_key=6a93319b2d78795675b8bd9aa0965a95&language=en-US`)
            // ಠ_ಠ 
    console.log(videos)
    return (
        <VideoStyled>

            {videos && videos.results && videos.results.map((video) => {
                return (
                    <div className="iframe">
                        <iframe
                            id="player"
                            type="text/html"
                            src={`https://www.youtube.com/embed/${video.key}`}
                        />
                        <h4>{video.name}</h4>
                        <p>{video.type}</p>
                    </div>
                )
            })}

        </VideoStyled>
    )
}

export default Videos
