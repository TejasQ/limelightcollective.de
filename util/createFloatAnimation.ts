import { keyframes } from "@emotion/core";
import { getRandomNumber } from "./getRandomNumber";

export const createFloatAnimation = () => keyframes`
0% {
  top: ${getRandomNumber(45, 50)}%;
  left: ${getRandomNumber(-30, 30)}px;
}
25% {
  top: ${getRandomNumber(45, 50)}%;
  left: ${getRandomNumber(-30, 30)}px;
}
50% {
  top: ${getRandomNumber(45, 50)}%;
  left: ${getRandomNumber(-30, 30)}px;
}
75% {
  top: ${getRandomNumber(45, 50)}%;
  left: ${getRandomNumber(-30, 30)}px;
}
`;
