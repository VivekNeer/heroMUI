import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import { useInView } from "react-intersection-observer";

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF", // White text color
      secondary: "#cce3de",
    },
  },
});

function Info() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          ref={ref}
          sx={{
            background: `linear-gradient(90deg, rgba(92,87,184,1) 0%, rgba(64,60,166,1) 7%, rgba(34,34,171,1) 25%, rgba(0,0,0,1) 79%)`,
            minHeight: "20em",
            minWidth: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Grid
            container
            spacing={8}
            sx={{ paddingTop: "2em", paddingBottom: "2em" }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Fade in={isVisible} timeout={1000}>
                <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ fontWeight: "900" }}
                      gutterBottom
                    >
                      Modern and <br />
                      Safe Living
                    </Typography>
                    <Typography variant="h6" component="div">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae ut saepe voluptates eos est voluptatem facere.
                      Aperiam exercitationem
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" variant="contained">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Fade in={isVisible} timeout={1000}>
                <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ fontWeight: "900" }}
                      gutterBottom
                    >
                      Peaceful And Serene
                      <br />
                      Location
                    </Typography>
                    <Typography variant="h6" component="div">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae ut saepe voluptates eos est voluptatem facere.
                      Aperiam exercitationem
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" variant="contained">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Fade in={isVisible} timeout={1000}>
                <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ fontWeight: "900" }}
                      gutterBottom
                    >
                      Great Starting <br />
                      Prices
                    </Typography>
                    <Typography variant="h6" component="div">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae ut saepe voluptates eos est voluptatem facere.
                      Aperiam exercitationem
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" variant="contained">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
            {/* Repeat similar structure for other Grid items */}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Info;
