import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
export default function User({item: {id, name}}) {
    return (
        <div>
            {id}. {name} - <Link to={'/users/' + id + '/allposts'}>User posts</Link>
        </div>
    );
}