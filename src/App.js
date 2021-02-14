import React from "react";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User
        picture={{ medium: "" }}
        name={{ first: "", last: "" }}
        id={{ value: "" }}
        location={{ street: "", city: "", state: "", postcode: "" }}
        email=""
        phone=""
      />
    </div>
  );
}

export default App;
