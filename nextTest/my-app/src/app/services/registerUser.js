const _apiBase = "http://localhost:1337/api";
const _loginRoute = "/auth/local";
const _registerRoute = "/auth/local/register";
const _postRoute = "/posts";
const _loginUrl = _apiBase + _loginRoute;
const _registerUrl = _apiBase + _registerRoute;
const _postUrl = _apiBase + _postRoute;

import axios from "axios";

const urlGet = async (url) => {
    const response = await fetch(url, {
        method: "GET",
        body: null,
        headers: { "Content-Type": "aplication/json" },
    });
    const data = await response.json();
    return data;
};

const urlPost = async (url, username, password) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ identifier: username, password: password }),
        headers: { "Content-Type": "aplication/json" },
    });
    const data = await response.json();
    return data;
};

// urlPost(_loginUrl, "user", "User12345").then((data) => console.log(data));

// fetch("http://localhost:1337/api/auth/local", {
//     // method: "POST",
//     // headers: {
//     //     "Content-Type": "aplication/json"
//     // },
//     // body: JSON.stringify({
//     //     identifier: "user",
//     //     password: "User12345",
//     // }),
//     identifier: "user",
//     password: "User12345",
// })
//     .then((response) => response.json()) // обрабатываем ответ в формате JSON
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

const axios = require("axios");

axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: 'user@user.com',
    password: 'User12345',
  })
  .then(response => {
    // Handle success.
    console.log(response.data)
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

