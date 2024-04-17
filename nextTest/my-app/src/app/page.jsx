"use client";

// import LoginForm from "../components/loginForm/loginForm";
// import { loginUser } from "./services/registerUser";
import { useState, useEffect } from "react";
import "./page.css";
import { getPosts } from "./services/registerUser"

export default function Home() {
    // const [auth, setAuth] = useState(false);

    // const handleFormSubmit = (responseData) => {
    //     console.log("Ответ сервера:", responseData);
        
    // };

    // return <main>{auth ? <h1>Home</h1> : <LoginForm onSubmitSuccess={handleFormSubmit} />}</main>;

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await getPosts();
            console.log(response);
        };
        fetchData();
        const userToken = process.env.TOKEN;
        console.log(userToken);
        // setPosts(response.data);

    }, []);

    

    return <h1>home</h1>;
}
