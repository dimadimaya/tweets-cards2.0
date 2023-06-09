import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Tweets } from "./pages/Tweets/Tweets";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
