import Link from "next/link";

function NewestListItem(props) {
    const { slug, display, title, subtitle, date, background } = props
    return <div className="grid-post newest-list-item" style={{ backgroundImage: `url(${background})`, "backgroundPositionX": "center", "backgroundPositionY": "55%", }}>
        <Link href={`/${slug}`}>
            <h2 className="list-title">{display ? display : title}</h2>
            <em>{subtitle}</em>
            <p className="list-date">{new Date(date).toLocaleDateString()}</p>
        </Link>
    </div>
}

export default NewestListItem;