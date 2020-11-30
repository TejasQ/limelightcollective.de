import { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.location.href =
      "https://limelightcollective.vercel.app" + window.location.pathname;
  }, []);
  return null;
};
