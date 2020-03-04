import React from "react";
import nodeFetch from "node-fetch";

import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import DonateAndContactSection from "../components/DonateAndContactSection";

const Home = ({ events }) => (
  <>
    <HomeSection events={events} />
    <AboutSection />
    <DonateAndContactSection />
  </>
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
