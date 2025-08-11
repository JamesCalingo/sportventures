import Layout from "../components/Layout";

const metaphors = [
  "Strike 3",
  "Out of Bounds",
  "Incomplete Pass",
  "Airball",
  "Missed the net",
  '"Juuuuust a bit outside"',
  '"Looks like he...hit a tree"',
];

const randomMetaphor = metaphors[Math.floor(Math.random() * metaphors.length)];

function About() {

    return <Layout pageTitle={"You just got 404'd"}>
        <div className="not-found">
            <h1>404 </h1>
            <h2>{randomMetaphor}</h2>
       
            <p>It appears that you've tried to access something that doesn't exist.</p>


        </div>
    </Layout>
}

export default About