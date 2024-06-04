import styled from "styled-components";


export const Button = styled.button<{ $primary?: boolean; }>`

  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#ff4d4f" : "#1777ff"};
  
  color: #fff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid transparent;
  border-radius: 3px;
  cursor:pointer;
`;

export const Wrapper = styled.section`
margin:20px auto;
max-width:960px;
text-align:center;
`;