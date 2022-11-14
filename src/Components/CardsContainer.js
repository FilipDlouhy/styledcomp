import React, { useContext } from 'react'
import { StatesContext } from '../context/StatesContext'
import {StyledCardsContainer} from "./styled/StyledCardsContainer"
import StateCart from './StateCart'

function CardsContainer() {
    const {states} = useContext(StatesContext)
  return (
    <StyledCardsContainer>

    {states&&states.map((state)=>{
        return <StateCart state={state}/>
    })}
    </StyledCardsContainer>
  )
}

export default CardsContainer