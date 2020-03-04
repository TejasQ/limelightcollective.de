import React, { useState } from "react";
import styled from "@emotion/styled";

import Page from "../components/Page";
import TwoColumnPageLayout from "../components/TwoColumnPageLayout";
import Title from "../components/Title";
import SidebarItemContainer from "../components/SidebarItemContainer";
import SidebarItem from "../components/SidebarItem";
import PageContent from "../components/PageContent";

const Container = styled(Page)`
  background: url("/images/arts-bg.jpg");
  background-size: cover;
`;

const pages = ["Christian Spirituality", "Soul Space", "BabySong", "Kindertanz"];

const ArtsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <TwoColumnPageLayout>
        <div>
          <Title>Arts</Title>
          <SidebarItemContainer>
            {pages.map((p, i) => (
              <SidebarItem onClick={() => setCurrentPage(i)}>{p}</SidebarItem>
            ))}
          </SidebarItemContainer>
        </div>
        <div>
          <PageContent>
            <Title condensed>{pages[currentPage]}</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati nesciunt neque error ipsam
              doloremque deleniti similique illum molestias, quam voluptas expedita, distinctio quo veniam explicabo
              tempora excepturi facere maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati nesciunt neque error ipsam
              doloremque deleniti similique illum molestias, quam voluptas expedita, distinctio quo veniam explicabo
              tempora excepturi facere maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati nesciunt neque error ipsam
              doloremque deleniti similique illum molestias, quam voluptas expedita, distinctio quo veniam explicabo
              tempora excepturi facere maxime?
            </p>
          </PageContent>
        </div>
      </TwoColumnPageLayout>
    </Container>
  );
};
export default ArtsPage;
