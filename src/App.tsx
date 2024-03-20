import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/new" element={<p>New</p>} />
        <Route path="/:id">
          <Route index element={<p>Show</p>} />
          <Route path="edit" element={<p>Edit</p>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
