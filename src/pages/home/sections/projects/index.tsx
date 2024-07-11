import webcarros from '../../../../assets/project-webcarros.png'
import controle from '../../../../assets/controlefinancas.png'
import criptoapp from '../../../../assets/criptoapp.png'
import react from '../../../../assets/react-original.svg'
import tailwind from '../../../../assets/tailwind.svg'
import typescript from '../../../../assets/ts.svg'
import firebase from '../../../../assets/firebase-plain.svg'
import html from '../../../../assets/html5-original.svg'
import css from '../../../../assets/css3-original.svg'
import js from '../.././../../assets/js.svg'

import { RoundedButton } from '../../../../components/roundedButton'
import { Link } from 'react-router-dom'

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  imageProject?: string
  repository?: string;
  deployUrl?: string;
  technologies?: string[];
}

const projects: ProjectProps[] = [
  {
    id: '1',
    title: 'Controle de Finanças',
    description: "Sistema de controle de finanças, onde é possível calcular as receitas e despesas, onde o usuário pode passar a descrição o valor e o tipo da inlusão, ao clicar no botão incluir é passado os dados para uma lista, e os cálculos das receitas e das despesas é atualizado em boxes acima.\n Este projeto foi feito com HTML, CSS e Vanilla JavaScript (Java Script Puro).",
    imageProject: controle,
    repository: "",
    deployUrl: "https://controledefinancas-alexdev613.netlify.app/",
    technologies: [html, css, js]
  },
  {
    id: "2",
    title: "WebCarros",
    description: "O projeto WebCarros é um sistema semelhante ao Webmotors, desenvolvido com React, TailwindCSS, TypeScript e Firebase.\nEle permite cadastro e login de usuários para ver e cadastrar carros à venda. Inclui um painel de gerenciamento para visualizar e excluir veículos cadastrados.\nA Home e os detalhes dos carros são acessíveis a todos, com páginas administrativas restritas a usuários logados, usando Context API para gerenciar estados globais e compartilhar dados.",
    imageProject: webcarros,
    repository: "https://github.com",
    deployUrl: "https://webcarros-dev.vercel.app/",
    technologies: [ react, tailwind, typescript, firebase]
  },
  {
    id: '3',
    title: 'CriptoDev',
    description: "O projeto usa requisições HTTP e APIs para consultar mais de 400 criptomoedas em tempo real, incluindo a cotação do dólar para Real. Os usuários podem ver detalhes das moedas ao clicar em seus nomes. A página inicial lista 10 moedas e permite carregar mais 10 com o botão 'Carregar mais'.\nEste projeto foi feito com React, CSS, TypeScript e outras tecnologias preciosas!",
    imageProject: criptoapp,
    repository: 'https://github.com',
    deployUrl: 'https://criptoapp-alexdev.vercel.app/',
    technologies: [ react, css, typescript]
  }
];

export function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center bg-beautyBrunette py-20 px-6 sm:px-10 lg:px-20">
      
      <div className="max-w-5xl w-full mb-16">
        <h1
          className="text-white text-3xl font-bold"
          data-aos="fade-left"
          data-aos-duration="1000">Portfolio
        </h1>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className="max-w-5xl flex flex-col justify-between md:flex-row min-h-80 rounded-3xl bg-beautyNoirToBrunette overflow-hidden mb-10"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <div className="flex-1 p-4">
            <img src={project.imageProject} alt="" className='w-full h-full min-h-64 object-fill rounded-xl' />
          </div>
          <div className='flex flex-col flex-1'>
            <div className="p-4 pb-0">
              <div className='flex-1 pb-4 flex flex-col screen-sm:flex-row screen-sm:justify-between items-center'>
                <div className='pb-4'>
                  <h3 className='text-tertiary font-sans text-2xl font-semibold'>{project.title}</h3>
                </div>
                <div className='flex flex-nowrap gap-2'>
                  {project.technologies?.map((tech, index) => (
                    <div key={index}>
                      <img src={tech} alt="tech" className='w-8 h-8' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='pl-4 pr-8 text-tertiary font-medium flex-1'>
              {project.description.split('\n').map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-white mb-2 leading-relaxed ${index > 0 ? 'mt-2.5' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className='flex px-4 gap-4 pt-6 pb-8 ml-4'>
              <RoundedButton onClick={() => { } } type={'button'} to={project.deployUrl}>Ver Projeto</RoundedButton>
              <RoundedButton onClick={() => { } } type='button' to={project.repository}>{"< Repositório />"}</RoundedButton>
            </div>
          </div>
        </div>
      ))}

      <div className='w-full max-w-5xl'>
        <Link to="https://github.com/alexdev613" target='_blank'>
          <h4 className='float-end font-sans font-semibold text-tertiary hover:text-white'>Ver todos projetos ...</h4>
        </Link>
      </div>

    </section>
  )
}