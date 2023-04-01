import React from "react";
import NavBar from "../Components/navBar";
import Features from "./Features";
import PopularBlogs from "./PopularBlogs";
import NotificationForm from "../Components/notificationForm";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CompanyList from "./CompanyList";
import Footer from "../Components/footer";

function homePage() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#a3aaab",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <Container fixed>
          <PopularBlogs/>
          <Features/>
          <CompanyList/>
          <NotificationForm/>
          </Container>
          <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default homePage;
