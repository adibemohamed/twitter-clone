import React from "react";
import "./App.css"; 
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <h1>Hello World🚀 🔥</h1>

      {/* Sidebar */} 
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widget */}
    </div>
  );
}

export default App;
