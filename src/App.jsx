import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CreateTab from "./CreateTab";
import Home from "./Home";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <>
      <section style={{ padding: "48px" }}>
        <div
          className="container"
          style={{
            border: "2px solid black",
            backgroundColor: "black",
            borderRadius: "15px",
            color: "white",
            height: "599px",
          }}
        >
          <div className="p-1">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="CreateTab" element={<CreateTab />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
