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
  place-content: center;
  place-items: center;
  margin: 0 auto;
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  z-index: 100;
  backdrop-filter: blur(10px);
  transform: none;
  grid-column: 4 / span 12;
  grid-row: 1 / span 13;
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
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0, 1.9);
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
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  backdrop-filter: blur(10px);
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
  const visibleBalls = useMemo(() => balls.filter(b => b["Should Show"]), [balls]);

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
        {visibleBalls.map((b, i) => (
          <Ball
            onClick={() => setCurrentBall(i)}
            style={{
              ...(i === currentBall ? activeBallRows : ballRows)[b.Name],
            }}
            key={b.Name}
          >
            {b.Name}
          </Ball>
        ))}
        <LocalBall>
          <div style={{ textAlign: "center", maxWidth: "80%" }}>
            <Title>{visibleBalls[currentBall].Name}</Title>
            <ReactMarkdown>{visibleBalls[currentBall].Content}</ReactMarkdown>
          </div>
        </LocalBall>
      </BallsContainer>
    </Container>
  );
};

CommunityPage.getInitialProps = async () => {
  const data = await getFromAirTable("Community")
    .select({ fields: ["Name", "Content", "Should Show"] })
    .all();
  return { balls: data.map(d => d.fields) };
};

export default CommunityPage;
