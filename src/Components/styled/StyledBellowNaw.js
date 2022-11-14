import styled from "styled-components";

export const StyledBellowNaw = styled.div`
width:100%;
height:180px;
display:flex;
align-items:center;
justify-content:space-between;

input{
    height: 30px;
    width:250px;
    border:none;
    outline:none;   
border:1px solid lightgray;
font-weight:bold;
text-align:center;
}

select{
    height: 30px;
    width:150px;
    border:none;
    outline:none; 
    color:${({theme})=>theme.main.text};  
border:1px solid lightgray;
font-weight:bold;
text-align:center;
}
    

`