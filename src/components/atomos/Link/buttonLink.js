import styled from "styled-components"
import Button from "../Button"

const ButtonLink = styled.a`
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 0;
  background-color: ${props => (props.primary ? "#05b993;" : "#705ecf")};
`

export default ButtonLink
