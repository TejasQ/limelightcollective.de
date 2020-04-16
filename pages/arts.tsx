import React, { useState, FC } from "react";
import styled from "@emotion/styled";
import nodeFetch from "node-fetch";

import Page from "../components/Page";
import Title from "../components/Title";
import { getFromAirTable } from "../util/getFromAirTable";
import ReactMarkdown from "react-markdown";

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

const ArtsPage: FC<{ events: any; sections: Section[] }> = ({ events, sections }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <PageContent>
        <Title style={{ margin: "0 auto", textAlign: "center" }}>Arts</Title>
        <Stage>
          <ReactMarkdown>{sections[currentPage].Content?.replace("<!-- FB EVENTS -->", "")}</ReactMarkdown>
          {sections[currentPage].Content === "<!-- FB EVENTS -->" && events && (
            <ProductionOrClassContainer>
              {events.map((e) => (
                <ProductionOrClass key={e.id}>
                  <div>
                    <img alt={e.name} src={e.cover.source} />
                  </div>
                  <div>
                    <strong>{e.name}</strong>
                    <br />
                    <span>{new Date(e.start_time).toISOString()}</span>
                    <br />
                    <ReactMarkdown>{e.description}</ReactMarkdown>
                  </div>
                </ProductionOrClass>
              ))}
            </ProductionOrClassContainer>
          )}
          {sections[currentPage].Productions && (
            <ProductionOrClassContainer>
              {sections[currentPage].Productions.map((p, i) => (
                <ProductionOrClass key={i}>
                  <div>
                    <img alt={p.Name} src={p.Image[0].url} />
                  </div>
                  <div>
                    <strong>{p.Name}</strong>
                    <br />
                    <ReactMarkdown>{p.Description}</ReactMarkdown>
                  </div>
                </ProductionOrClass>
              ))}
            </ProductionOrClassContainer>
          )}

          {sections[currentPage].Classes && (
            <ProductionOrClassContainer>
              {sections[currentPage].Classes.map((p, i) => (
                <ProductionOrClass key={i}>
                  <div>
                    <img alt={p.Name} src={p.Attachments[0].url} />
                  </div>
                  <div>
                    <strong>{p.Name}</strong>
                    <br />
                    <ReactMarkdown>{p.Notes}</ReactMarkdown>
                  </div>
                </ProductionOrClass>
              ))}
            </ProductionOrClassContainer>
          )}
        </Stage>
        <Sections count={sections.length}>
          {sections.map((p, i) => (
            <Section isActive={currentPage === i} onClick={() => setCurrentPage(i)}>
              {p.Name}
            </Section>
          ))}
        </Sections>
      </PageContent>
    </Container>
  );
};

export const getStaticProps = async () => {
  const data = await getFromAirTable("Arts")
    .select({ fields: ["Name", "Content", "Should Show", "Productions", "Classes"] })
    .all();

  const productions = await getFromAirTable("Productions")
    .select({ fields: ["Name", "Description", "Image", "Video Link"] })
    .all();

  const classes = await getFromAirTable("Classes")
    .select({ fields: ["Name", "Notes", "Attachments"] })
    .all();

  const accessToken = process.env.FB_TOKEN;

  const events = await nodeFetch(
    `https://graph.facebook.com/v6.0/977439682312363/events?access_token=${accessToken}&debug=all&fields=start_time.order(chronological)%2Cdescription%2Cname%2Ccover&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors&limit=3`,
  )
    .then((r) => r.json())
    .then((results) => results.data);

  return {
    unstable_revalidate: true,
    props: {
      events,
      sections: data
        .filter((b) => b.fields["Should Show"])
        .map((d) => ({
          ...d.fields,
          Productions:
            productions?.filter((p) => (d.fields as any).Productions?.includes(p.id)).map((p) => p.fields) ?? null,
          Classes: classes?.filter((p) => (d.fields as any).Classes?.includes(p.id)).map((p) => p.fields) ?? null,
        })),
    },
  };
};

const ProductionOrClassContainer = styled.div`
  display: grid;
  gap: 16px;

  img {
    max-width: 200px;
  }
`;

const ProductionOrClass = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 16px;
`;

const PageContent = styled.div`
  display: grid;
  gap: 32px;
  grid-template-rows: max-content max-content max-content;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
`;

const Section = styled("button", { shouldForwardProp: (p) => p !== "isActive" })<{ isActive: boolean }>`
  appearance: none;
  border: 0;
  padding: 16px;
  background: ${({ isActive }) => (isActive ? "white" : "#fff5")};
  color: ${({ isActive }) => (isActive ? "black" : "black")};
  font: inherit;
  cursor: pointer;
`;

const Sections = styled("div")<{ count: number }>(({ count }) => ({
  display: "grid",
  gap: "16px",
  gridTemplateColumns: `repeat(${count}, 1fr)`,
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
  height: 60vh;
  overflow: auto;
`;

export default ArtsPage;
