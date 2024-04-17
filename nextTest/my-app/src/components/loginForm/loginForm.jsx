import "./loginForm.css";
import { useState } from "react";
import { loginUser } from "../../app/services/registerUser";
import { on } from "events";

function LoginForm(props) {
    const { onSubmitSuccess } = props;
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await loginUser(formData.username, formData.password);
            console.log(response);
            if (!response.jwt) {
                throw new Error("Ошибка при отправке данных");
            }

            const data = response;
            onSubmitSuccess(data);
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="username">username</label>
            <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
