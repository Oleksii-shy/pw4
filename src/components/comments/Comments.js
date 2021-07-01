import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Comment from "../comment/Comment";

export default function Comments({match: {params: {id}}}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {
            setComments([...value.data]);
        });
    }, [id]);
    const commentsFilter = comments.filter(value => value.postId == id);
    return (
        <div>
            {commentsFilter.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    );
}