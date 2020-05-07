import styled from "@emotion/styled";

const SidebarItem = styled.li<{ active: boolean }>(({ active }) => ({
  position: "relative",
  fontStyle: "italic",
  fontFamily: "heading",
  textTransform: "uppercase",
  letterSpacing: 6,
  zIndex: 100,
  padding: "4px 8px",
  cursor: "pointer",
  background: active ? "white" : "#0006",
  color: active ? "#000" : "currentColor",

  "> *": {
    pointerEvents: "none",
  },

  ":hover": {
    background: "white",
    color: "black",
  },
}));

export default SidebarItem;
