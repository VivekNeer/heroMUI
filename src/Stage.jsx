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

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000", // Black text color
      secondary: "#000444",
    },
  },
});

function Info() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Grid
            container
            spacing={6}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ paddingTop: "2em", paddingBottom: "2em" }}
          >
            <Grid item xs={10} sm={6} md={3}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="100"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7G-ZHje-hubUP5UOJ9xaLBkOiNJGU6MR-i3mwlJiKg&s"
                      alt="completed"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontWeight: "900" }}
                        gutterBottom
                      >
                        Planning
                      </Typography>
                      <Typography variant="body2">Completed</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={10} sm={6} md={3}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="100"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7G-ZHje-hubUP5UOJ9xaLBkOiNJGU6MR-i3mwlJiKg&s"
                      alt="in-progress"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontWeight: "900" }}
                        gutterBottom
                      >
                        Building
                      </Typography>
                      <Typography variant="body2">Completed</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={10} sm={6} md={3}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="100"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7G-ZHje-hubUP5UOJ9xaLBkOiNJGU6MR-i3mwlJiKg&s"
                      alt="Completed"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontWeight: "900" }}
                        gutterBottom
                      >
                        Final Touches
                      </Typography>
                      <Typography variant="body2">Completed</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={10} sm={6} md={3}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="100"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7G-ZHje-hubUP5UOJ9xaLBkOiNJGU6MR-i3mwlJiKg&s"
                      alt="Completed"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontWeight: "900" }}
                        gutterBottom
                      >
                        Completion
                      </Typography>
                      <Typography variant="body2">Completed</Typography>
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

export default Info;
