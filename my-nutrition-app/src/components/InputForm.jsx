import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
import {PlusIcon} from '@heroicons/react/24/outline';

export default function InputForm({addFood}) {

        const [food, setFood] = useState('')
        const [calorie, setCalorie] = useState(0)
        const [carb, setCarb] = useState(0)
        const [fat, setFat] = useState(0)
        const [protien, setProtien] = useState(0)
    
        const handleFormSubmit = (e) => {
            e.preventDefault();
            addFood({
                meal: food,
                calories: calorie,
                carbs: carb,
                fats: fat,
                protiens: protien,
                id: Date.now()
            }) 
            setFood("");
            setCalorie(0)
            setCarb(0);
            setFat(0);
            setProtien(0);
        }
    
    
        return (
            <div>
            <FormStyle onSubmit={handleFormSubmit}>   
                <div>
                    <StyledButton
                        aria-label='Add Task'
                        type='submit'><PlusIcon width={20} height={20}/>
                    </StyledButton>

                    <input onChange={(e) => setFood(e.target.value)} type="text" value={food} id='food' placeholder='Enter Food' required/>

                    <input onChange={(e) => setCalorie(e.target.value)} type="number" value={calorie} placeholder='Enter Calories' required min="0"/>

                    <input onChange={(e) => setCarb(e.target.value)} type="number" value={carb} placeholder='Enter Carbs' required min="0"/>
    
                    <input onChange={(e) => setFat(e.target.value)} type="number" value={fat} placeholder='Enter Fats' required min="0"/>
    
                    <input onChange={(e) => setProtien(e.target.value)} type="number" value={protien} placeholder='Enter Protien' required min="0"/>
                </div>
            </FormStyle>
            
        
    
            </div>
        )
    }
    
    const FormStyle = styled.form`

    
        input{
            border: none;
            background: linear-gradient(35deg, #494949, #313131);
            font-size: 1.5rem;
            color: white;
            padding: 1% 3%;
            border-radius: 1rem;
            outline: none;
            width: 10%;
            margin-right: 1%;
        }
    `
const StyledButton = styled.button`
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1% 1%;
        border: none;
        border-radius: 2rem;
        outline: none;
        width: 10%;
        margin-right: 1%;
        border: 2px solid white;
        text-align: center;

    &:hover {
        color: black;
        background: #ff8d8d;
        border: 2px solid black;
    }
`