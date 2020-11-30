import React, { useState, FC } from "react";
import styled from "@emotion/styled";
import nodeFetch from "node-fetch";

import Page from "../components/Page";
import Title from "../components/Title";
import { getFromAirTable } from "../util/getFromAirTable";
import { Markdown } from "../components/Markdown";
import { trackEvent } from "../util/trackEvent";

type Section = {
  Name: string;
  Content: string;
  Attachments: {
    url: string;
  }[];
  Productions: {
    Name: string;
    Description: string;
    Image: { url: string }[];
    "Video Link": string;
  }[];
  Classes: {
    Name: string;
    Notes: string;
    Attachments: { url: string }[];
  }[];
};

const ArtsPage: FC<{ events: any; sections: Section[] }> = ({
  events,
  sections,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <PageContent>
        <Title style={{ margin: "0 auto", textAlign: "center" }}>Arts</Title>
        <Sections count={sections.length}>
          {sections.map((p, i) => (
            <Section
              isActive={currentPage === i}
              onClick={() => {
                setCurrentPage(i);
                trackEvent({
                  category: "Arts",
                  action: "Go to Section",
                  label: p.Name,
                });
              }}
            >
              {p.Name}
            </Section>
          ))}
        </Sections>
        <Stage>
          <Markdown>
            {sections[currentPage].Content?.replace("<!-- FB EVENTS -->", "")}
          </Markdown>
          {sections[currentPage].Content === "<!-- FB EVENTS -->" && events && (
            <ProductionOrClassContainer>
              {events.map((e) => (
                <ProductionOrClass key={e.id}>
                  <img alt={e.name} src={e.cover.source} />
                  <ProductionOrClassMeta>
                    <ProductionOrClassTitle>{e.name}</ProductionOrClassTitle>
                    <span>
                      {(() => {
                        try {
                          return new Date(e.start_time)
                            .toISOString()
                            .split("T")[0];
                        } catch {
                          return null;
                        }
                      })()}{" "}
                      ・{" "}
                      <a
                        style={{ color: "currentColor" }}
                        rel="noreferrer noopener"
                        target="_blank"
                        href={`https://facebook.com/event/${e.id}`}
                      >
                        Sign up
                      </a>
                    </span>
                    <Markdown>{e.description}</Markdown>
                  </ProductionOrClassMeta>
                </ProductionOrClass>
              ))}
            </ProductionOrClassContainer>
          )}
          {sections[currentPage].Productions && (
            <ProductionOrClassContainer>
              {sections[currentPage].Productions.map((p, i) => (
                <ProductionOrClass key={i}>
                  <img alt={p.Name} src={p.Image[0].url} />
                  <ProductionOrClassMeta>
                    <ProductionOrClassTitle>{p.Name}</ProductionOrClassTitle>
                    <Markdown>{p.Description}</Markdown>
                  </ProductionOrClassMeta>
                </ProductionOrClass>
              ))}
            </ProductionOrClassContainer>
          )}

          {sections[currentPage].Classes && (
            <ProductionOrClassContainer>
              {sections[currentPage].Classes.map((p, i) => (
                <ProductionOrClass key={i}>
                  <img alt={p.Name} src={p.Attachments[0].url} />
                  <ProductionOrClassMeta>
                    <ProductionOrClassTitle>{p.Name}</ProductionOrClassTitle>
                    <Markdown>{p?.Notes}</Markdown>
                  </ProductionOrClassMeta>
                </ProductionOrClass>
              ))}
            </ProductionOrClassContainer>
          )}
        </Stage>
      </PageContent>
    </Container>
  );
};

const ProductionOrClassContainer = styled.div`
  display: grid;
  gap: 16px;

  img {
    width: 100%;
  }
`;

const ProductionOrClass = styled.div`
  display: grid;
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: 200px auto;
    gap: 16px;
  }
`;

const ProductionOrClassMeta = styled.div`
  display: grid;
  gap: 8px;
`;

const ProductionOrClassTitle = styled.h2`
  font-family: heading;
  margin: 0;
  font-style: italic;
  text-transform: uppercase;
`;

const PageContent = styled.div`
  display: grid;
  gap: 32px;
  grid-template-rows: max-content max-content auto;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 32px;
`;

const Section = styled("button", {
  shouldForwardProp: (p) => p !== "isActive",
})<{ isActive: boolean }>`
  appearance: none;
  border: 0;
  padding: 8px;
  background: ${({ isActive }) => (isActive ? "white" : "#000c")};
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  cursor: pointer;
  margin: 1px;
  font-family: heading;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  font-size: 13px;

  @media (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }
`;

const Sections = styled("div")<{ count: number }>(({ count }) => ({
  display: "grid",
  gridTemplateColumns: `1fr 1fr`,

  "@media (min-width: 768px)": {
    gap: "16px",
    gridTemplateColumns: `repeat(${count}, 1fr)`,
  },
}));

const Container = styled(Page)`
  background: url("/images/arts-bg.jpg");
  background-size: cover;
`;

const Stage = styled.div`
  background: white;
  box-shadow: 0 0 40px white;
  padding: 16px;
  color: black;
  font-weight: 500;
  overflow: auto;
  grid-row: 3;

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 4px;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #84532f;
    border-radius: 4px;
  }
`;

export default ArtsPage;
