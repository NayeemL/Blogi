import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Box,
  SvgIcon,
} from "@mui/material";
import { blue, pink, red } from "@mui/material/colors";
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
        <Grid container space={2} sx={{ pt: 3 }}>
          <Grid item lg={2}>
            <Typography
              variant="h5"
              noWrap
              component="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "30px",
              }}
            >
              Blogi
            </Typography>
          </Grid>
          <Grid item lg={1.5}>
            <Typography
              variant="body1"
              component="div"
              align="left"
              sx={{ fontWeight: 500, mb: 1 }}
            >
              Product
            </Typography>
            {product.map((data) => (
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                align="left"
                sx={{ mb: 1 }}
              >
                {data.name}
              </Typography>
            ))}
          </Grid>
          <Grid item lg={2}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, mb: 1 }}
              component="div"
              align="left"
            >
              Support
            </Typography>
            {support.map((data) => (
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                align="left"
                sx={{ mb: 1 }}
              >
                {data.name}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, mb: 1 }}
              component="div"
              align="left"
            >
              Legal
            </Typography>
            {legal.map((data) => (
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                align="left"
                sx={{ mb: 1 }}
              >
                {data.name}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, mb: 1 }}
              component="div"
              align="left"
            >
              Company
            </Typography>
            {company.map((data) => (
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                align="left"
                sx={{ mb: 1 }}
              >
                {data.name}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ pr: 6 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, mb: 1 }}
              component="div"
              align="left"
            >
              Get it
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              align="left"
              sx={{ mb: 1 }}
            >
              Available on Chrome Store
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ display: "flex" }}
            >
              Download Now
            </Button>
          </Grid>
        </Grid>
      </>
      <Divider />
      <>
        <Container>
          <Grid className="footer_copyrights" sx={{pt:1}}>
            <Grid item lg={6}>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                align="left"
                sx={{ mb: 1 }}
              >
                All rights are reserved @Blogi 2023
              </Typography>
            </Grid>
            <Grid item lg={6}>
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
