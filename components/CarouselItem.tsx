import React from "react";
import styled from "@emotion/styled";
import { FC } from "react";

interface CarouselItemProps {
  event: { id: string; name: string; date: Date };
  imageUrl: string;
}

const Container = styled.div`
  position: relative;
  border: 1px solid white;
  display: grid;
  grid-template-rows: auto max-content;
  background: white;
  color: black;
  cursor: pointer;
  transition: box-shadow 0.6s ease, transform 0.6s ease;
  will-change: box-shadow;
  transform-origin: center bottom;
  z-index: 100;

  :hover {
    z-index: 101;
    transform: scale(1.05);
    box-shadow: 0 -5px 40px 10px #000a;
  }
`;

Container.defaultProps = { role: "button" };

const Photo = styled.div<{ imageUrl: string }>`
  background: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-position: center;
  background-size: cover;
`;

const CarouselItem: FC<CarouselItemProps> = ({ event, imageUrl }) => {
  return (
    <Container onClick={() => window.open(`https://facebook.com/event/${event.id}`)}>
      <Photo imageUrl={imageUrl} />
      <div style={{ padding: 8 }}>
        {event.name} | {Intl.DateTimeFormat("en-US", { dateStyle: "full" } as any).format(event.date)}
      </div>
    </Container>
  );
};

export default CarouselItem;
