import { MainText } from "../../styledHelpers/Headers";
import { OfferIcon, DesktopTileDiv, MobileTileDiv } from "./OfferStyles";

export function MobileTile(props) {
  return (
    <MobileTileDiv>
      <div>
        <OfferIcon icon={props.icon} />
      </div>
      <MainText>{props.text}</MainText>
    </MobileTileDiv>
  );
}

export function DesktopTile(props) {
  return (
    <DesktopTileDiv>
      <div>
        <OfferIcon icon={props.icon} />
      </div>
      <MainText>{props.text}</MainText>
    </DesktopTileDiv>
  );
}

export default { DesktopTile, MobileTile };
