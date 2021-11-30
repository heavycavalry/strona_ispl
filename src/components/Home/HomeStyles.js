import styled from "styled-components";
import Section from "../../styledHelpers/Section";
import Theme from "../../styledHelpers/Theme";

export const HomeSection = styled(Section)`
  background: url(${`${process.env.PUBLIC_URL}/assets/images/home-img.jpg`})
    no-repeat center;
  background-size: cover;
  max-width: 100vw;
  padding-top: 50px;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  @media (min-width: 560px) {
  }
`;

export const HomeOverlayDiv = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 50%);
  color: white;
  border-radius: 20px;
  @media (min-width: 560px) {
    position: relative;
  }
`;
export const Article = styled.article`
  max-width: 500px;
  @media (min-width: 560px) {
  }
`;

export const Button = styled.button`
  position: absolute;
  padding: 10px 20px;
  background: ${Theme.Colors.green};
  border-radius: 10px;
  color: white;
`;
