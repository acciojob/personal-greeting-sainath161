
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  
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
