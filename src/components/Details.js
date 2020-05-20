import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Details = () => {
return(
    <p>"Hola soy details"</p>
)

}

export default Details