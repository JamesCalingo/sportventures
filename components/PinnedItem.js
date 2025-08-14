import Link from "next/link";

function PinnedItem(props) {
    const { slug, display, date } = props
    return <div className="pinned">
        <Link href={`/${slug}`}>

            <h1>{display}</h1>

            <p className="list-date">{new Date(date).toLocaleDateString()}</p>

        </Link>
    </div>
}

export default PinnedItem;