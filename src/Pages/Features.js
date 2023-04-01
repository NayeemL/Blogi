import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
  Typography,
  Avatar,
  Pagination,
  Stack,
} from "@mui/material";
import * as React from "react";
import "../Css/homePage.css";
import { Link } from "react-router-dom";

const Featureblogs = [
  {
    image: "images/8.jpg",
    name: "N",
    title: "Why I started Blogi",
    content:
      "My name is John doe and I am the founder of Blogi. Blogi is My passion, Which is why I'm so excited",
    createdBy: "Brooklyn Simmons",
    createdAt: "Feb 28, 2020",
  },
  {
    image: "images/9.jpg",
    name: "R",
    title: "Blogi Launches Public URL",
    content:
      "My name is John doe and I am the founder of Blogi. Blogi is My passion, Which is why I'm so excited",
    createdBy: "Darrell Steward",
    createdAt: "Jan 14, 2020",
  },
  {
    image: "images/10.jpg",
    name: "V",
    title: "Why I started Blogi",
    content:
      "My name is John doe and I am the founder of Blogi. Blogi is My passion, Which is why I'm so excited",
    createdBy: "Jerome Bell",
    createdAt: "Mar 21, 2020",
  },
  {
    image: "images/11.jpg",
    name: "S",
    title: "Why I started Blogi",
    content:
      "My name is John doe and I am the founder of Blogi. Blogi is My passion, Which is why I'm so excited",
    createdBy: "Jane Cooper",
    createdAt: "Apr 12, 2020",
  },
  {
    image: "images/11.jpg",
    name: "S",
    title: "Why I started Blogi",
    content:
      "My name is John doe and I am the founder of Blogi. Blogi is My passion, Which is why I'm so excited",
    createdBy: "Jane Cooper",
    createdAt: "Apr 12, 2020",
  },
  {
    image: "images/7.jpg",
    name: "S",
    title: "Why I started Blogi",
    content:
      "My name is John doe and I am the founder of Blogi. Blogi is My passion, Which is why I'm so excited",
    createdBy: "Jane Cooper",
    createdAt: "Apr 12, 2020",
  },
];

function paginator(items, current_page, per_page_items) {
  let page = current_page || 1,
    per_page = per_page_items,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
}

function Features() {
  // const count = Math.ceil(Featureblogs.length / 4);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(Featureblogs, value, 4).page);
  };

  return (
    <Box sx={{ mt: 6, mb: 2 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ mb: 5 }}>
        Feature Blogs
      </Typography>
      <Grid container spacing={6}>
        {paginator(Featureblogs, page, 4).data.map((value, index) => {
          return (
            <Grid
              key={index < Featureblogs.length - 1}
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <Card sx={{ minHeight: 400, borderRadius: "15px" }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={value.image}
                  title="Blog Images"
                  loading="lazy"
                />
                <Box align="right" sx={{ px: 3, mt: -6 }}>
                  <Avatar
                    sx={{ height: 64, width: 64 }}
                    className="fea_card_ava"
                  >
                    {value.name}
                  </Avatar>
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    align="left"
                    sx={{ fontWeight: "bolder" }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    align="left"
                    sx={{ mb: 1 }}
                  >
                    {value.content}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      By{" "}
                      <Link to="#" className="Card_links">
                        <b>{value.createdBy}</b>
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.createdAt}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
          sx={{ mt: 2 }}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
}

export default Features;
