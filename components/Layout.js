import Head from "next/head";
import Link from "next/link"

function Layout({ children, pageTitle }) {

  const nonBlogPosts = ["Sportventures", "About this site - Sportventures", "All Posts - Sportventures", "404 - Sportventures", "500 - Sportventures"]
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
      </Head>
      <div>

        {pageTitle !== "Sportventures" && <header>
          <Link href={"/"}>Sportventures</Link>
        </header>
        }
        <main>
          {children}
        </main>
        <footer>
          {!nonBlogPosts.includes(pageTitle) && <hr />}
          <div className="links">
            {pageTitle !== "About this site - Sportventures" && <Link href={"/about"}>About this site</Link>}
            {pageTitle !== "Sportventures" && <Link href={"/"}>Back to home</Link>}
            {pageTitle !== "All Posts - Sportventures" && <Link href="/allposts">All Posts</Link>}
            {<a href="mailto:contact@sportventures.blog">Contact</a>}
          </div>

          <p>All content © James Calingo</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
