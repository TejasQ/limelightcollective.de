import React from "react";
import nodeFetch from "node-fetch";
import styled from "@emotion/styled";

import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import DonateAndContactSection from "../components/DonateAndContactSection";

const PageContainer = styled.div`
  background-image: url("/images/home-bg.jpg");
  background-size: cover;
  background-position: 0 -1000px;
  background-color: black;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Home = ({ events }) => (
  <PageContainer>
    <HomeSection events={events} />
    <AboutSection />
    <DonateAndContactSection />
  </PageContainer>
);

const accessToken = "";

Home.getInitialProps = async () => {
  const events = await nodeFetch(
    `https://graph.facebook.com/v6.0/977439682312363/events?access_token=${accessToken}&debug=all&fields=start_time.order(chronological)%2Cdescription%2Cname%2Ccover&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors&limit=3`,
  )
    .then(r => r.json())
    .then(results => results.data);
  return { events };
};

export default Home;
