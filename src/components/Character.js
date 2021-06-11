// Write your Character component here
import React from 'react';
import styled from "styled-components";

export default function Character({data}){

    const Details = styled.ul`
    list-style-type: none;
    margin: 1px;
    `;

    const CharDiv = styled.div`
    `;
    
    return(
        <CharDiv>
            <Details>
            <li>Name: {data.name}</li>
            <li><img src={data.image} alt="character"/></li>
            <li>Status: {data.status}</li>
            <li>Gender: {data.gender}</li>
            <li>Location: {data.location.name}</li>
            <li>Origin: {data.origin.name}</li>
            </Details>
        </CharDiv>
    )


}