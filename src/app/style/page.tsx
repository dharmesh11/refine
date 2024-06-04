"use client";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const StylingWithProp = styled.h3`
  margin:20px 0;
`;

const Button = styled.button<{ $primary?: boolean; }>`
  
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  cursor:pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  &:hover {
    color: red; // <Thing> when hovered
  }

`;

const Section = styled.div<{ $divColor?: string; }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$divColor || "#000"};
  background: #e1e1e1;
  border: none;
  border-radius: 3px;
  &:hover{
    color:blue;
  }
`;
export default function StyleCompo() {
  




  return (
    <div>
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
        <div>
          <StylingWithProp>
            <h3>Styling with Prop</h3>
            <Button>Normal</Button>
            <Button $primary>Primary</Button>

          </StylingWithProp>
        </div>

        <Section>
          Default style color
        </Section>
        <Section $divColor='red' >
          style with color  
        </Section>

    </div>
  );
}
