import home from "./home.module.css";
import styles from "./shell.module.css";
import SiteFooter from "./SiteFooter";

// The frame around every page except home: breadcrumb, column, footer.
export default function PageShell({
  section,
  crumbs = true,
  children,
}: {
  section?: { label: string; href: string };
  crumbs?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={home.page}>
      <main className={crumbs ? styles.main : `${styles.main} ${styles.bare}`}>
        {crumbs && (
          <nav className={styles.crumbs} aria-label="Site">
            <a href="/">Om Ogale</a>
            {section && (
              <>
                <span aria-hidden="true">/</span>
                <a href={section.href}>{section.label}</a>
              </>
            )}
          </nav>
        )}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
