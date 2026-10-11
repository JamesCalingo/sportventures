function Badge(props) {
    const { badge } = props

    return <div>
        {badge ? <a href="/about#badges">
            <img className="badge" src={badge} alt={"A badge"} />
        </a>: <div style={{ width: "250px", height: "250px" }} />}
    </div>

}

export default Badge