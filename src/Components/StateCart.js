import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StatesContext } from '../context/StatesContext'
import {StyledStateCart} from "./styled/StyledStateCart"

function StateCart(props) {
const {setReviewedCOuntry} = useContext(StatesContext)
const navigate = useNavigate()
  return (
    <StyledStateCart onClick={()=>{
      setReviewedCOuntry(props.state)
      navigate("/StatePage")
    }}>
        <img src={props.state.flags.png}>
        
        </img>

    <div>

        <h1>{props.state.name.official}</h1>

         <p>Population:<span>{props.state.population}</span></p>   

         <p>Region:<span>{props.state.region}</span></p>   

         <p>Capital:<span>{props.state.capital}</span></p>   


    </div>

    </StyledStateCart>
  )
}

export default StateCart