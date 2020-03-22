import React from "react";

import Page from "../components/Page";
import SpaceTriangle from "../components/SpaceTriangle";
import TwoColumnPageLayout from "../components/TwoColumnPageLayout";
import Title from "../components/Title";
import SidebarItemContainer from "../components/SidebarItemContainer";
import SidebarItem from "../components/SidebarItem";
import styled from "@emotion/styled";

const Container = styled(Page)`
  background: url("/images/space-bg.jpg");
  background-size: cover;
`;

const SpacePage = () => (
  <Container>
    <TwoColumnPageLayout>
      <div>
        <Title>Space</Title>
        <SidebarItemContainer>
          <SidebarItem active>Space Concept</SidebarItem>
          <SidebarItem active={false}>Use Our Space</SidebarItem>
        </SidebarItemContainer>
      </div>
      <div style={{ position: "relative" }}>
        <SpaceTriangle size={574}>
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores placeat illo rerum minima possimus neque
        totam doloremque, quos odio tempore culpa eligendi eveniet non. Perspiciatis fugiat voluptatibus id quisquam
        velit.`.repeat(100)}
        </SpaceTriangle>
        <SpaceTriangle
          style={{ position: "absolute", top: -9, left: -23, background: "white", zIndex: 99 }}
          size={620}
        />
      </div>
    </TwoColumnPageLayout>
  </Container>
);

export default SpacePage;
