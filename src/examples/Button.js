import styled from "styled-components"
const color = "blue"

const Button = styled.button`
  /* color: white; */
  color: ${prop => prop.color};
  background: ${props => (props.big ? color : "green")};
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  margin: 1rem;
  padding: 1rem;
`

export default Button
