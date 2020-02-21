import styled from "styled-components"
import Button from "../Button"

const ButtonLink = styled.a`
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 14px;
  padding: 10px 15px;
  padding: 15px 20px;
  border-radius: 4px;
  background-color: ${props => (props.primary ? "#05b993;" : "#705ecf")};
  transition: all 0.5s;

  &&:hover {
    opacity: 0.8;
  }
`

export default ButtonLink
