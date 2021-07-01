export default function Comment({item: {id, name, body}}) {
    return (
        <div>
            <hr/>
            <b>{id}. {name}</b>
            <p><i>{body}</i></p>
            <hr/>
        </div>
    );
}