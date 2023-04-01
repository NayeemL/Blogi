import { ImageList, ImageListItem, Box, Typography } from "@mui/material";
import React from "react";
import "../Css/homePage.css";

const CompanyImages = [
    {
        title:"google",
        img:"images/companyImages/1.png"
    },
    {
        title:"google",
        img:"images/companyImages/2.png"
    },
    {
        title:"google",
        img:"images/companyImages/3.png"
    },
    {
        title:"google",
        img:"images/companyImages/4.png"
    },
    {
        title:"google",
        img:"images/companyImages/5.png"
    },
    {
        title:"google",
        img:"images/companyImages/6.png"
    },
]

function CompanyList() {
  return (
    <Box sx={{ mt: 12 }}>
      <h1 className="blog_title">You Are In Right Place</h1>
      <Typography variant="body1" color="text.secondary">
        Some of the best teams are already transforming their management
      </Typography>
      <ImageList variant="quilted" cols={3} gap={8} sx={{mt:6}} className="company_logo">
      {CompanyImages.map((item) => (
        <ImageListItem key={item.img} sx={{borderRadius:"50%"}}>
          <img 
            style={{height:"auto", width:"200px", padding:"4%"}}
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}

export default CompanyList;
