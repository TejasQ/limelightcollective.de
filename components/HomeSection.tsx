import React, { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Page from "./Page";
import Logo from "./Logo";
import CommunityButton from "./CommunityButton";
import SpaceButton from "./SpaceButton";
import ArtsButton from "./ArtsButton";
import HeroName from "./HeroName";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import BurgerIcon from "./BurgerIcon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
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
      <BurgerIcon />
      <Container>
        <Stage>
          <div>
            <Link href="/community">
              <CommunityButton />
            </Link>
            <Link href="/space">
              <SpaceButton />
            </Link>
            <Link href="/arts">
              <ArtsButton />
            </Link>
            <Logo />
          </div>
          <div style={{ textAlign: "center" }}>
            <HeroName>The Limelight Collective</HeroName>
            <HeroName small>Ein Projekt Der Heilsarmee</HeroName>
          </div>
          <footer>
            <Carousel>
              {events &&
                events.map(e => (
                  <CarouselItem
                    event={{
                      id: e.id,
                      name: e.name,
                      date: new Date(e.start_time),
                    }}
                    imageUrl={e.cover.source}
                  ></CarouselItem>
                ))}
            </Carousel>
          </footer>
        </Stage>
      </Container>
    </Page>
  );
};

export default HomeSection;
