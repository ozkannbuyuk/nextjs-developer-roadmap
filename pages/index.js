import styled from "styled-components";

import LinkButton from "/components/atoms/LinkButton";
import SocialArea from "/components/organisms/SocialArea";
import device from "/utils/device";

const HomeArea = styled.div`
  margin: auto;
  padding: 16px;
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: top;
  box-sizing: border-box;
  @media ${device.tablet} {
    max-width: 400px;
    align-content: center;
    text-align: center;
    grid-auto-flow: row;
  }
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid var(--primary);
  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

const Hello = styled.span`
  line-height: 1em;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
`;

const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 16px;
  font-size: 42px;
  font-weight: 900;
  @media ${device.mobileL} {
    font-size: 36px;
  }
`;

const Color = styled.span`
  color: var(--primary);
`;

export default function Home() {
  return (
    <HomeArea>
      <Avatar src="avatar.jpeg" width={200} height={200} />
      <div>
        <Hello>👋 Hi, I'm</Hello>
        <H1>
          <Color>Özkan Büyük</Color>
        </H1>
        <p>
          I'am a Full-Stack Developer
          <br />
          <br />I have over 10 years of experience in web and mobile
          development. Throughout this period, I have worked in software-focused
          companies and provided software support to clients individually. I
          started my software journey with Php and Java, and since then, I have
          developed numerous web and mobile applications.
        </p>
        <p>Connect with me:</p>
        <SocialArea
          data={{
            linkedin: "https://www.linkedin.com/in/ozkanbuyuk/",
          }}
        />
        <p>
          <LinkButton icon="chevron-right" href="/frontend-developer-roadmap">
            <b>Frontend Developer Roadmap</b>
          </LinkButton>
        </p>
      </div>
    </HomeArea>
  );
}
