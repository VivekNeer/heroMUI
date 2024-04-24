import React from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function Biege() {
  return (
    <>
      <CssBaseline />
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", padding: "1em", backgroundColor: "beige" }}
      >
        About the project
      </Typography>
      <Container
        sx={{
          minHeight: "25em",
          backgroundColor: "beige",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              <b>Place where you find yourself</b>
            </Typography>
            <Typography variant="body1" gutterBottom padding={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Ipsa, dolores porro. Quisquam consectetur et ipsa
              <br />
              cupiditate quod. Inventore magni nemo eveniet! Saepe iste
              <br />
              sapiente molestias consectetur excepturi quis rem. Provident!
            </Typography>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CheckIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Quiet and peaceful location
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CheckIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Shopping and fitness center right besides the complex
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CheckIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Lot of parking spaces even for visitors
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CheckIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Play area for kids
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              <b>Video Presentation</b>
            </Typography>
            <Card>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="Paella dish"
                sx={{ maxHeight: 200, objectFit: "cover", width: "100%" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Biege;
