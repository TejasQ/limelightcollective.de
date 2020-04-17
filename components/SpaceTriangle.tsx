import styled from "@emotion/styled";
import { FC, CSSProperties, useState, useRef, useEffect } from "react";

export const SpaceTriangle: FC<{ style?: CSSProperties; size: number; content: string }> = ({
  style,
  content,
  size,
}) => {
  const [firstLine, setFirstLine] = useState(0);
  const oklol = useRef<HTMLDivElement>();
  let wordCursor = 0;
  let www = content.split(" ");
  const wordCount = www.length;
  let lines = [];
  let cutoff = 5;
  let lastCutoff = 0;

  while (wordCursor < wordCount) {
    if (wordCursor === cutoff) {
      const a = lastCutoff;
      const b = cutoff;
      lines.push(www.slice(a, b).join(" "));
      lastCutoff = cutoff;
      cutoff = cutoff + (www.slice(a, b).length + 4);
    }
    wordCursor++;
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleWheel = (e) => {
      if (e.deltaY >= 1 && firstLine < lines.length - 1) {
        setFirstLine(firstLine + 1);
        return;
      }
      if (e.deltaY <= -1 && firstLine !== 0) {
        setFirstLine(firstLine - 1);
      }
    };

    oklol.current?.addEventListener("wheel", handleWheel);
    return () => oklol.current?.removeEventListener("wheel", handleWheel);
  }, [firstLine]);

  return (
    <>
      {content && (
        <input
          value={firstLine}
          onChange={(e) => setFirstLine(parseFloat(e.target.value))}
          type="range"
          min="0"
          max={lines.length - 1}
          step="1"
        />
      )}
      <Container ref={oklol} style={style} size={size}>
        {lines.slice(firstLine).map((l, i) => {
          return (
            <Line style={{ fontSize: `${i === 0 ? 36 : (66 / 100 / ((i + 1) / 2)) * 36}px`, padding: `0 ${i * 30}px` }}>
              {l}
            </Line>
          );
        })}
      </Container>
    </>
  );
};

const Line = styled("div")`
  line-height: 51px;
  text-align: center;
`;
const Container = styled.div<{ size: number }>`
  position: relative;
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  overflow: hidden;
  padding: 20px 40px 100%;
  line-height: 32px;
  z-index: 100;
  font-size: 1rem;
  background: black;
`;
