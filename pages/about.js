import Layout from "../components/Layout";


function About() {

    return <Layout pageTitle={"About this site - Sportventures"}>
        <main>

            <p>I'm originally from the Greater Boston area, moved to New Jersey when I was 9, and have been here ever since (though I did spend two years in Boston as an adult).</p>

            <p>I wasn't really into sports when I was a very young child (and I also wasn't super athletic either), but then, when I was in the seventh grade, something amazing happened:</p>

            <h3>The Boston Red Sox won the World Series.</h3>

            <p>In the aftermath of that moment...something clicked. I began reading up on not just the Red Sox, but baseball in general - learning the names of the 30 Major League Baseball teams and their players, collecting their on field hats...and my interest quickly spread to other sports as well.</p>

            <p>For a few years now, I've actually been writing about the various sporting events that I go to; I feel like it helps me remember them better, and it's a way of keeping my brain active. For the longest time, they were just "hidden" on various Apple Notes and Google Docs, but now, I figured I'd share those writings with the internet. I started with a bunch of baseball stadium reports I wrote in 2025 (as I visited a bunch of stadiums for the first time), then moved on to the other arenas I'd been to that year.</p>

            <p>As a <a href="https://jamescalingo.dev/" target="blank">software engineer</a> (who, BTW, <a href="https://jamescalingo.dev/resume/JamesCalingo.pdf" target="blank">is currently looking for work</a>), I figured the best way for me to do that would be to build my own site as opposed to using WordPress or Medium. The basic layout of this site is copied from the one I made for my personal blog - I don't know how often I'll be updating that site (and it's a mix of personal stuff and technical jargon, so be prepared for that), but you can check it out <a href="https://overclocked-overthoughts.netlify.app" target="blank">here</a>. You can also contact me (via email) <a href="mailto:contact@sportventures.blog">here</a>.</p>

            <p>I hope you'll enjoy my journeys.</p>

            <div id="badges">

                <h2>The badges</h2>

                <p>You'll notice that many of the posts on this site have badges at the top. It's an idea I got in 2025 after receiving a pin commemorating my first visit to <a href="/2025-09-08_gothamfc">Gotham FC</a>, and I felt it would be an interesting way to track various "milestones" for each post on this blog.</p>

                <p>Each badge represents a different milestone:</p>

                <ul style={{ listStyleType: "none" }}>

                    <li className="badge-list">
                        <img className="badge" src="badges/firstvisit.png" alt='A badge that says /"FIRST VISIT /"' /><br />
                        The first time I've visited the place
                    </li>

                    <li className="badge-list">
                        <img className="badge" src="badges/newteam.png" alt='A badge that says "NEW TEAM"' /><br />
                        I've been to the stadium in the past, but I haven't seen the team before
                    </li>

                    <li className="badge-list">
                        <img className="badge" src="/badges/newtoblog.png" alt='A badge that says "NEW TO BLOG"' /><br />
I've been to the stadium AND seen the team, but never posted about it until now
                    </li>

                </ul>

                <p>Not every post on this blog will have a badge, and I started this at the beginning of 2026, so any posts prior to that won't have badges (though I did consider adding them retroactively).</p>

            </div>

        </main>
    </Layout>
}

export default About