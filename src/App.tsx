import React, { useState } from 'react';

import { AppBar, Card, CardContent, Container, GlobalStyles, Grid, Slider, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const cropCanvas = (text: string, angle: number): HTMLCanvasElement => {
  const target = document.createElement("canvas");
  const ctx = target.getContext("2d")!;
  const fontSize = '40px'

  var x = (target.width / 2);
  var y = (target.height / 2);
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.strokeStyle = "red"
  ctx.lineWidth = 2
  ctx.stroke();


  ctx.beginPath();

  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI / 180);
  ctx.translate(-x, -y);
  ctx.font = fontSize + ' serif';
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';

  ctx.fillText(text, x, y + 15);

  return target;
};

function App() {
  const [name, setName] = useState("山田");
  const [angle, setAngle] = useState(0);
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Hanko Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          はんこ風絵文字ジェネレータ
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Japanese Traditional CampanyのDXのため、古き良きはんこ文化を残すため、我らは立ち上がる。
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <Card>{
              input(
                (n: string) => {
                  setName(n)
                },
                (a: number) => {
                  setAngle(a)
                }
              )}</Card>
          </Grid>
          <Grid container xs={12} md={8}>
            <Grid md={12}>
              <Card>{card("面谷", 20)}</Card>
            </Grid>
            <Grid md={12}>
              <Card>{card(name, angle)}</Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const card = (text: string, angle: number) => (
  <CardContent>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        mb: 2,
      }}>
      <img src={cropCanvas(text, angle).toDataURL()} alt="hanko preview"></img>
    </Box>
  </CardContent>
);

const input = (
  onChangeName: (name: string) => void,
  onChangeAngle: (angle: number) => void,
) => (
  <CardContent>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        mb: 2,
      }}>
      <TextField
        label="山田"
        defaultValue={"山田"}
        multiline
        maxRows={8}
        minRows={4}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { onChangeName(event.target.value) }}
      />
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(event: React.SyntheticEvent | Event, value: number | Array<number>) => {
          if (typeof value === "number") {
            onChangeAngle(value)
          }
        }}
      />
    </Box>
  </CardContent>
);

export default App;

