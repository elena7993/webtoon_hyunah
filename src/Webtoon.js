import { HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

const Webtoon = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub:id" element={<Sub />} />
      </Routes>
    </HashRouter>
  );
};

export default Webtoon;
