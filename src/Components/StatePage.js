import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StatesContext } from '../context/StatesContext'
import {StyledStatePage} from "./styled/StyledStatePage"
import {StyledStatePageButton} from "./styled/StyledStatePage"

import {StyledStatePageDiv} from "./styled/StyledStatePage"
import {StyledStatePageImg} from "./styled/StyledStatePage"
import {StyledStatePageStateData} from "./styled/StyledStatePage"
import {StyledStatePageStateDataDiv} from "./styled/StyledStatePage"
import {StyledStatePageStateDataDivTextDiv} from "./styled/StyledStatePage"
import {StyledStatePageStateDataDivBorderCountriesDiv} from "./styled/StyledStatePage"
import {StyledStatePageStateDataDivBorderCountriesDivCountry} from "./styled/StyledStatePage"
function StatePage( props) {
    const {reviewedCountry} = useContext(StatesContext)
const navigate = useNavigate()
useEffect(()=>{


},[])
  return (
    <StyledStatePage>
        <StyledStatePageButton onClick={()=>{navigate("/")}}> Go Back</StyledStatePageButton>
                    <StyledStatePageDiv>

                    <StyledStatePageImg src={reviewedCountry.flags.png}>


                    </StyledStatePageImg>



                    <StyledStatePageStateData>
                        <h1>{reviewedCountry.name.official}</h1>
                        <StyledStatePageStateDataDiv>

                                        <StyledStatePageStateDataDivTextDiv>
                                                <p>Common Name:{reviewedCountry.name.common}</p>
                                        
                                                <p>Region:{reviewedCountry.region}</p>
                                                <p>Sub Region:{reviewedCountry.subregion}</p>


                                            
                                        </StyledStatePageStateDataDivTextDiv>
                                        
                                        
                                        
                                        <StyledStatePageStateDataDivTextDiv>

                                        <p>Capital:{reviewedCountry.capital}</p>
                                        <p>Population:{reviewedCountry.population}</p>
                                                <p>Curencies:{Object.values(reviewedCountry.currencies).map((curency)=>{
                                                            return curency.name
                                                                })} </p>
                                                

                                        </StyledStatePageStateDataDivTextDiv>

                        </StyledStatePageStateDataDiv>

                        <StyledStatePageStateDataDivBorderCountriesDiv>
                        {Object.values(reviewedCountry.borders).map((border)=>{
                              return       <StyledStatePageStateDataDivBorderCountriesDivCountry>{border}</StyledStatePageStateDataDivBorderCountriesDivCountry>

                                                                })}

                        </StyledStatePageStateDataDivBorderCountriesDiv>

                    </StyledStatePageStateData>



                    </StyledStatePageDiv>
    </StyledStatePage>
 
  )
}

export default StatePage