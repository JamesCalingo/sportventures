import Link from "next/link"

function Tag(props) {
    const { tag, index, last } = props
    return (

            <li className="tag">{tag}</li>

        // <span className="tag"> <Link   href={"/allposts"} tag={tag}> {tag}</Link> {index !== last && "|"}</span>

    )
}

export default Tag