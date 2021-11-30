import { GreenHeading, H2Styled } from "../../styledHelpers/Headers";
import styled from "styled-components";
function SectionHeading(props) {
  return (
    <SectionHeadingDiv>
      <GreenHeading>{props.name}</GreenHeading>
      <H2Styled>{props.title}</H2Styled>
    </SectionHeadingDiv>
  );
}

const SectionHeadingDiv = styled.div`
  padding: 10px 0;
`;

export default SectionHeading;
