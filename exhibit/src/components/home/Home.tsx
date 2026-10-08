import styles from "./home.module.css";
import Soroban from "./Soroban";
import SiteFooter from "./SiteFooter";
import ProjectList from "./ProjectList";
import { projects } from "@/data/projects";

const work = [
  {
    company: "Grammarly",
    domain: "grammarly.com",
    role: "Software Engineer Intern",
    dates: "Jun–Aug 2026",
    detail: "Continued my GPTZero work after Superhuman (Grammarly) acquired it.",
  },
  {
    company: "GPTZero",
    domain: "gptzero.me",
    role: "Software Engineer Intern",
    dates: "Jan–May 2026",
    detail:
      "Brought the search behind hallucination detection in-house on OpenSearch, saving $100K+ a year, and built a citation cache that saves another $55K+. Won the quarterly hackathon.",
  },
  {
    company: "Carta",
    domain: "carta.com",
    role: "Backend Software Engineer Intern",
    dates: "Summer 2025",
    detail:
      "Built eligibility checks that route expenses automatically, saving 600+ hours of manual triage a year. Also built an AI tool that reads wire instructions out of spreadsheets, saving 5,000+ hours of manual entry a year.",
  },
  {
    company: "Ford Pro",
    domain: "ford.com",
    role: "Software Engineer Intern",
    dates: "Fall 2024",
    detail: "Architected the vehicle enrollment flow, handling 5M+ transactions a year. Introduced composite monitoring across 100+ teams.",
  },
  {
    company: "Ford",
    domain: "ford.com",
    role: "Software Developer Intern",
    dates: "Winter 2024",
    detail: "Built KPI reports in Next.js and cut their load times by 90%.",
  },
  {
    company: "Ford",
    domain: "ford.com",
    role: "Systems Software Developer Intern",
    dates: "Summer 2023",
    detail: "Owned the KPIs for evaluating the Rigil ECU behind Ford’s next-gen infotainment, and set up Ford Ottawa’s first lab installation.",
  },
];

const community = [
  { org: "UW Blueprint", what: "Project lead on a Discord integration for BobaTalks (13K+ members); before that, built tools for Marillac Place and Extend-A-Family." },
  { org: "WATonomous", what: "Autonomous software engineer." },
  { org: "Google Developer Group", what: "Software executive, built auth for GDG's monorepo." },
  { org: "UW Computer Science Club", what: "Built the CS class profile, visualizing the graduating class’s journeys." },
  { org: "Hack the North and Hack Canada", what: "Hackathon judge." },
];

const links = [
  { label: "GitHub", href: "https://github.com/OmOgale" },
  { label: "LinkedIn", href: "https://ca.linkedin.com/in/om-ogale" },
  { label: "Email", href: "mailto:oogale@uwaterloo.ca" },
  { label: "Résumé", href: "/Resume@OmOgale.pdf" },
  { label: "Blog", href: "/blog" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1>Om Ogale</h1>
            <p className={styles.tagline}>Senior at University of Waterloo studying Computer Science.</p>
            <nav className={styles.links} aria-label="Elsewhere">
              {links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <Soroban />

        <section className={styles.prose}>
          <p>
            I like building at the intersection of AI and infrastructure, most
            recently at GPTZero. Previously worked on fullstack and systems at Carta and Ford.
          </p>
          <p>
            At GPTZero I led our investigations initiative into LLM hallucinations, primarily the investigations into{" "}
            <a href="https://www.ft.com/content/a61cbcae-95e4-4449-86e1-ef40fb306f4e">EY</a>,{" "}
            <a href="https://www.ft.com/content/b3828e92-4961-4b39-84f0-c42f33be3c3f">KPMG</a>, and{" "}
            <a href="https://www.ft.com/content/7e149ac8-2ce2-4266-8940-192f9821b33c">PwC</a>. All three reached the front
            page of the Financial Times, and the work was highlighted in Grammarly’s acquisition of the company. Also featured by 
            Bloomberg, Forbes, the Telegraph, and more.
          </p>
          <p>
            Outside of code I like playing video games, reading, and <a href="/blog">writing</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Work</h2>
          <p className={styles.note}>An outstanding evaluation on five of my co-op terms.</p>
          <ul className={styles.work}>
            {work.map((item) => (
              <li key={item.company + item.dates}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`} alt="" width={20} height={20} loading="lazy" />
                <span className={styles.role}>
                  <strong>{item.company}</strong> {item.role}
                </span>
                <span className={styles.dates}>{item.dates}</span>
                <span className={styles.detail}>{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          <ProjectList projects={projects.filter((project) => project.featured)} />
          <a href="/projects" className={styles.viewAll}>
            View all projects
          </a>
        </section>

        <section className={styles.section}>
          <h2>Around campus</h2>
          <ul className={styles.community}>
            {community.map((item) => (
              <li key={item.org}>
                <strong>{item.org}.</strong> {item.what}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Before Waterloo</h2>
          <ul className={styles.earlier}>
            <li>
              <a href="https://saudigazette.com.sa/article/167373">First place</a> at the 21st UCMAS International Abacus
              Competition, representing Saudi Arabia. Our team placed second overall among 58 countries.
            </li>
            <li>
              <a href="/Eureka_Certificate.pdf">Third out of ~13,500 teams</a> in IIT Bombay’s Eureka! Junior 2021 pitch competition.
            </li>
            <li>Debating and public speaking, including serving as President and Vice President Education of two Toastmasters youth leadership clubs.</li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
