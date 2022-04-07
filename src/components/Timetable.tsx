import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { Stage as LibStage } from "konva/lib/Stage";
import { Layer, Rect, Stage, Text } from "react-konva";
import { textColor } from "../props";

interface Props {
  holder: Holder;
  data: LineData;
}

function Timetable({ holder, data }: Props) {
  const width = 1095;
  const height = 555;
  const stageRef = useRef<LibStage>(null);

  const calcWidth = (index: number) => (index !== 0 ? 200 : 100);
  const calcX = (index: number) => (index !== 0 ? index * 200 - 100 : 0);
  const spacing = 5;

  const calcText = (key: string) => data?.[key as keyof LineData] || key;

  const calcColor = (text: string) => {
    return textColor[text] || "white";
  };

  const [src, setSrc] = useState<string>();

  useEffect(() => {
    setSrc(stageRef.current?.toDataURL());
  }, [holder, data]);

  return (
    <>
      <img src={src} width="100%" alt="時間割" />
      <Box sx={{ display: "none" }}>
        <Stage width={width} height={height} ref={stageRef}>
          <Layer>
            <Rect width={width} height={height} fill="white" />
          </Layer>
          <Layer>
            {[...Array(7)].map((_valueY, y) =>
              [...Array(6)].map((_valueX, x) => (
                <Rect
                  key={`${x}_${y}`}
                  x={calcX(x)}
                  y={80 * y}
                  width={calcWidth(x) - spacing}
                  height={75}
                  fill={calcColor(calcText(holder[y][x]))}
                />
              ))
            )}
          </Layer>
          <Layer>
            {[...Array(7)].map((_valueY, y) =>
              [...Array(6)].map((_valueX, x) => (
                <Text
                  key={`${x}_${y}`}
                  text={calcText(holder[y][x])}
                  fontSize={27}
                  fontFamily={"'Noto Sans JP'"}
                  fill="#212121"
                  x={calcX(x)}
                  y={80 * y}
                  align="center"
                  verticalAlign="middle"
                  width={calcWidth(x) - spacing}
                  height={75}
                />
              ))
            )}
          </Layer>
        </Stage>
      </Box>
    </>
  );
}

export default Timetable;
