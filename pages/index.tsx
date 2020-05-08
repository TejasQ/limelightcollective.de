import React from "react";
import nodeFetch from "node-fetch";
import styled from "@emotion/styled";

import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import DonateAndContactSection from "../components/DonateAndContactSection";
import Footer from "../components/Footer";
import CommunityPage from "./community";

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

const Home = ({ events }) => (
  <PageContainer>
    <HomeSection events={events} />
    <AboutSection />
    <DonateAndContactSection />
    <Footer />
  </PageContainer>
);

const accessToken = process.env.FB_TOKEN;

export const getStaticProps = async () => {
  const events = await nodeFetch(
    `https://graph.facebook.com/v6.0/977439682312363/events?access_token=${accessToken}&debug=all&fields=start_time.order(chronological)%2Cdescription%2Cname%2Ccover&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors&limit=3`,
  )
    .then((r) => r.json())
    .then((results) => results.data);
  return { props: { events } };
};

export default Home;
