import React from "react";
import './App.css';

//routes
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import QRCode from "./components/qrcode/QRCode";

function App() {
    return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={QRCode}/>
          </Routes>
        </BrowserRouter>

      </div>
    );
  }

export default App;
