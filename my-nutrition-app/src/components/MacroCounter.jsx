import React from 'react'
import DonutChart from 'react-donut-chart';
import styled from 'styled-components';


function MacroCounter({totCals, totCarbs, totFats, totProtiens}) {
  return (
    <DonutSize>
        <DonutChart         
            interactive = {true}
            legend={false}
            height={Math.round(document.documentElement.clientWidth * .2)}
            width={Math.round(document.documentElement.clientWidth * .2)}
            colors={['#ff8d8d']}
            clickToggle = {false}
            innerRadius={.5}
            outerRadius={.6}
            data={[
                {
                label: `Calories: ${totCals}`,
                value: totCals,
                },
                {
                label: 'Daily Rec',
                value: 2000-totCals,
                isEmpty: true,
                },
            ]}
        />
        <DonutChart         
            interactive = {true}
            clickToggle = {false}
            legend={false}
            height={Math.round(document.documentElement.clientWidth * .2)}
            width={Math.round(document.documentElement.clientWidth * .2)}
            innerRadius={.5}
            outerRadius={.6}
            colors={['#ff8d8d']}
            data={[
                {
                label: `Carbs: ${totCarbs} grams`,
                value: totCarbs,
                },
                {
                label: 'Daily Rec: 325',
                value: 325-totCarbs,
                isEmpty: true,
                },
            ]}
        />
        <DonutChart         
            interactive = {true}
            legend={false}
            height={Math.round(document.documentElement.clientWidth * .2)}
            width={Math.round(document.documentElement.clientWidth * .2)}
            colors={['#ff8d8d']}
            clickToggle = {false}
            innerRadius={.5}
            outerRadius={.6}
            data={[
                {
                label: `Fats: ${totFats} grams`,
                value: totFats,
                },
                {
                label: 'Daily Rec',
                value: 97-totFats,
                isEmpty: true,
                },
            ]}
        />
        <DonutChart         
            interactive = {true}
            legend={false}
            height={Math.round(document.documentElement.clientWidth * .2)}
            width={Math.round(document.documentElement.clientWidth * .2)}

            innerRadius={.5}
            colors={['#ff8d8d']}
            clickToggle = {false}
            outerRadius={.6}
            data={[
                {
                label: `Protien: ${totProtiens} grams`,
                value: totProtiens,
                },
                {
                label: 'Daily Rec',
                value: 70-totProtiens,
                isEmpty: true,
                },
            ]}
        />
    </DonutSize>
  )
}

const DonutSize = styled.div`
    margin-left: 7%;
`


export default MacroCounter