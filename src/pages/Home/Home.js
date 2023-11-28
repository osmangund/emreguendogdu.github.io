import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";

export default function Home() {
  return (
    <>
      <main id="main">
        I think I should write the main myself on every page.
      </main>
      <section id="blog-section"></section>
      <footer>
        <div id="footer-card-wrapper">
          <h2 id="title-chat">We can build together.</h2>
          <p>
            Pop me an email at emreguendogdu@yandex.com or give me a shout on
            social media.
          </p>
          <div id="contacts-wrapper">
            <a
              href="https://www.linkedin.com/in/osman-emre-gundogdu-066282257/"
              target="_blank"
              rel="external noreferrer"
              class="icon"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/emreguendogdu"
              target="_blank"
              rel="external noreferrer"
              class="icon"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
