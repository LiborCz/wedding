import { Route, Routes } from "react-router-dom";
import Wedding from "@/pages/wedding";

function App() {
  return (
    <Routes>
      {/* <Route path="/wedding" element={<Wedding />} /> */}
      {/* <Route path="*" element={<Navigate to="/wedding" replace/>} /> */}
      <Route path="*" element={<Wedding />} />
    </Routes>
  );
}

export default App;
