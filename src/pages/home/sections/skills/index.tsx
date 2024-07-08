import htmlIcon from '../../../../assets/html5-original.svg'
import cssIcon from '../../../../assets/css3-original.svg'
import jsIcon from '../.././../../assets/js.svg'
import tsIcon from '../.././../../assets/ts.svg'
import tailwindIcon from '../../../../assets/tailwind.svg'
import styledIcon from '../../../../assets/styled.png'
import reactIcon from '../../../../assets/react-original.svg'
import nodeIcon from '../../../../assets/nodejs.svg'
import viteIcon from '../../../../assets/vite.svg'
import firebaseIcon from '../../../../assets/firebase-plain.svg'
import gitIcon from '../../../../assets/git.svg'
import githubIcon from '../../../../assets/github-original.svg'

interface Skill {
    id: string;
    technologyIcon: string;
    name: string;
  }
  
  const skills: Skill[] = [
    { id: '1', technologyIcon: htmlIcon, name: 'HTML' },
    { id: '2', technologyIcon: cssIcon, name: 'CSS' },
    { id: '3', technologyIcon: jsIcon, name: 'JavaScript' },
    { id: '4', technologyIcon: tsIcon, name: "TypeScript"},
    { id: '5', technologyIcon: tailwindIcon, name: "TailWind"},
    { id: '6', technologyIcon: styledIcon, name: "Styled-Components"},
    { id: '7', technologyIcon: reactIcon, name: "React JS"},
    { id: '8', technologyIcon: nodeIcon, name: "Node JS"},
    { id: '9', technologyIcon: viteIcon, name: "Vite"},
    { id: '10', technologyIcon: firebaseIcon, name: "Firebase"},
    { id: '11', technologyIcon: gitIcon, name: "Git"},
    { id: '12', technologyIcon: githubIcon, name: "Github"}
  ];

export function Skills() {
  return (
    <section className="bg-beautyBrunette min-h-screen py-40 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto border border-black/50 bg-black/30 p-8 rounded-3xl">
        <h1 className="text-white text-3xl text-center font-sans font-bold pb-4">Hard Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {skills.map((skill) => (
            <div key={skill.id} className='h-36 w-36 flex flex-col items-center gap-2' data-aos="flip-up" data-aos-duration="1500">
              <img src={skill.technologyIcon} alt={skill.name} className='h-16 w-16' />
              <p className='text-white'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}