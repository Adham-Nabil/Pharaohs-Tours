import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import ToursList from "./pages/ToursList";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<ToursList />} />
        <Route path="/tours/:id" element={<TourDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
