import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Join from "./components/Join/Join.js";
import Chat from "./components/Chat/Chat.js"





const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Join/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
