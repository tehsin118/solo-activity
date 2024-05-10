import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/home";
import ActivityDetails from "./page/activityDetails";
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activity-details/:id' element={<ActivityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
