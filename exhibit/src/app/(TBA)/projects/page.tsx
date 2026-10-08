import shell from "@/components/home/shell.module.css";
import ProjectList from "@/components/home/ProjectList";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <h1 className={shell.title}>Projects</h1>
      <p className={shell.lede}>Things I’ve built for class, for hackathons, and for fun.</p>
      <div className={shell.body}>
        <ProjectList projects={projects} showStack />
      </div>
    </>
  );
}
