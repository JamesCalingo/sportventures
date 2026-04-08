import Link from "next/link";

function GridItem(props) {
    const { slug, display, date, subtitle } = props
    
    return <div className="list-post">
        <a href={`/${slug}`}>
            <h2>{display}</h2>
            <p>{subtitle}</p>
        </a>
        <em>{new Date(date).toLocaleDateString()}</em>
    </div>
}

export default GridItem;