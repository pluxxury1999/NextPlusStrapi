"use client";

// import LoginForm from "../components/loginForm/loginForm";
// import { loginUser } from "./services/registerUser";
import React from "react";
import { useState, useEffect } from "react";
import "./page.css";
import PostList from "../components/postList/postList";

export default function Home() {
    // const [auth, setAuth] = useState(false);

    // const handleFormSubmit = (responseData) => {
    //     console.log("Ответ сервера:", responseData);

    // };

    // return <main>{auth ? <h1>Home</h1> : <LoginForm onSubmitSuccess={handleFormSubmit} />}</main>;

    return (
        <React.StrictMode>
            <main>
                <PostList />
            </main>
        </React.StrictMode>
    );
}
