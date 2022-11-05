import React from 'react'
import Home from './Home'
import styled from 'styled-components';
import FoodList from '../components/FoodList';
import MacroCounter from '../components/MacroCounter';

function Pages({toggleSidebar, isSidebar, addFood, totCals, totCarbs, totFats, totProtiens, foods, deleteFood}) {
  return (
    <Centered>
      <Home isSidebar={isSidebar} toggleSidebar={toggleSidebar} addFood={addFood} totCals={totCals} totCarbs={totCarbs} totFats={totFats} totProtiens={totProtiens} foods={foods} deleteFood={deleteFood}/>
      <MacroCounter totCals={totCals} totCarbs={totCarbs} totFats={totFats} totProtiens={totProtiens}/>
      <FoodList foods={foods} deleteFood={deleteFood}/> 
    </Centered>
  )
}

const Background = styled.div`
  background: linear-gradient(35deg, #494949, #313131);
`

const Centered = styled.div`

  margin-left: 2%;
  margin-right: 2%;
  position: relative;
`

export default Pages