import Head from "next/head";
import Link from "next/link"

function Layout({ children, pageTitle }) {
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
        <main>{children}</main>
        <footer>
          <div className="links">
            {pageTitle !== "About me" &&<Link href={"/about"}>About me</Link>}
            {pageTitle !== "Sportventures" &&<Link href={"/"}>Back to home</Link>}
          </div>

          <p>All content © James Calingo</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
