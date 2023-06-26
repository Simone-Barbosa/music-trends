import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import PageNotFound from "./components/PageNotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ArtistPage />} path="/artist/:id" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
