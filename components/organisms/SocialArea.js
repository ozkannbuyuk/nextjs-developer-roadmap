import styled from "styled-components";
import Social from "../molecules/Social";
import device from "/utils/device";

const SocialAreaDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  justify-content: start;
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.mobileL} {
    grid-auto-flow: row;
    justify-items: center;
    grid-template-columns: repeat(3, 50px);
  }
`;

const SocialArea = ({ data: { linkedin } }) => (
  <SocialAreaDiv>
    {linkedin && <Social icon="linkedin" href={linkedin} />}
  </SocialAreaDiv>
);

export default SocialArea;
