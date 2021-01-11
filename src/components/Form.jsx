import React, { useState } from "react";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  return (
    <div className="main">
      <form>
        {/* <label htmlFor="firstname">
        Firstname:
        <input
          type="text"
          name="firstname"
          id="firstName"
          placeholder="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label htmlFor="lastname">
        Lastname:
        <input
          type="text"
          name="lastname"
          id="lastName"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label> */}
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button">valid</button>
      </form>
    </div>
  );
};

export default Account;
