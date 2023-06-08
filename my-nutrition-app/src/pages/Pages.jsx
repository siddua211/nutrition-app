import React from 'react'
import Home from './Home'
import styled from 'styled-components';
import FoodList from '../components/FoodList';
import MacroCounter from '../components/MacroCounter';
import {Route, Routes} from 'react-router-dom';
import Searched from '../pages/Searched'

function Pages({toggleSidebar, isSidebar, addFood, totCals, totCarbs, totFats, totProtiens, foods, deleteFood}) {
  return (
    <Centered>
      <Routes>
          <Route path='/' element={<Home isSidebar={isSidebar} toggleSidebar={toggleSidebar} addFood={addFood} totCals={totCals} totCarbs={totCarbs} totFats={totFats} totProtiens={totProtiens} foods={foods} deleteFood={deleteFood}/>}/>
          <Route path='/searched/:search' element={<Searched/>}/>
      </Routes>
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