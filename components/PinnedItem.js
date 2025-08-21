import Link from "next/link";

function PinnedItem(props) {
    const { slug, display, description, date } = props
    return <div className="grid-post pinned">
        <Link href={`/${slug}`}>
            <div>
                <h2 className="list-title">{display}</h2>
                {description && <p>{description}</p>}
            </div>

            <p className="list-date">Published on {new Date(date).toLocaleDateString()}</p>

        </Link>
    </div>
}

export default PinnedItem;