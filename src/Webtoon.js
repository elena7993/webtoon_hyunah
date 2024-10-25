import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import Header from "./components/Header";

const Webtoon = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub:id" element={<Sub />} />
      </Routes>
    </HashRouter>
  );
};

export default Webtoon;
