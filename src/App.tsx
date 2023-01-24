import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicLayout from "./components/BasicLayout/BasicLayout";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import "./App.scss";

const Items = lazy(() => import("./pages/Items/Items"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Proxima Nova"',
      "-apple-system",
      '"Helvetica Neue"',
      "Helvetica",
      "Roboto",
      "Arial",
      "sans-serifway",
      "Arial",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1018,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: "#3483FA" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          boxShadow: "none",
        },
        sizeLarge: {
          fontSize: "1.2rem",
        },
      },
    },
  },
});

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <SearchBar />
          <BasicLayout>
            <Suspense>
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/items" element={<Items />} />
                <Route path="/items/:id" element={<ProductDetail />} />
              </Routes>
            </Suspense>
          </BasicLayout>
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
