import { Routes, Route, Navigate } from "react-router-dom";

import NewNote from "./components/NewNote/NewNote";
import "./App.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<p>Show</p>} />
          <Route path="edit" element={<p>Edit</p>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
