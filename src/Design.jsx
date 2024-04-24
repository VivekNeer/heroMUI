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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import last from './assets/last.jpg'

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000", // Black text color
      secondary: "#000444",
    },
  },
});

function Design() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{marginTop:6}}>
        <Typography variant="h6" sx={{fontWeight:'800'}}>Architecture and Design</Typography>
          <Grid
            container
            spacing={6}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ paddingTop: "2em", paddingBottom: "2em" }}
          >
            <Grid item xs={12} sm={11} md={10}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={4}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={last}
                      alt="house"
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontWeight: "400" }}
                        gutterBottom
                      >
                        High Quality Materials
                      </Typography>
                      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab nihil odit laborum obcaecati quae corporis reprehenderit, at dolor eligendi quam laboriosam. Earum, qui consequatur rem voluptatem voluptatibus id enim.</Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontWeight: "400" }}
                        gutterBottom
                      >
                        Soundproof rooms.
                      </Typography>
                      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab nihil odit laborum obcaecati quae corporis reprehenderit, at dolor eligendi quam laboriosam. Earum, qui consequatur rem voluptatem voluptatibus id enim.</Typography>

                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid> 
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Design;
