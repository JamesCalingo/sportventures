import Link from "next/link";

function NewestPost(props) {
    const { slug, display, date } = props
    return <div className="section-header newest">

        <span id="newest-post">
            NEW:<br />
            <Link href={`/${slug}`}>{display}</Link>
        </span>
        {/* <p>posted {new Date(date).toLocaleDateString()}</p> */}

    </div>
}

export default NewestPost;