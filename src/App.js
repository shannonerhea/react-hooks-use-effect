import React, { useState, useEffect } from "react"

function App() {
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <button>Click Me</button>
      <input type="text" placeholder="Type away..." />
    </div>
  )


}

export default App;
