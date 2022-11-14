import React from 'react'
import {StyledHeader,StyledHeaderP} from "./styled/StyledHeader"
function Header() {
  return (
    <StyledHeader>
        <h1>
            Where is the World
        </h1>
        <StyledHeaderP>
        <i class="fa-solid fa-moon"></i> Dark Mode
        </StyledHeaderP>

    </StyledHeader>
  )
}

export default Header