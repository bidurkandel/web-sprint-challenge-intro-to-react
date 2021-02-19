import React, {useEffect, useState} from 'react';
import './App.css';
import Character from "./components/Character";
import axios from "axios";
import {BASE_URL} from "./constants/constants";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
    .get(`${BASE_URL}/character/?page=${page}`)
    .then(res => {
      setData(res.data.results)
      setNextPage(res.data.info.next)
      setPreviousPage(res.data.info.prev)
      console.log(res)
    })
  },[page])

  function pageChanger(bool){
    if(nextPage !== null)  setPage(page+1)
  }

  function pageChangerMinus(bool){
    if(previousPage !== null)  setPage(page-1)
  }



  return (
    <div className="App">
      <h1 className="Header">Crazy Rick and Morty Characters I Hope You Enjoy What you See Here</h1>
      <Button onClick={pageChangerMinus}>Previous Window</Button>
      <Button onClick={pageChanger}>Next Window</Button>
      <AppDiv>
      {data.map(i => {
        return (<CharactersDiv>
            <Character data={i} />
          </CharactersDiv>)
      })}
      </AppDiv>

    </div>
  );
}

const h1Style = styled.h1`
color: ${props =>props.theme.primaryColor};
text-align:center;
font-size: 2em;
`;


const CharactersDiv = styled.div`
text-align: center;
font-size: ${props => props.theme.fontSize};
font-family: ${props => props.theme.fontFamily};
padding: ${props => props.theme.padding};

width: 30%;
&:hover{
  background-color:${props => props.theme.primaryColor};;
  color: ${props => props.theme.secondaryColor};;
}
`;

const AppDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`;

const Button = styled.button`
padding:${props => props.theme.padding};
margin: 5px;
`;


export default App;
