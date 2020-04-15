import { AppProps } from "next/app";
import React, { FC, useState } from "react";
import { Global } from "@emotion/core";

import globalStyles from "../util/globalStyles";
import { BurgerIcon } from "../components/BurgerIcon";
import { Menu } from "../components/Menu";

if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then(function (registration) {
    registration.unregister();
  });
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <BurgerIcon isActive={isBurgerOpen} onClick={() => setIsBurgerOpen(!isBurgerOpen)} />
      {isBurgerOpen && <Menu close={() => setIsBurgerOpen(false)} />}
      <Global styles={globalStyles} />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
