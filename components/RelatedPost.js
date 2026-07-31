import Link from "next/link"

function Tag(props) {
    const { title, link } = props
    return (
        <p>
            <Link href={link}>{title}</Link>
        </p>

    )
}

export default Tag