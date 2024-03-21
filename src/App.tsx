import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import NewNote from "./components/NewNote/NewNote";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<p>Show</p>} />
          <Route path="edit" element={<p>Edit</p>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
