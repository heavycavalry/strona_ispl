import styled from "styled-components";
import { Section } from "../../styledHelpers/Section";
import Theme from "../../styledHelpers/Theme";

export const HomeSection = styled(Section)`
  background: url(${`${process.env.PUBLIC_URL}/assets/images/home-img.jpg`})
    no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const HomeOverlayDiv = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 50%);
  color: white;
  border-radius: 20px;
  padding: 20px 0;
  @media ${Theme.Breakpoints.tablet} {
    max-width: 65%;
    float: right;
    padding: 10px 20px;
    margin-top: 80px;
  }
`;
export const Article = styled.article`
  max-width: 500px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 15px 20px;
  background: ${Theme.Colors.green};
  border-radius: 20px;
  color: white;
  font-size: 20px;
  &:hover {
    background: ${Theme.Colors.greenDark};
    box-shadow: ${Theme.Colors.shadow};
  }
`;
