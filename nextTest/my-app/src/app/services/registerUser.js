const _apiBase = "http://localhost:1337/api";
const _loginRoute = "/auth/local";
const _registerRoute = "/auth/local/register";
const _postRoute = "/posts";
const _loginUrl = _apiBase + _loginRoute;
const _registerUrl = _apiBase + _registerRoute;
const _postUrl = _apiBase + _postRoute;
const _userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEzMzQxNzQ2LCJleHAiOjE3MTU5MzM3NDZ9.uYOd9evaIPltsUEWy2sKmovUG59rl9N8fzfIkjM2-Ek"

import axios from "axios";

const loginUser = async (email, password) => {
    try {
        const response = await axios.post(_loginUrl, {
            identifier: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const getPosts = async (token = _userToken) => {
    try {
        const response = await axios.get(_postUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        response
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export { loginUser, getPosts };

