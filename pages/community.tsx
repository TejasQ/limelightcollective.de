import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

import Page from "../components/Page";
import Title from "../components/Title";
import { getFromAirTable } from "../util/getFromAirTable";

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
  grid-column: 4 / span 12;
  grid-row: 1 / span 13;

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
  "Get Involved": {
    gridRow: 9,
  },
  "Prayer Dance": {
    gridColumn: 16,
    gridRow: 11,
  },
  "Soul Space": {
    gridRow: 2,
  },
  "Our Community": {
    gridRow: 1,
    gridColumn: 16,
  },
} as const;

const ballImages = {
  "Our Community": {
    style: {
      width: "540px",
      position: "absolute",
      top: "-67px",
      left: "-235px",
    },
    url: "/images/community-circle-2.png",
  },
  "Get Involved": {
    url: "/images/community-circle-5.png",
    style: {
      width: "578px",
      position: "absolute",
      left: "-100px",
      top: "-138px",
    },
  },
  "Prayer Dance": {
    url: "/images/community-circle-4.png",
    style: {
      width: "560px",
      position: "absolute",
      top: "-124px",
      left: "-215px",
    },
  },
  "Soul Space": {
    url: "/images/community-circle-1.png",
    style: {
      width: "500px",
      position: "absolute",
      top: "-67px",
      left: "-160px",
    },
  },
};

const activeBallRows = {
  "Get Involved": {
    ...ballRows["Get Involved"],
    transform: "translate(100px, -50px)",
    animation: "none",
  },
  "Prayer Dance": {
    ...ballRows["Prayer Dance"],
    transform: "translate(-160px, -50px)",
    animation: "none",
  },
  "Soul Space": {
    ...ballRows["Soul Space"],
    transform: "translate(100px, 90px)",
    animation: "none",
  },
  "Our Community": {
    ...ballRows["Our Community"],
    transform: "translate(-140px, 40px)",
    animation: "none",
  },
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
            style={{
              ...(i === currentBall ? activeBallRows : ballRows)[b.Name],
            }}
            key={b.Name}
          >
            <div style={{ position: "relative", zIndex: 50 }}>{b.Name}</div>
            <img alt="LOL" style={ballImages[b.Name].style} src={ballImages[b.Name].url} />
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
