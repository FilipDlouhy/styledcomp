import styled from "styled-components";
export const StyledHeader = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
height:60px;
border-bottom:0.05rem solid gray;
padding:10px 70px;
width:100%;
font-family: 'Roboto Condensed', sans-serif;
color:${({theme})=>theme.main.text};
background-color:${({theme})=>theme.main.background};
h1{
    font-weight:bolder;
    font-size:1.5rem;

}


`
export const StyledHeaderP = styled.p`
    font-weight:bolder;
    font-size:1rem;
    word-spacing:5px;
    cursor: pointer;
    color:${({theme})=>theme.main.text};
    background-color:${({theme})=>theme.main.background};
    transition:0.2s;
    &:hover{
        color:blue ;
    }
`