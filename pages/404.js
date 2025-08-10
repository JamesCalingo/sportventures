import Link from "next/link";
import Layout from "../components/Layout";


function About() {

    return <Layout pageTitle={"You just got 404'd"}>
        <div className="not-found">
            <h1>CHOOSE YOUR METAPHOR:</h1>
            <ul id="metaphors">
                <li>Strike 3</li>
                <li>Out of Bounds</li>
                <li>Incomplete Pass</li>
                <li>Airball</li>
                <li>Missed the net</li>
                <li>"Juuuuust a bit outside"</li>
                <li>"Looks like he...hit a tree"</li>
            </ul>
            <p>It appears that you've tried to access something that doesn't exist.</p>


        </div>
    </Layout>
}

export default About