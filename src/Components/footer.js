import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Box,
  SvgIcon,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import "../Css/homePage.css";
import * as Fa from "react-icons/fa";

const product = [
  { name: "Pricing" },
  { name: "Features" },
  { name: "Security" },
];
const support = [{ name: "Contact" }, { name: "Platforms" }];
const legal = [
  { name: "Terms of use" },
  { name: "Privacy Policy" },
  { name: "GDPR" },
  { name: "Cookie Policy" },
];
const company = [
  { name: "About" },
  { name: "Blog" },
  { name: "Jobs" },
  { name: "Brand Guidelines" },
];

function footer() {
  return (
    <Box sx={{ mt: 10, backgroundColor: "whitesmoke", width: "100%" }}>
      <>
        <Container>
          <Grid container space={2} sx={{ pt: 3 }}>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <Typography
                variant="h5"
                noWrap
                component="h5"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: "30px",
                  textAlign: { lg: "left", md: "left" },
                  pb: 2,
                }}
              >
                Blogi
              </Typography>
            </Grid>
            <Grid item xs={4} sm={1.5} md={1.5} lg={1.5}>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  textAlign: { xs: "left", lg: "left", md: "left" },
                }}
              >
                Product
              </Typography>
              {product.map((data) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                  sx={{
                    mb: 1,
                    textAlign: { xs: "left", lg: "left", md: "left" },
                  }}
                >
                  {data.name}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4} sm={1.5} md={2} lg={2}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  textAlign: { xs: "left", lg: "left", md: "left" },
                }}
                component="div"
              >
                Support
              </Typography>
              {support.map((data) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                  sx={{
                    mb: 1,
                    textAlign: { xs: "left", lg: "left", md: "left" },
                  }}
                >
                  {data.name}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  textAlign: { xs: "left", lg: "left", md: "left" },
                }}
                component="div"
              >
                Legal
              </Typography>
              {legal.map((data) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                  sx={{
                    mb: 1,
                    textAlign: { xs: "left", lg: "left", md: "left" },
                  }}
                >
                  {data.name}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  textAlign: { xs: "left", lg: "left", md: "left" },
                }}
                component="div"
              >
                Company
              </Typography>
              {company.map((data) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                  sx={{
                    mb: 1,
                    textAlign: { xs: "left", lg: "left", md: "left" },
                  }}
                >
                  {data.name}
                </Typography>
              ))}
            </Grid>
            <Grid
              item
              xs={8}
              sm={3}
              md={2.5}
              lg={2.5}
              // sx={{ pr:{lg:6}}}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  textAlign: { xs: "left", lg: "left", md: "left" },
                }}
                component="div"
              >
                Get it
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                sx={{
                  mb: 1,
                  textAlign: { xs: "left", lg: "left", md: "left" },
                }}
              >
                Available on Chrome Store
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ display: "flex" }}
                size="small"
              >
                Download Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </>
      <Divider />
      <>
        <Container>
          <Grid
            className="footer_copyrights"
            sx={{
              pt: 1,
              display: { xs: "flex" },
              flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                sx={{ mb: 1, textAlign: { lg: "left" } }}
              >
                All rights are reserved @Blogi 2023
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <SvgIcon sx={{ color: red[500] }} fontSize="small">
                <Fa.FaFacebookF />
              </SvgIcon>
              <SvgIcon color="primary" fontSize="small">
                <Fa.FaTwitter />
              </SvgIcon>
              <SvgIcon color="primary" fontSize="small">
                <Fa.FaLinkedinIn />
              </SvgIcon>
              <SvgIcon color="primary">
                <Fa.FaGooglePlusG />
              </SvgIcon>
            </Grid>
          </Grid>
        </Container>
      </>
    </Box>
  );
}

export default footer;
