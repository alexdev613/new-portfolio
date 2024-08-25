import htmlIcon from '../../../../assets/html5-original.svg'
import cssIcon from '../../../../assets/css3-original.svg'
import jsIcon from '../.././../../assets/js.svg'
import tsIcon from '../.././../../assets/ts.svg'
import sass from '../../../../assets/sass.svg'
import tailwindIcon from '../../../../assets/tailwind.svg'
import styledIcon from '../../../../assets/styled.png'
import reactIcon from '../../../../assets/react-original.svg'
import nodeIcon from '../../../../assets/nodejs.svg'
import nextjsIcon from '../../../../assets/next-js.png'
import firebaseIcon from '../../../../assets/firebase-plain.svg'
import gitIcon from '../../../../assets/git.svg'
import githubIcon from '../../../../assets/github-original.svg'
import { Link } from 'react-router-dom'

interface Skill {
    id: string;
    technologyIcon: string;
    name: string;
    url: string;
    bgColor?: string;
  }
  
  const skills: Skill[] = [
    { id: '1', technologyIcon: htmlIcon, name: 'HTML', url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML"},
    { id: '2', technologyIcon: cssIcon, name: 'CSS', url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS"},
    { id: '3', technologyIcon: jsIcon, name: 'JavaScript', url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"},
    { id: '4', technologyIcon: tsIcon, name: "TypeScript", url: "https://www.typescriptlang.org/pt/docs/"},
    { id: '5', technologyIcon: sass, name: "SASS", url: "https://sass-lang.com/documentation/"},
    { id: '6', technologyIcon: tailwindIcon, name: "TailWind", url: "https://tailwindcss.com/docs/installation"},
    { id: '7', technologyIcon: styledIcon, name: "Styled-Components", url: "https://styled-components.com/docs"},
    { id: '8', technologyIcon: reactIcon, name: "React JS", url: "https://pt-br.legacy.reactjs.org/docs/getting-started.html"},
    { id: '9', technologyIcon: nextjsIcon, name: "NextJS", url: "https://nextjs.org/docs", bgColor: 'bg-white'},
    { id: '10', technologyIcon: nodeIcon, name: "Node JS", url: "https://nodejs.org/docs/latest/api/documentation.html", bgColor: "bg-white"},
    { id: '11', technologyIcon: firebaseIcon, name: "Firebase", url: "https://firebase.google.com/docs/guides?hl=pt-br"},
    { id: '12', technologyIcon: gitIcon, name: "Git", url: "https://git-scm.com/docs/git/pt_BR"},
    { id: '13', technologyIcon: githubIcon, name: "Github", url: "https://github.com/alexdev613/", bgColor: "bg-white"},
  ];

export function Skills() {
  return (
    <section className="bg-beautyBrunette min-h-screen py-20 px-6 sm:px-10 lg:px-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto bg-black/30 p-8 rounded-3xl">
        <h1 className="text-white text-3xl text-center font-sans font-bold pb-4">Hard Skills</h1>
        <div className='text-center text-tertiary pb-2 leading-loose'>
          <p data-aos="fade-right" data-aos-duration="2000">Abaixo estão algumas das tecnologias que utilizo.</p>
          <p data-aos="fade-left" data-aos-duration="2000">Clique nos ícones e descubra um pouco mais!</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {skills.map((skill) => (
            <div key={skill.id} className='h-36 w-36' data-aos="flip-up" data-aos-duration="1500">
              <Link
                to={skill.url}
                target='_blank'
                className='flex flex-col items-center'
              >
                <img src={skill.technologyIcon} alt={skill.name} className={`h-16 w-16 ${skill.bgColor} rounded-sm p-[1px]`} />
                <p className='text-white'>{skill.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}