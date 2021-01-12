import { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.location.host.includes(".de")) {
      window.location.href =
        "https://limelightcollective.vercel.app/de" + window.location.pathname;
    } else {
      window.location.href =
        "https://limelightcollective.vercel.app" + window.location.pathname;
    }
  }, []);
  return null;
};
