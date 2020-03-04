import styled from "@emotion/styled";

const SidebarItem = styled.li`
  position: relative;
  font-style: italic;
  letter-spacing: 8px;
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
