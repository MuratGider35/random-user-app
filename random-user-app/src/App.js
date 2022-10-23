import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import mail from "./assets/email.svg";

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
      <div className="container">
        <div className="image">
          <div>
            <img src={user.picture.medium} alt="" />
          </div>
          <h1>
            {user?.name.first} {user?.name.last}
          </h1>
          <div className="mail">
            <div>
              <img src={mail} width="40px" alt="" />
            </div>
            <p>{user.email}</p>
          </div>
        </div>
      </div>

      <button onClick={() => setIschange(!ischange)}>change</button>
    </div>
  );
}
export default App;
