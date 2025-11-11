function Tag(props) {
    const { tag, index, last } = props
    return (

        <span className="tag"> {tag} {index !== last && "|"}</span>

    )
}

export default Tag