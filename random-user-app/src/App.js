import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [ischange, setIschange] = useState(true);
  const [user, setUser] = useState();
  const randomUser = async () => {
    const url = "https://randomuser.me/api/";
    const { data } = await axios(url);
    console.log(data.results[0]);
    setUser(data.results[0]);
  };

  useEffect(() => {
    randomUser();
  }, [ischange]);

  return (
    <div className="App">
      <h1>
        {user?.name.first} {user?.name.last}
      </h1>
      <button onClick={() => setIschange(!ischange)}>change</button>
    </div>
  );
}
export default App;
