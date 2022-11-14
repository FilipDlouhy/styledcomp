import React, { useEffect, useState } from 'react'
import {StyledContainer} from "./styled/StyledContainer"
import { ThemeProvider } from 'styled-components'
import Header from './Header'
import ContentContainer from './ContentContainer'
import BellowNaw from './BellowNaw'
import axios from 'axios'
import { StatesContext } from '../context/StatesContext'
import StatePage from './StatePage'
import { useContext } from 'react'
import { BrowserRouter as Router,Routes,Route,Link, } from 'react-router-dom'

function Container() {
    const [states,setStates] = useState()
    const [allStates,setAllStates] = useState()
    const [dark,setDark] = useState(false)
    const [reviewedCountry,setReviewedCOuntry] = useState()
    const theme = {
        main:{
            background:dark ? "rgba(3, 3, 32, 1)": "white",
            text:dark ? "white": "black"
        }

    }
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>{
            res.data.map((country)=>{
                console.log(country)
            })
            setStates(res.data)
            setAllStates(res.data)
        })

    },[])
  return (
    <StatesContext.Provider value={{reviewedCountry,setReviewedCOuntry,states,setStates,allStates,setAllStates}}>
    <ThemeProvider theme={theme} >
        <Router>
    <StyledContainer>
    <Header/>

                 <Routes>      
                 <Route path={'/'} element={ <ContentContainer/>} />
                <Route path={'/StatePage'} element={<StatePage/>} />
    
              </Routes>

   

    </StyledContainer>
        </Router>
    </ThemeProvider>
    </StatesContext.Provider >
  )
}

export default Container