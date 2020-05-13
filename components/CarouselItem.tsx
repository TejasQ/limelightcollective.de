import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { FC } from "react";
import { trackEvent } from "../util/trackEvent";

interface CarouselItemProps {
  event: { id: string; name: string; date: Date };
  imageUrl: string;
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 0px 250px max-content;
  align-self: flex-end;
  background: #f0d2c3;
  font-size: 18px;
  font-weight: 600;
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
    grid-template-rows: min-content 250px max-content;
  }

  :hover > .description {
    max-height: 50vh;
    overflow: auto;
    color: currentColor;
  }
`;

Container.defaultProps = { role: "button" };

const Photo = styled.div<{ imageUrl: string }>`
  background: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-position: center;
  background-size: cover;
  height: 250px;
`;

const Description = styled.div`
  padding: 32px 16px;
  line-height: 24px;
  max-height: 0;
  overflow: none;
  transition: max-height 0.6s ease;
  color: transparent;
`;

const CarouselItem: FC<CarouselItemProps> = ({ event, imageUrl, children }) => {
  const date = useMemo(() => {
    try {
      return Intl.DateTimeFormat("en-US", { dateStyle: "medium" } as any).format(event.date);
    } catch (e) {
      return ``;
    }
  }, []);

  return (
    <Container
      onClick={() => {
        window.open(`https://facebook.com/event/${event.id}`);
        trackEvent({ category: "Home", action: "Go to Event", label: event.name });
      }}
    >
      <Description className="description">{children}</Description>
      <Photo imageUrl={imageUrl} />
      <div style={{ padding: 8, textAlign: "center" }}>
        <strong>{event.name.toUpperCase()}</strong> | {date}
      </div>
    </Container>
  );
};

export default CarouselItem;
