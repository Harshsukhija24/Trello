import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MainLayout from "./layout/Mainlayout";
import BoardDetail from "./Pages/BoardDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path=":id" element={<BoardDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
