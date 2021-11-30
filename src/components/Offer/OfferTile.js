import { OfferIcon, OfferTileDiv } from "./OfferStyles";

function OfferTile(props) {
  return (
    <OfferTileDiv>
      <div>
        <OfferIcon icon={props.icon} />
      </div>
      <p>{props.text}</p>
    </OfferTileDiv>
  );
}

export default OfferTile;
