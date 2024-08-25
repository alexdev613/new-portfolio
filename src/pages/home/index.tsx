import { AboutMe } from "./sections/aboutme";
import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { HowItWorks } from "./sections/howItWorks";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

export function Home() {
    return (
      <div className="overflow-x-hidden">

        <Hero />
        <AboutMe />
        <Skills />
        <HowItWorks />
        <Projects />
        <Contact />
      </div>
    )
  }