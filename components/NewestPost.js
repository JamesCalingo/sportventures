import Link from "next/link";

function NewestPost(props) {
    const { slug, display, date } = props
    return <div id="newest">
     <div className="section-header">

        <span id="newest-post">
            NEW:<br />
            <Link href={`/${slug}`}>{display}</Link>
        </span>
    </div>
        <p className="list-date">Published on {new Date(date).toLocaleDateString()}</p>

    </div>
}

export default NewestPost;