import Link from "next/link";
import { displayDate } from "../utils/utils.js";

function GridItem(props) {
    const { slug, display, publishDate, date, subtitle } = props
    
    return <div className="list-post">
        <a href={`/${slug}`}>
            <h2>{display}</h2>
            <p>{subtitle}</p>
        </a>
        <em>{displayDate(publishDate, date)}</em>
    </div>
}

export default GridItem;