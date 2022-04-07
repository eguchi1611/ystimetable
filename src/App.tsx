import React, { useState } from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Input from "./components/Input";
import Timetable from "./components/Timetable";
import { holders, levelOptions, subjectOptions } from "./props";

function App() {
  const theme = createTheme();

  const [level, setLevel] = useState<keyof TimetableSet | undefined>();
  const [lineH, setlineH] = useState<string | undefined>();
  const [lineI, setlineI] = useState<string | undefined>();
  const [lineJ, setlineJ] = useState<string | undefined>();
  const [lineK, setlineK] = useState<string | undefined>();
  const [lineL, setlineL] = useState<string | undefined>();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <Container maxWidth="md">
          <Typography sx={{ mt: 2 }}>
            時間割を作成します、43期生用です
            <br />
            基礎と時間割を選択すると時間割が生成されます
            <br />
            間違っているところがあったら連絡ください
          </Typography>
          <Input
            state={[level, setLevel]}
            options={levelOptions}
            label="基礎を選択"
          />
          <Input
            state={[lineH, setlineH]}
            options={subjectOptions.h}
            label="H帯を選択"
          />
          <Input
            state={[lineI, setlineI]}
            options={subjectOptions.i}
            label="I帯を選択"
          />
          <Input
            state={[lineJ, setlineJ]}
            options={subjectOptions.j}
            label="J帯を選択"
          />
          <Input
            state={[lineK, setlineK]}
            options={subjectOptions.k}
            label="K帯を選択"
          />
          <Input
            state={[lineL, setlineL]}
            options={subjectOptions.l}
            label="L帯を選択"
          />
          {level && lineH && lineI && lineJ && lineK && lineL && (
            <Timetable
              holder={holders[level]}
              data={{
                h: lineH,
                i: lineI,
                j: lineJ,
                k: lineK,
                l: lineL,
              }}
            />
          )}
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
