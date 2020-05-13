import React, { FC, HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";

import { trackEvent } from "../util/trackEvent";

const renderLink: FC<HTMLAttributes<HTMLAnchorElement>> = (props) => {
  return (
    <a
      {...props}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
        trackEvent({
          category: "Content",
          action: "Click on Link",
          label: typeof props.children === "string" ? props.children : props.children[0].props.children,
        });
      }}
    />
  );
};

export const Markdown: FC<{ children: string }> = (props) => {
  return <ReactMarkdown {...props} renderers={{ link: renderLink }} />;
};
