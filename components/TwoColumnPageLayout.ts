import styled from "@emotion/styled";

const TwoColumnPageLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 16px;
  width: 100%;
  max-width: 1002px;
  margin: 0 auto;
  padding: 100px 16px 0;
  grid-template-rows: 100%;
  height: 100%;
`;

export default TwoColumnPageLayout;
