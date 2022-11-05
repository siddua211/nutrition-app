import React from 'react'
import styled from 'styled-components';
import { TrashIcon, PencilIcon} from '@heroicons/react/24/outline';

function FoodCard({food, deleteFood, key}) {
  return (
        <Card>
            <FoodButton onClick={() => deleteFood(food.id)}>
              <TrashIcon width={30} height={30}/>
            </FoodButton>
            <h1>{food.meal} </h1>
            <p>Calories: {food.calories}</p>
            <p>Grams of Carbs: {food.carbs} </p>
            <p>Grams of Fats: {food.fats}</p>
            <p>Grams of Protien: {food.protiens}</p>
        </Card>
  )
}

const Card = styled.div`
    border-width:3px; 
    border-style:solid; 
    border-color:black;
    border-radius: 2rem;
    margin-bottom: 10%;
    width: 30rem;
    text-align: center;
    background: linear-gradient(35deg, #494949, #313131);
    overflow: auto;
    color: white;


    h1 {
      color: #ff8d8d
    }
`
const FoodButton = styled.button`
  background: linear-gradient(35deg, #494949, #313131);
  color: #ff8d8d;
  border-radius: 2rem;
  border: 2px solid #ff8d8d;
  margin-top: 5%;
  &:hover {
    color: black;
    outline: green;
    background: white;
    border: 2px solid black;
  }
`


export default FoodCard