import React, { FC } from "react";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

import Page from "./Page";
import Logo from "./Logo";
import CommunityButton from "./CommunityButton";
import SpaceButton from "./SpaceButton";
import ArtsButton from "./ArtsButton";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

const Container = styled(Div100vh)`
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;
  overflow: hidden;
`;

const Stage = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60vh calc(40vh - 200px) 200px;
`;

type HomeSectionProps = {
  events: {
    start_time: string;
    description: string;
    name: string;
    id: string;
    cover: {
      source: string;
    };
  }[];
};

const HomeSection: FC<HomeSectionProps> = ({ events }) => {
  return (
    <Page>
      <Container>
        <Stage>
          <div>
            <CommunityButton />
            <SpaceButton />
            <ArtsButton />
            <Logo />
          </div>
          <div />
          <footer>
            <Carousel>
              {events &&
                events.map((e) => (
                  <CarouselItem
                    event={{
                      id: e.id,
                      name: e.name,
                      date: new Date(e.start_time),
                    }}
                    imageUrl={e.cover.source}
                  >
                    {e.description}
                  </CarouselItem>
                ))}
            </Carousel>
          </footer>
        </Stage>
      </Container>
    </Page>
  );
};

export default HomeSection;
