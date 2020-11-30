import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import { Markdown } from "../components/Markdown";

import Page from "../components/Page";
import Title from "../components/Title";
import { getFromAirTable } from "../util/getFromAirTable";
import { css } from "@emotion/core";
import { trackEvent } from "../util/trackEvent";

type CommunityProps = {
  balls: {
    Name: string;
    Content: string;
    "Should Show": boolean;
  }[];
};

const LocalTitle = styled.h1`
  text-transform: uppercase;
  text-align: left;
  padding: 0 16px;
  margin: 55px 0 -40px;
  letter-spacing: 6px;
  font-weight: bold;
  font-size: 23px;

  @media (min-width: 768px) {
    font-size: 50px;
    letter-spacing: 16px;
    font-weight: normal;
    margin: 0;
  }
`;

const LocalBall = styled.div`
  margin: 0;
  overflow: hidden;
  padding: 30px;
  display: flex;
  place-content: center;
  place-items: center;
  border: 2px solid white;
  color: white;
  overflow: auto;
  border-radius: 50%;
  z-index: 100;
  background-size: cover;
  background-position: center;
  background-image: url(/images/community-bg.jpg);
  transform: none;
  grid-row: 11 / span 18;
  grid-column: 2 / span 18;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 40px;
    grid-column: 2 / span 12;
    grid-row: 2 / span 13;
  }

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
  grid-template-columns: repeat(auto-fill, minmax(16px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(16px, 1fr));
  width: 320px;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 1024px;

    grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
  }
`;

const Ball = styled.div`
  transition: transform 0.6s cubic-bezier(0.66, 0.19, 0.38, 0.99);
  width: 120px;
  height: 120px;
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

  @media (min-width: 768px) {
    width: 170px;
    height: 170px;
  }

  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const ballRows = {
  "Get Involved": css`
    grid-row: 28;
    @media (min-width: 768px) {
      grid-row: 15;
    }
    @media (min-width: 1024px) {
      grid-row: 11;
    }
  `,
  "Prayer Dance": css`
    grid-column: 13;
    grid-row: 29;
    @media (min-width: 768px) {
      grid-column: 11;
      grid-row: 15;
    }
    @media (min-width: 1024px) {
      grid-column: 16;
      grid-row: 11;
    }
  `,
  "Soul Space": css`
    grid-row: 3;

    @media (min-width: 768px) {
      grid-row: 2;
    }
  `,
  "Our Community": css`
    grid-row: 5;
    grid-column: 14;
    @media (min-width: 768px) {
      grid-row: 1;
      grid-column: 11;
    }
    @media (min-width: 1024px) {
      grid-column: 16;
    }
  `,
} as const;

const ballImages = {
  "Our Community": {
    style: css`
      position: absolute;
      z-index: 30;
      width: 353px;

      left: -163px;
      top: -9px;

      @media (min-width: 768px) {
        width: 540px;
        top: -97px;
        left: -249px;
      }
    `,
    url: "/images/community-circle-2.png",
  },
  "Get Involved": {
    url: "/images/community-circle-5.png",
    style: css`
      position: absolute;
      z-index: 30;
      width: 353px;
      left: -69px;
      top: -49px;
      @media (min-width: 768px) {
        width: 578px;
        left: -120px;
        top: -183px;
      }
    `,
  },
  "Prayer Dance": {
    url: "/images/community-circle-4.png",
    style: css`
      position: absolute;
      z-index: 30;
      width: 353px;
      left: -140px;
      top: -50px;
      @media (min-width: 768px) {
        width: 560px;
        top: -176px;
        left: -227px;
      }
    `,
  },
  "Soul Space": {
    url: "/images/community-circle-1.png",
    style: css`
      position: absolute;
      z-index: 30;
      width: 353px;
      top: -22px;
      left: -128px;

      @media (min-width: 768px) {
        width: 560px;
        top: -127px;
        left: -204px;
      }
    `,
  },
};

const activeBallRows = {
  "Get Involved": css`
    ${ballRows["Get Involved"].styles}
    animation: none !important;
    transform: translate(30px, -30px) !important;

    @media (min-width: 768px) {
      transform: translate(100px, -50px) !important;
    }
  `,
  "Prayer Dance": css`
    ${ballRows["Prayer Dance"].styles}
    animation: none !important;
    transform: translate(-20px, -50px) !important;

    @media (min-width: 768px) {
      transform: translate(-80px, -50px) !important;
    }
    @media (min-width: 1024px) {
      transform: translate(-160px, -50px) !important;
    }
  `,
  "Soul Space": css`
    ${ballRows["Soul Space"].styles}
    animation: none !important;
    transform: translate(20px, 80px) !important;

    @media (min-width: 768px) {
      transform: translate(80px, 50px) !important;
    }

    @media (min-width: 1024) {
      transform: translate(100px, 90px) !important;
    }
  `,
  "Our Community": css`
    ${ballRows["Our Community"].styles}
    animation: none !important;
    transform: translate(-20px, 40px) !important;

    @media (min-width: 768px) {
      transform: translate(-20px, 40px) !important;
    }

    @media (min-width: 1024px) {
      transform: translate(-140px, 40px) !important;
    }
  `,
} as const;

const CommunityPage = ({ balls }: CommunityProps) => {
  const [currentBall, setCurrentBall] = useState(0);

  return (
    <Container>
      <div
        css={css`
          line-height: 0px;
          @media (min-width: 768px) {
            display: block;
            line-height: 1;
          }
        `}
      >
        <br />
        <br />
        <br />
        <LocalTitle>Community</LocalTitle>
        <br />
        <br />
        <br />
      </div>
      <BallsContainer>
        {balls.map((b, i) => (
          <Ball
            onClick={() => {
              setCurrentBall(i);
              trackEvent({
                category: "Community",
                action: "Tap on Ball",
                label: b.Name,
              });
            }}
            css={{
              ...(i === currentBall ? activeBallRows : ballRows)[b.Name],
            }}
            key={b.Name}
          >
            <div
              css={css`
                position: relative;
                width: 170px;
                height: 170px;
                pointer-events: none;
              `}
            >
              <span
                css={css`
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 100%;
                  height: 100%;
                  transform: translate(-50%, -50%);
                  z-index: 50;
                  font-size: 21px;
                  padding-top: 51px;

                  @media (min-width: 768px) {
                    font-size: 31px;
                    padding-top: 0;
                  }
                `}
              >
                {b.Name}
              </span>
              <img
                alt="LOL"
                css={ballImages[b.Name].style}
                src={ballImages[b.Name].url}
              />
            </div>
          </Ball>
        ))}
        <LocalBall>
          <div
            css={css`
              height: 100%;
              @media (min-width: 768px) {
                text-align: center;
                max-width: 80%;
              }
            `}
          >
            <Title>{balls[currentBall].Name}</Title>
            <Markdown>{balls[currentBall].Content}</Markdown>
          </div>
        </LocalBall>
      </BallsContainer>
    </Container>
  );
};

export default CommunityPage;
