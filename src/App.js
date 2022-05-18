import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./pages/createnewblog";
import Blogs from "./pages/blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/blogs" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
