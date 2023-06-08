import React from 'react';
import InputForm from '../components/InputForm';
import LookForm from '../components/LookForm'
import FoodList from '../components/FoodList';
import {useState} from 'react';
import styled from 'styled-components';
import MacroCounter from '../components/MacroCounter';

function Home({addFood, toggleSidebar, isSidebar, foods, deleteFood}) {
  return (
    <div>
        <Title>Home Page</Title>
        <InputForm addFood={addFood}/>
        <LookForm/>


    </div>
  )
}

const Centered = styled.div`

  margin-left: 5%;
  margin-right: 5%;
  position: relative;
`

const Title = styled.h1`
  margin: 0 auto;
  color: black;
  margin-bottom: 5%;
  margin-top: 2%;
  border: 4px solid #ff8d8d;
  width: 9%;
  text-align: center;
  border-radius: 2rem;
`

export default Home