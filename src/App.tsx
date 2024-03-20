import { Routes, Route, Navigate } from "react-router-dom";

import NewNote from "./components/NewNote";
import "./App.css";

function App() {
  return (
    <div className="border border-solid border-red-400 mx-10 my-10">
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
