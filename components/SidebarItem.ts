import styled from "@emotion/styled";

const SidebarItem = styled.li`
  position: relative;
  font-style: italic;
  font-family: heading;
  text-transform: uppercase;
  letter-spacing: 6px;
  z-index: 100;
  padding: 4px 8px;
  cursor: pointer;
  background: #0006;

  :hover {
    background: white;
    color: black;
  }
`;

export default SidebarItem;
