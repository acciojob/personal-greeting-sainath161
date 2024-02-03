
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit = "{handleSubmit}">
          <label>
            Enter your name:
            <input type = "text" value = {userName} onChange = {handleNameChange} />
          </label>
          <button type = "submit"> Submit </button>
        </form>
      {submitted && ( 
        <p>
          Hello {userName}!
        </p>
      )}
    </div>
  )
}

export default App
