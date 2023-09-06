import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import PageNotFound from "./components/PageNotFound";
import PageAbout from "./components/AboutPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ArtistPage />} path="/artist/:id" />
        <Route element={<PageNotFound />} path="*" />
        <Route element={<PageAbout />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
}
