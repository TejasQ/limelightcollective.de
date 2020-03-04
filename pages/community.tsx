import React from "react";
import styled from "@emotion/styled";

import Page from "../components/Page";
import Ball from "../components/Ball";
import Title from "../components/Title";

const LocalTitle = styled.h1`
  font-size: 50px;
  letter-spacing: 16px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
`;

const LocalBall = styled(Ball)`
  transform: none;
  top: 50px;
  text-align: center;
`;

const Container = styled(Page)`
  position: relative;
  background-size: cover;
  background-position: center;
  background: url(/images/community-bg.jpg);
  overflow: hidden;
`;

const CommunityConcept = styled(LocalBall)`
  left: -827px;
  width: 150px;
  top: 158px;
  height: 150px;
`;
const GetInvolved = styled(LocalBall)`
  left: -1038px;
  width: 150px;
  top: 708px;
  height: 150px;
`;
const SoulSpace = styled(LocalBall)`
  left: 843px;
  width: 150px;
  top: 6px;
  height: 150px;
`;
const Counselling = styled(LocalBall)`
  left: 1105px;
  width: 150px;
  height: 153px;
  top: 382px;
`;
const PrayerDance = styled(LocalBall)`
  left: 860px;
  width: 150px;
  height: 150px;
  top: 766px;
`;

const CommunityPage = () => (
  <Container>
    <LocalTitle>Community</LocalTitle>
    <CommunityConcept size="150px">Community Concept</CommunityConcept>
    <GetInvolved size="150px">Get Involved</GetInvolved>
    <SoulSpace size="150px">Soul Space</SoulSpace>
    <Counselling size="150px">Counselling</Counselling>
    <PrayerDance size="150px">Prayer Dance</PrayerDance>
    <LocalBall size="90vh">
      <div style={{ textAlign: "center", maxWidth: "50%" }}>
        <Title>At the Limelight Collective</Title>
        <p>
          we believe that living in community is essential to every person's well being. Valuing each person as made in
          God's likeness, we strive to create an emotionally safe environment where people can form healthy, authentic
          relationships with each other and with God.
        </p>
      </div>
    </LocalBall>
  </Container>
);

export default CommunityPage;
