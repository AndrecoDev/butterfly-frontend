import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Question from "./pages/Question/Question";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<Question />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
