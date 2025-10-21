import Link from "next/link";

function NewestListItem(props) {
    const { slug, display, title, subtitle, date } = props
    return <div className="grid-post newest-list-item">
        <Link href={`/${slug}`}>
            <h2 className="list-title">{display ? display : title}</h2>
            <em>{subtitle}</em>
            <p className="list-date">{new Date(date).toLocaleDateString()}</p>
        </Link>
    </div>
}

export default NewestListItem;