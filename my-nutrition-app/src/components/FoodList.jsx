import React from 'react'
import styled from 'styled-components';
import FoodCard from './FoodCard'

function FoodList({foods, deleteFood}) {
    return (
        <Grid>
            {
                foods.sort((a,b) => b.id-a.id).map(food => (
                    <FoodCard key={food.id} food={food} deleteFood={deleteFood}/>
                ))
            }
        </Grid>
      )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    padding: 4%;
`

export default FoodList