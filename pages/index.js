import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from 'axios';

export default function Auth() {
  //pulls username/password
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()
    //checks legitimacy of username/password
    if (username.length === 0 || secret.length === 0) 
    return
    //calls api if username/pass legitimate
    axios.put("https://api.chatengine.io/users/",
    {username, secret},
    {headers: {"Private-key": '8ac50ece-a397-418c-ba54-556d51b166e5'}}
    )
    .then(r => router.push('/chats'))
  }
  return (
  <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth-title">KRISCORD</div>
        <div className="input-container">
          <input
            placeholder="Email"
            className="text-input"
            onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="input-container">
          <input
          type = "password"
            placeholder="Password"
            className="text-input"
            onChange={(e) => setSecret(e.target.value)}/>
        </div>

      <button type = "submit" className="submit-button">
        Login/Signup
      </button>
      </form>

    </div>
  </div>
  )
}
