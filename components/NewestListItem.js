import Link from "next/link";
import { displayDate } from "../utils/utils.js";

function NewestListItem(props) {
    const { slug, display, title, subtitle, date, publishDate, background } = props
    return <div className="grid-post newest-list-item" style={{ backgroundImage: `url(${background})`, "backgroundPositionX": "45%", "backgroundPositionY": "50%", }}>
        <Link href={`/${slug}`}>
            <h2 className="list-title">{display ? display : title}</h2>
            <em>{subtitle}</em>
            <p className="list-date">{displayDate(publishDate, date)}</p>
        </Link>
    </div>
}

export default NewestListItem;