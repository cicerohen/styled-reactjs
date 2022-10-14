import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "../components/GlobalStyles";
import { ThemeProvider } from "../contexts/Theme";

import { HomeViewContainer } from "./views/HomeViewContainer";

export const AppContainer = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeViewContainer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
