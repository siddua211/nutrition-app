import './App.css';
import {useState} from 'react';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom';
import LookForm from './components/LookForm'
import MacroCounter from './components/MacroCounter';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

function App() {
  
  const [foods, setFoods] = useState([]);
  const [totCals, setTotCals] = useState(0);
  const [totCarbs, setTotCarbs] = useState(0);
  const [totFats, setTotFats] = useState(0);
  const [totProtiens, setTotProtiens] = useState(0);

  const addFood = (food) => {
    setFoods(prevState => [...prevState, food])
    setTotCals(eval(totCals) + eval(food.calories))
    setTotCarbs(eval(totCarbs) + eval(food.carbs))
    setTotFats(eval(totFats) + eval(food.fats))
    setTotProtiens(eval(totProtiens) + eval(food.protiens))
    console.log(food)
  }

  const deleteFood = (id) => {
    const foodToDel = foods.find(f => f.id === id)
    const macros = [foodToDel.carbs, foodToDel.fats, foodToDel.protiens, foodToDel.calories]
    setTotCals(eval(totCals) - eval(macros[3]))
    setTotCarbs(eval(totCarbs) - eval(macros[0]))
    setTotFats(eval(totFats) - eval(macros[1]))
    setTotProtiens(eval(totProtiens) - eval(macros[2]))
    setFoods(prevState => prevState.filter(f => f.id !== id))
  }

  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  }

  return (
    <BrowserRouter>
      <Pages isSidebar={isSidebar} toggleSidebar={toggleSidebar} addFood={addFood} totCals={totCals} totCarbs={totCarbs} totFats={totFats} totProtiens={totProtiens} foods={foods} deleteFood={deleteFood}/>
      <LookForm/>
   </BrowserRouter>
  );
}



export default App;
