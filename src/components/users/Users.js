import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserPosts from "../user-posts/UserPosts";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data]);
        });
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <Route path={'/users/:id/allposts'} component={UserPosts}/>
        </div>
    );
}