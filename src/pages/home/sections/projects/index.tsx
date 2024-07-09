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
    description: "Sistema de controle de finanças, onde é possível calcular as receitas e despesas, onde o usuário pode passar a descrição o valor e o tipo da inlusão, ao clicar no botão incluir é passado os dados para uma lista, e os cálculos das receitas e das despesas é atualizado em boxes acima. Este projeto foi feito com HTML, CSS e Vanilla JavaScript (Java Script Puro).",
    imageProject: controle,
    repository: "",
    deployUrl: "https://controledefinancas-alexdev613.netlify.app/",
    technologies: [html, css, js]
  },
  {
    id: "2",
    title: "WebCarros",
    description: "Sistema de cadastro de carros à venda, similar ao Webmotors, feito com React, TailwindCSS, TypeScript e Firebase dentre outras tecnologias. Permite cadastro e login de usuários, que podem ver carros à venda na Home e cadastrar seus próprios veículos com detalhes como nome, ano, quilometragem, modelo, valor e imagens. Inclui um painel para gerenciamento dos carros cadastrados, onde o usuário pode ver e excluir seus carros. Foi utilizado Context API gara gerenciar estados glodais e compartilhamento de dados. A Home e a página de Detalhes do carro é acessível a todos, enquanto as páginas administrativas são restritas a usuários logados.",
    imageProject: webcarros,
    repository: "https://github.com",
    deployUrl: "https://github.com",
    technologies: [ react, tailwind, typescript, firebase]
  },
  {
    id: '3',
    title: 'CriptoDev',
    description: "Sistema de consulta de criptomoedas em tempo real, utilizando requisições HTTP e chamada de APIs, uma para trazer uma listagem de mais de 400 criptomoedas e outra para cotação do dólar para nossa moeda, Real. Ao clicar sobre o nome da moeda, o usuário é levao a página de detalhes da mesma, onde ele confere dados importantes e atuais. Na página principal é listada 10 moedas, e se clicar no botão 'Carregar mais' são carregadas mais 10 moedas. Esse projeto foi feito com React, CSS, TypeScript e outras ferramentas preciosas!",
    imageProject: criptoapp,
    repository: 'https://github.com',
    deployUrl: 'https://criptoapp-alexdev.vercel.app/',
    technologies: [ react, css, typescript]
  }
];

export function Projects() {
  return (
    <section className="min-h-screen bg-beautyBrunette py-20 px-6 sm:px-10 lg:px-20">
      <h1 className="text-white text-3xl font-bold pb-10" data-aos="fade-left" data-aos-duration="1000">Portfolio</h1>

      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col justify-between md:flex-row min-h-80 rounded-3xl bg-beautyNoir border overflow-hidden mb-10"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <div className="bg-transparent flex-1 p-4">
            <img src={project.imageProject} alt="" className='w-full h-full object-fill rounded-xl' />
          </div>
          <div className='flex flex-col flex-1 bg-beautyNoir'>
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
            <div className='px-4 text-tertiary font-bold flex-1'>
              <p>
                {project.description}
              </p>
            </div>
            <div className='flex px-4 gap-4 pt-6 pb-8 ml-4'>
              <RoundedButton onClick={() => { } } type={'button'} to={project.deployUrl}>Ver Projeto</RoundedButton>
              <RoundedButton onClick={() => { } } type='button' to={project.repository}>{"< Repositório />"}</RoundedButton>
            </div>
          </div>
        </div>
      ))}

    </section>
  )
}