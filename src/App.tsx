import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Table from "./pages/Table";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
