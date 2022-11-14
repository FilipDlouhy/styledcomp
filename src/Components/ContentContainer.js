import React, { useContext } from 'react'
import {StyledContentContainer} from "./styled/StyledContentContainer"
import BellowNaw from './BellowNaw'
import { StatesContext } from '../context/StatesContext'
import CardsContainer from './CardsContainer'
function ContentContainer() {
    const {states}= useContext(StatesContext)
  return (
    <StyledContentContainer>
    <BellowNaw/>
  
    <CardsContainer/>



    </StyledContentContainer>
  )
}

export default ContentContainer