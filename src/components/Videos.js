import React from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import API_URL from '../assets/constants';

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
    const videos = useFetch(`${API_URL}${[paramsVideo.media]}/${[paramsVideo.id]}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    return (
        <VideoStyled>

            {videos && videos.results && videos.results.map((video) => {
                return (
                    <div className="iframe">
                        <iframe
                            id="player"
                            type="text/html"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.title}
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