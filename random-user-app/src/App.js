import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import emailicon from "./assets/email.svg";
import locationicon from "./assets/location.svg";
import phoneicon from "./assets/phone.svg";

const App = () => {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const url = "https://randomuser.me/api/";
    const data = await axios(url);
    setUser(data.data.results[0]);
  };

  useEffect(() => {
    getUser();
  }, []);
  const { name, location, email, phone, picture, dob, registered } = user;
  return (
    <div className="container">
      <div className="photo">
        <div>
          <img className="img" src={picture?.medium} alt="" />
        </div>
        <p>
          {name?.first} {name?.last}
        </p>
      </div>

      <div className="mails">
        <div>
          <img src={emailicon} width="40px" alt="" />
        </div>
        <p>{email}</p>
      </div>

      <div className="phones">
        <div>
          <img src={phoneicon} width="40px" alt="" />
        </div>
        <p>{phone}</p>
      </div>

      <div className="locations">
        <div>
          <img src={locationicon} width="40px" alt="" />
        </div>
        <p>{location?.city}</p>
      </div>

      <p>Age:{dob?.age}</p>
      <p>Register Date: {new Date(registered?.date).toLocaleDateString()}</p>
      <button onClick={getUser}>Random User</button>
    </div>
  );
};

export default App;
