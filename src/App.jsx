/* eslint-disable react/display-name */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/LandingPage";
import CampaignPage from "./assets/CampaignPage";
import AboutPage from "./assets/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/campaign/:user_id" element={<CampaignPage />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
