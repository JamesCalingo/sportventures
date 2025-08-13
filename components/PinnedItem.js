import Link from "next/link";

function PinnedItem(props) {
    const { slug, display, date } = props
    return <div className="pinned-post">
        <a href={`/${slug}`}>

            <h1>{display}</h1>

            {/* <p className="list-date">{new Date(date).toLocaleDateString()}</p> */}

        </a>
    </div>
}

export default PinnedItem;