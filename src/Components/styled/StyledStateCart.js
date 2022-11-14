import styled from "styled-components";
export const StyledStateCart = styled.div`
width:300px;
height:300px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display:flex;
flex-direction:column;
margin:40px;
transition:0.4s;
cursor: pointer;
div{
    width:100%;
    height:50%;
    display:flex;
flex-direction:column;
align-items:start;
justify-content:space-around;
padding:0 40px;
}
img{
    width:100%;
    height:50%;
}
div h1{
    font-size:1.25rem
}
div p{
    font-weight:bolder;
}
div p span{
    font-weight:normal;
    margin-left:5px;
}
&:hover{
    box-shadow: 10px 10px 66px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 66px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 66px -14px rgba(0,0,0,0.75);

}
`