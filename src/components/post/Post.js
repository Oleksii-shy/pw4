export default function Post({item: {id, title, body}}) {
    return (
        <div>
            <hr/>
            {id}. {title}
            <p><i>{body}</i></p>
            <hr/>
        </div>
    );
}