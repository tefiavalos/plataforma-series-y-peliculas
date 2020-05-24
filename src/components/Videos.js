import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const VideoStyled = styled.article``
//no se ven los videos pero el fecth trae la ingo
const Videos = () => {
    const paramsVideo= useParams()
    const videos = useFetch(`https://api.themoviedb.org/3/${[paramsVideo.media]}/${[paramsVideo.id]}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    return(
        <VideoStyled>
            {videos && videos.results && videos.results.map((video) => {
                return(
                    <p>{video.name}</p>
                )
            })}
        </VideoStyled>
    )
}

export default Videos