import Link from "next/link";
import Layout from "../components/Layout";


function About() {

    return <Layout pageTitle={"You win as many as you lose"}>
        <div className="not-found">
            <h1>RAIN DELAY</h1>

            <p>The content you are looking for is currently unavailable for server reasons.</p>
            <p>It may be a temporary issue, so please try again later.</p>

        </div>
    </Layout>
}

export default About