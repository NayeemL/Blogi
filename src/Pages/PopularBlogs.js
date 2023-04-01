import React from "react";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import { red } from "@mui/material/colors";
import "../Css/homePage.css";

const blogs = [
  {
    image: "images/1.jpg",
    title: "Don't miss a single match this season. whether it away",
    createdBy: "Mitchal",
    createdAt: "1h",
  },
  {
    image: "images/2.jpg",
    title: "Game or international tournament. whether it away",
    createdBy: "Mitchal",
    createdAt: "2h",
  },
  {
    image: "images/3.jpg",
    title: "Download to start streaming all major leagues, buffer-free.",
    createdBy: "Michle",
    createdAt: "10 mint",
  },
];

function popularBlogs() {
  return (
      <Box sx={{ mt: 6, mb: 2 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{mb:5}}>
          Popular Blogs
        </Typography>
        <Grid container spacing={6}>
          {blogs.map((data, i) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Card key={i}>
                <CardMedia
                  sx={{ height: 200, m: 2, mb: -1, borderRadius: "1rem" }}
                  image={data.image}
                  title="Blog Images"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="left"
                  >
                    {data.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      By <b>{data.createdBy}</b>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.createdAt} ago
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box />
        <Box sx={{ mt: 6, mb: 2 }}>
          <Card
            sx={{
              minHeight: 400,
              display: "flex",
              alignItems: "center",
              background: {
                lg: "-webkit-linear-gradient(0deg, #ffff 70%, #fdcd3b 40%)",
                md: "-webkit-linear-gradient(0deg, #ffff 70%, #fdcd3b 40%)",
                sm: "-webkit-linear-gradient( #ffff 40%, #fdcd3b 40%)",
                xs: "-webkit-linear-gradient( #ffff 50%, #fdcd3b 30%)",
              },
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid
                item
                xs={12}
                md={7}
                lg={7}
                sx={{ mt: 3, m: { xs: 2, sm: 4, md: 6, lg: 6 } }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ px: { lg: 2 } }}
                  align="left"
                >
                  Why I Started Blogi
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ px: { lg: 2 } }}
                  align="left"
                >
                  My name is Jhon Doe and I am the founder of Blogi. Blogi is My
                  Passion, Which is why I'm so excited to launch this new
                  product..
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    mt: 2,
                    mx: { lg: 2 },
                  }}
                >
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    N
                  </Avatar>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                    sx={{ px: 1 }}
                  >
                    Robert Fox <br /> Feb 12, 2023
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                lg={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 4,
                }}
              >
                <img
                  src="images/5.png"
                  alt="card_image"
                  className="card_fea_img"
                />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>

  );
}

export default popularBlogs;
