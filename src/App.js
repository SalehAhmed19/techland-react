import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Reviews from "./Components/Review/Review";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
