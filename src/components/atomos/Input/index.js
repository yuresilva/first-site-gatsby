import PropTypes from "prop-types"
import styled from "styled-components"

const Input = styled.input`
  margin: 0;
  font-size: 16;
  padding: 10px 15px;
  color: #000;
  border: none;
  letter-spacing: 1px;
  background: #f7f7f7;
`

Input.propTypes = {
  type: PropTypes.string,
}

Input.defaultProps = {
  type: "text",
  height: 40,
}

export default Input
