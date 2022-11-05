import React from 'react'
import FoodCard from './FoodCard'
import styled from 'styled-components';
import { TrashIcon, PencilIcon} from '@heroicons/react/24/outline';

function FoodItem({food}) {
  return (

        <FoodCard food={food}/>

  )
}




export default FoodItem