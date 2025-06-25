import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/Main";
import Home from "./pages/Home";
import PingContainer from "./components/Ping/PingContainer";
import Soon from "./components/common/Soon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="ping" element={<PingContainer />} />
          <Route path="soon" element={<Soon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
