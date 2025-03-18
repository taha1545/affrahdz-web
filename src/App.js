import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <div className="w-full h-screen bg-gray-200 text-black">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
