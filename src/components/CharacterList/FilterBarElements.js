import styled from "styled-components";

export const Bar = styled.div`
    box-shadow: 1px 9px 10px #e8e6e6;
    @media screen and (max-width: 600px) {
        height: 150px;
        input[type=text], button, a {
            font-size: 14px;
            margin: 2em;
        }
      }
      @media screen and (max-width: 1400px) {
        input[type=text], button, a {
            font-size: 14px;
            margin: 2em;
        }
      }
      @media screen and (max-width: 1100px) {
        height: 150px;
        input[type=text], button, a {
            font-size: 14px;
            margin: 2em;
        }
      }
`

export const Input = styled.input`
    box-shadow: 1px 9px 10px #e8e6e6;
    width: 70%;
    font-size: 18px;
    margin: 1em 3em;
    padding: 1em 2em;
    border: 1px solid #dce6f0;
    border-radius: 100px;
    resize: vertical;
`

export const Button = styled.button`
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin: 1em 2em;
    padding: 1em 4em;
    background-color: #e83e27;
    border-radius: 100px;
    text-decoration: none;
`