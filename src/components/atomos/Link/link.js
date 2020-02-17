import styled from "styled-components"

const Link = styled.a`
  display: inline-block;
  padding: 10px 10px;
  border-radius: 3px;
  background: transparent;
  border: 2px solid white;
  margin: 0 14px;
  color: #202428;
  transition: all 0.5s;

  &&:hover {
    color: #05b993;
  }
`
export default Link
