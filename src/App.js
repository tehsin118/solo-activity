import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/home";
import AcitivtyDetails from "./page/acitivtyDetails";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity-details" element={<AcitivtyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
