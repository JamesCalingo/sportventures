import Link from "next/link";

function GridItem(props) {
    const { slug, display, date } = props
    return <div className="grid-post">
        <Link href={`/${slug}`}>

            <h2 className="list-title">{display}</h2>

            <p className="list-date">Published on<br/>{new Date(date).toLocaleDateString()}</p>

        </Link>
    </div>
}

export default GridItem;