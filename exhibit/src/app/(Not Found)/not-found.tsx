import shell from "@/components/home/shell.module.css";
import home from "@/components/home/home.module.css";
import PageShell from "@/components/home/PageShell";
import Soroban from "@/components/home/Soroban";

export default function NotFound() {
  return (
    <PageShell crumbs={false}>
      <h1 className={shell.title}>Page not found</h1>
      <p className={shell.lede}>The link may be broken, or the page may have moved.</p>
      <Soroban value="0404" caption="That’s 404 on an abacus. You can move the beads while you’re here." />
      <nav className={home.links} aria-label="Where to go next">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/projects">Projects</a>
      </nav>
    </PageShell>
  );
}
