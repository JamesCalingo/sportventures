import Head from "next/head";
import Link from "next/link"
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import twitterIcon from "@iconify/icons-simple-icons/twitter";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="stylesheet" href="https://use.typekit.net/xov6xgo.css" />
      </Head>
      <div>
        <header>
          <Link href={"/"}>Sportventures</Link>
        </header>
        <main>{children}</main>
        <footer>
          {/* <a href="https://jamescalingo.dev/#about">About me</a> */}
        
          {/* <a href="https://jamescalingo.dev">My portfolio</a> */}
          <div>

          <Link href={"/about"}>About me</Link>
          <Link href={"/"}>Back to home</Link>
          </div>

         <p>All content © James Calingo</p>
          </footer>
      </div>
    </>
  );
}

export default Layout;
