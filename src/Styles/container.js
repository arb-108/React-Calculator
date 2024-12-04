import styled from "styled-components";
import {darken} from "polished";
import { IoLogoGithub } from "react-icons/io";

const bgColorRed = "#ff5f6d";
const bgColorOrange = "#ffc371";
const displayColor = "#333a4d";
const lightOrange = "#fea170";
const mediumOrange = "#f78d6c";
const borderRadius = "0.75rem";

export const ContainerDiv=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:4rem;
    width: 100%;
    height: 100vh;
    background: hsla(355, 100%, 69%, 1);

background: linear-gradient(45deg, hsla(355, 100%, 69%, 1) 0%, hsla(35, 100%, 72%, 1) 100%);

background: -moz-linear-gradient(45deg, hsla(355, 100%, 69%, 1) 0%, hsla(35, 100%, 72%, 1) 100%);

background: -webkit-linear-gradient(45deg, hsla(355, 100%, 69%, 1) 0%, hsla(35, 100%, 72%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF5F6D", endColorstr="#FFC371", GradientType=1 );
`
export const CalcDiv=styled.div`
    width: 35rem;
    height: 45rem;
    border-radius: 1rem;
    background: lightgrey;
    overflow: hidden;
`
export const UpperDiv=styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    height: 30%;
    background: blue;
    overflow: hidden;
    height: calc(30% + 1px);
    width: 100%;
    background: ${displayColor};
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};

`
export const DisplayDiv=styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50%;
    color:white;
    padding: 0 10px;
    &.result{
        color: white;
        font-size: 4.5rem;
    }
    &.current{
        color:grey;
    }
`
export const LowerDiv=styled.div`
    display: grid;
    grid-template-columns: repeat(4,25%);
    height: 70%;

`
export const Controlbtn=styled.button`
    width:100%;
    font-size: 1.5rem;
    font-weight: 100;
    color: black;
    background-color: ${(props) => props.bg || "white"};
    border: none;
    padding: 10px;
    /* border-radius: 5px; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-right: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => darken(0.1, props.hoverbg || "#ddd")}; /* Darkens hoverbg by 10% */
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
`
export const Gitlogo=styled( IoLogoGithub)`
    font-size: 4rem;
    color:black;
`