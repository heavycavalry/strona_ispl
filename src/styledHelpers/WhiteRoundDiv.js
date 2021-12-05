import Theme from "./Theme";
import styled from "styled-components";
export const WhiteBoardDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: ${Theme.Colors.shadow};
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default WhiteBoardDiv;
