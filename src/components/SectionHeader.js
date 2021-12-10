import { GreenHeading, H2Styled } from "../styledHelpers/Headers";
import styled from "styled-components";
function SectionHeading(props) {
  return (
    <Header>
      <GreenHeading>{props.name}</GreenHeading>
      <H2Styled>{props.title}</H2Styled>
    </Header>
  );
}

const Header = styled.header`
  padding: 10px 0;
`;

export default SectionHeading;
