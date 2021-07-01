import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";

export default function UserPosts({match: {params: {id}}}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(id).then(value => {
            setPosts([...value.data]);
        });
    }, [id]);
    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
        </div>
    );
}