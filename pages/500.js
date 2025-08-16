import Layout from "../components/Layout";

function Error500() {

    return <Layout pageTitle={"500 Error"}>
        <div className="not-found">
            <h1>RAIN DELAY</h1>

            <p>The content you are looking for is currently unavailable.</p>
            <p>It may be a temporary issue, so please try again later.</p>

        </div>
    </Layout>
}

export default Error500