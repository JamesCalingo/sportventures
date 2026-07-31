import Link from "next/link";
import { displayDate } from "../utils/utils.js";

function NewestPost(props) {
    const { slug, display, title, subtitle, date, publishDate, background } = props
    return <div id="newest" className="grid-post" style={{ backgroundImage: `url(${background})`, "backgroundPositionX": "center", "backgroundPositionY": "50%",  }}>
        <Link href={`/${slug}`}>
            <div className="section-header">

                <span id="newest-post">
                    NEWEST:<br />
                    {display}
                </span>
            </div>
            <em>{subtitle}</em>
            <p className="list-date">{displayDate(publishDate, date)}</p>
        </Link>

    </div>
}

export default NewestPost;