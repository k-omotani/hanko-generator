import React from 'react';
import Preview from './component/Preview';

import { AppBar, Card, CardContent, Container, GlobalStyles, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
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
        <Grid container spacing={2} alignItems="flex-end">
          <Grid xs={12} md={4}>
            <Card>{card}</Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>{card}</Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>{card}</Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const card = (
  <CardContent>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        mb: 2,
      }}>
      <Typography component="h2" variant="h3" color="text.primary">
        プレビュー
      </Typography>
    </Box>
  </CardContent>
);

export default App;

