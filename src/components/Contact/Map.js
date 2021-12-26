import styled from "styled-components";

const Map = () => {
  return (
    <MapFrame
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10240.738672572765!2d19.9146546!3d50.0828293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde29498b6e12910e!2sMedycyna%20pracy%2C%20Pracownia%20psychologiczna!5e0!3m2!1spl!2spl!4v1639152176812!5m2!1spl!2spl"
      width="100%"
      allowfullscreen=""
      frameBorder="0"
    ></MapFrame>
  );
};

const MapFrame = styled.iframe`
  margin: 2rem 0;
  height: 25em;
`;

export default Map;
