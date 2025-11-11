import Link from "next/link"

function Tag(props) {
    const { tag, index, last } = props
    return (

        <span className="tag"> <Link href={`/tagged/${tag}`}> {tag}</Link> {index !== last && "|"}</span>

    )
}

export default Tag