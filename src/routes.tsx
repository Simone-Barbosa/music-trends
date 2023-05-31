import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ArtistPage/>} path="/artist" />
      </Routes>
    </BrowserRouter>
  );
}
