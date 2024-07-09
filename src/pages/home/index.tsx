import { AboutMe } from "./sections/aboutme";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

export function Home() {
    return (
      <div>

        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    )
  }