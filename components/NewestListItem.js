import Link from "next/link";

function PinnedItem(props) {
    const { slug, display, title, subtitle, date } = props
    return <div className="grid-post pinned">
        <Link href={`/${slug}`}>
            <h2 className="list-title">{display ? display : title}</h2>
            <em>{subtitle}</em>
            <p className="list-date">{new Date(date).toLocaleDateString()}</p>
        </Link>
    </div>
}

export default PinnedItem;