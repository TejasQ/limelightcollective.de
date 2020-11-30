import { AppProps } from "next/app";
import React, { FC, useState, useEffect } from "react";
import { Global } from "@emotion/core";
import ReactGA from "react-ga";

import globalStyles from "../util/globalStyles";
import { BurgerIcon } from "../components/BurgerIcon";
import { Menu } from "../components/Menu";

if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then(function (registration) {
    registration.unregister();
  });
}

const MyApp = ({ Component, pageProps }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize("UA-97872345-4");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <BurgerIcon
        isActive={isBurgerOpen}
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      />
      {isBurgerOpen && <Menu close={() => setIsBurgerOpen(false)} />}
      <Global styles={globalStyles} />

      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = ({ ctx }) => {
  ctx.res
    ?.writeHead?.(302, {
      Location: `https://limelightcollective.vercel.app/${ctx.req.url}`,
    })
    .end?.();
  return {};
};

export default MyApp;
