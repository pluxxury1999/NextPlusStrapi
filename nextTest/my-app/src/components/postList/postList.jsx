import { useState, useEffect } from "react";
import { getPosts } from "../../app/services/registerUser";
import "./postList.css";
const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPosts();
            setPosts(response);
        };
        fetchData();
    }, []);

    const items = posts.map((post) => {
        return (
            <li key={post.id} className="listItem">
                <h1 className="itemTitle">{post.attributes.Title}</h1>
                <p className="itemDesc">{post.attributes.Description}</p>
            </li>
        )
    });

    return (
        <ul>
            {items}
        </ul>
    );
};

export default PostsList;
