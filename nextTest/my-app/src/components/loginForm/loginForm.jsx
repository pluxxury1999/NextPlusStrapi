import "./loginForm.css";
import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [logining, setLogining] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        console.log(process.env.API_BASE);
    };

    return (
        <form onSubmit={formHandler} method="POST">
            <label htmlFor="username">username</label>
            <input type="text" name="username" placeholder="Username" onChange={handleInputChange}/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
