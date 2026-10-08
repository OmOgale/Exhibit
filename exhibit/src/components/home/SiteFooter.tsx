import styles from "./home.module.css";
import ThemeToggle from "./ThemeToggle";

const ring = "https://cs.uwatering.com/#https://omogale.vercel.app";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.ring} aria-label="CS Webring">
        <a href={`${ring}?nav=prev`} aria-label="Previous site in CS Webring">←</a>
        <a href={ring} aria-label="CS Webring">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://cs.uwatering.com/icon.black.svg" alt="" width={18} height={18} className={styles.ringIcon} />
        </a>
        <a href={`${ring}?nav=next`} aria-label="Next site in CS Webring">→</a>
      </nav>
      <ThemeToggle />
    </footer>
  );
}
