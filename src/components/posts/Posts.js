import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Comments from "../comments/Comments";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data]);
        });
    }, []);
    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
            <Route path={'/posts/:id/comments'} component={Comments}/>
        </div>
    );
}