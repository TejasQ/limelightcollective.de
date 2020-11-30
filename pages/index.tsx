import React from "react";
import nodeFetch from "node-fetch";
import styled from "@emotion/styled";

import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import DonateAndContactSection from "../components/DonateAndContactSection";
import Footer from "../components/Footer";
import CommunityPage from "./community";
import { getFromAirTable } from "../util/getFromAirTable";

const PageContainer = styled("div")`
  background-image: url("/images/home-bg.jpg");
  background-size: cover;
  background-color: black;
  background-position: center -130px;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    background-position: center -520px;
  }

  @media (min-width: 1024px) {
    background-position: 0 -1000px;
  }
`;

const Home = ({ events, footerData, teamData }) => (
  <PageContainer>
    <HomeSection events={events} />
    <AboutSection footerData={footerData} teamData={teamData} />
    <DonateAndContactSection footerData={footerData} />
    <Footer />
  </PageContainer>
);

const accessToken = process.env.FB_TOKEN;

export default Home;
