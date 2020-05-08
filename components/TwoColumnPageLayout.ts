import styled from "@emotion/styled";

const TwoColumnPageLayout = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 1002px;
  margin: 0 auto;
  height: 100%;
  padding: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 100%;
    padding: 100px 16px 0;
  }
`;

export default TwoColumnPageLayout;
