import { Navigate, Route, Routes } from "react-router-dom";
import Wedding from "@/pages/wedding";

function App() {
  return (
    <Routes>
      <Route path="/wedding" element={<Wedding />} />
      <Route path="*" element={<Navigate to="/wedding" replace/>} />
    </Routes>
  );
}

export default App;
