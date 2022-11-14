import React, { useContext } from 'react'
import { StatesContext } from '../context/StatesContext'
import {StyledBellowNaw} from "./styled/StyledBellowNaw"
function BellowNaw() { 
     const{ states} = useContext(StatesContext)

    const{ setStates} = useContext(StatesContext)
 const{allStates} = useContext(StatesContext)
  return (
    <StyledBellowNaw>

    <input onChange={(e)=>{
      if(e.target.value.length===0){
        setStates(allStates)
      }else{
        let arr =[]
        if(states.length>0){
          states.map(state=>{
            if(state.name.official.toLowerCase().includes(e.target.value.toLowerCase())){
              arr.push(state)
            }
  
          })
        }else{
          allStates.map(state=>{
            if(state.name.official.toLowerCase().includes(e.target.value.toLowerCase())){
              arr.push(state)
            }
  
          })
        }
  
        setStates(arr)

      }
    }} placeholder='Search for a Country'>
    </input>
    <select
    onChange={(e)=>{
      let arr =[]
      if(e.target.value==="All"){
       arr=allStates
      }else {
        if(states.length > 0){
     
            states.map((state)=>{
              if(state.region ===e.target.value){
                arr.push(state)
              }
            })
          
        

        }else {
          allStates.map((state)=>{
            if(state.region ===e.target.value){
              arr.push(state)
            }
          })
        }

      }
      setStates(arr)
    }} name="contitens" id="contitens">
        <option value="All">All</option>
  <option value="Africa">Africa</option>
  <option value="Americas">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>

</select>

    </StyledBellowNaw>
  )
}

export default BellowNaw