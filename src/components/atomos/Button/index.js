import styled from "styled-components"
import PropTypes from "prop-types"

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 0;
  background-color: ${props => (props.primary ? "#05b993;" : "#705ecf")};
  transition: all 0.5s;

  &&:hover {
    opacity: 0.8;
  }
`

Button.propTypes = {
  height: PropTypes.string,
}

Button.defaultProps = {
  type: "button",
  height: 40,
}

export default Button
