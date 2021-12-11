import { MainText } from "../../styledHelpers/Headers";
import { OfferIcon, TileDiv, IconWrapper } from "./OfferStyles";

export function Tile(props) {
  return (
    <TileDiv>
      <IconWrapper>
        <OfferIcon icon={props.icon} />
      </IconWrapper>
      <MainText>{props.text}</MainText>
    </TileDiv>
  );
}

export default { Tile };
