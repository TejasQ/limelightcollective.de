import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

import Page from "../components/Page";
import Title from "../components/Title";
import { getFromAirTable } from "../util/getFromAirTable";
import { css } from "@emotion/core";

type CommunityProps = {
  balls: {
    Name: string;
    Content: string;
    "Should Show": boolean;
  }[];
};

const LocalTitle = styled.h1`
  font-size: 50px;
  letter-spacing: 16px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
`;

const LocalBall = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  margin: 0 auto;
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  z-index: 100;
  background-size: cover;
  background-position: center;
  background-image: url(/images/community-bg.jpg);
  transform: none;
  grid-column: 2 / span 12;
  grid-row: 2 / span 13;

  @media (min-width: 1024px) {
    grid-column: 4 / span 12;
    grid-row: 1 / span 13;
  }

  p {
    font-size: 1.3rem;
  }
`;

const Container = styled(Page)`
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(/images/community-bg.jpg);
  overflow: hidden;
  text-align: center;
`;

const BallsContainer = styled.div`
  display: grid;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
`;

const Ball = styled.div`
  transition: transform 0.6s cubic-bezier(0.66, 0.19, 0.38, 0.99);
  width: 170px;
  height: 170px;
  display: flex;
  place-content: center;
  place-items: center;
  font-family: "heading";
  font-size: 31px;
  text-transform: uppercase;
  font-style: italic;
  word-break: break-all;
  padding: 16px;
  overflow: hidden;
  color: white;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  overflow: visible;

  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const ballRows = {
  "Get Involved": css`
    grid-row: 15;
    @media (min-width: 1024px) {
      grid-row: 9;
    }
  `,
  "Prayer Dance": css`
    grid-column: 11;
    grid-row: 15;
    @media (min-width: 1024px) {
      grid-column: 16;
      grid-row: 11;
    }
  `,
  "Soul Space": css`
    grid-row: 2;
  `,
  "Our Community": css`
    grid-row: 1;
    grid-column: 11;
    @media (min-width: 1024px) {
      grid-column: 16;
    }
  `,
} as const;

const ballImages = {
  "Our Community": {
    style: {
      width: "540px",
      position: "absolute",
      top: "-97px",
      left: "-249px",
      zIndex: 30,
    },
    url: "/images/community-circle-2.png",
  },
  "Get Involved": {
    url: "/images/community-circle-5.png",
    style: {
      width: "578px",
      position: "absolute",
      left: "-120px",
      top: "-189px",
      zIndex: 30,
    },
  },
  "Prayer Dance": {
    url: "/images/community-circle-4.png",
    style: {
      width: "560px",
      position: "absolute",
      top: "-176px",
      left: "-227px",
      zIndex: 30,
    },
  },
  "Soul Space": {
    url: "/images/community-circle-1.png",
    style: {
      width: "500px",
      position: "absolute",
      top: "-120px",
      left: "-180px",
      zIndex: 30,
    },
  },
};

const activeBallRows = {
  "Get Involved": css`
    ${ballRows["Get Involved"].styles}
    transform: translate(100px, -50px) !important;
    animation: none !important;
  `,
  "Prayer Dance": css`
    ${ballRows["Prayer Dance"].styles}
    animation: none !important;
    transform: translate(-80px, -50px) !important;
    @media (min-width: 1024px) {
      transform: translate(-160px, -50px) !important;
    }
  `,
  "Soul Space": css`
    ${ballRows["Soul Space"].styles}
    animation: none !important;
    transform: translate(80px, 50px) !important;

    @media (min-width: 1024) {
      transform: translate(100px, 90px) !important;
    }
  `,
  "Our Community": css`
    ${ballRows["Our Community"].styles}
    animation: none !important;
    transform: translate(-20px, 40px) !important;

    @media (min-width: 1024px) {
      transform: translate(-140px, 40px) !important;
    }
  `,
} as const;

const CommunityPage = ({ balls }: CommunityProps) => {
  const [currentBall, setCurrentBall] = useState(0);

  return (
    <Container>
      <br />
      <br />
      <br />
      <LocalTitle>Community</LocalTitle>
      <br />
      <br />
      <br />
      <BallsContainer>
        {balls.map((b, i) => (
          <Ball
            onClick={() => setCurrentBall(i)}
            css={{
              ...(i === currentBall ? activeBallRows : ballRows)[b.Name],
            }}
            key={b.Name}
          >
            <div style={{ width: 170, height: 170, position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  height: "100%",
                  transform: "translate(-50%,-50%)",
                  zIndex: 50,
                }}
              >
                {b.Name}
              </span>
              <img alt="LOL" style={ballImages[b.Name].style} src={ballImages[b.Name].url} />
            </div>
          </Ball>
        ))}
        <LocalBall>
          <div style={{ textAlign: "center", maxWidth: "80%" }}>
            <Title>{balls[currentBall].Name}</Title>
            <ReactMarkdown>{balls[currentBall].Content}</ReactMarkdown>
          </div>
        </LocalBall>
      </BallsContainer>
    </Container>
  );
};

export const getStaticProps = async () => {
  const data = await getFromAirTable("Community")
    .select({ fields: ["Name", "Content", "Should Show"] })
    .all();
  return {
    unstable_revalidate: true,
    props: { balls: data.filter((b) => b.fields["Should Show"]).map((d) => d.fields) },
  };
};

export default CommunityPage;
