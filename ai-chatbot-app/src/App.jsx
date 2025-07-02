import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
