import "./App.css";
import Quiz from "./Quiz";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
    </Routes>
  );
}

export default App;
