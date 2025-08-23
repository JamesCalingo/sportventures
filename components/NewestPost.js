import Link from "next/link";

function NewestPost(props) {
    const { slug, display, date } = props
    return <div id="newest" className="grid-post">
        <Link href={`/${slug}`}>
            <div className="section-header">

                <span id="newest-post">
                    NEW:<br />
                    {display}
                </span>
            </div>
            <p className="list-date">Published on {new Date(date).toLocaleDateString()}</p>
        </Link>

    </div>
}

export default NewestPost;