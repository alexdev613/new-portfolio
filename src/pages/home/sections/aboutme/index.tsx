import aspas from '../../../../assets/aspas.png';
import alex from '../../../../assets/mirante-paulista.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function AboutMe() {
  return (
    <section className="py-40 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-beautyNoir to-beautyBrunette overflow-x-hidden">
      <div className="max-w-5xl mx-auto bg-black/30 p-8 rounded-3xl">
        <div>
          <div className="flex justify-between gap-3">
            <div className='md:text-justify'>
              <h2
                className="text-base font-semibold tracking-wider text-white uppercase"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Sobre Mim
              </h2>
              <p
                className="my-6 text-2xl sm:text-4xl leading-8 font-bold tracking-tighter text-tertiary"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Sou Desenvolvedor Web
                <br />Full Stack
              </p>
            </div>
              <div className="mt-0 md:flex justify-center hidden ">
                <img 
                  src={aspas}
                  alt="Aspas" 
                  className="w-20 h-20"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
          <div>  
            <div className='flex flex-col-reverse md:flex-row'>
              <p
                className="my-8 text-xl text-tertiary lg:mx-auto md:pr-24 text-justify"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                {/* Olá! Sou Alex Nascimento, um apaixonado desenvolvedor de sites corporativos e
                aplicativos web com mais de 3 anos de experiência. Baseado em Pernambuco, trabalho
                remotamente, garantindo serviços de qualidade para clientes em qualquer lugar do mundo. */}
                Sua negócio precisa de um sistema web? Sou um desenvolvedor full-stack, e desde 2020 e crio
                sistemas web 100% personalizados para empresas, de acordo com seus requisitos. Trabalhando
                com tecnologias como JavaScript, TypeScript, ReactJS, NextJS, Firebase e NodeJS. Juntas 
                elas são capazes de dar um resultado surpreendente na criação de um sistema robusto e de qualidade.
                
                <br /><br />
                {/* Estou sempre em busca de novos desafios e oportunidades para aprimorar minha carreira.
                Meu propósito é desenvolver interfaces intuitivas e criar experiências de usuário cativantes,
                utilizando boas práticas de design para construir soluções eficientes e acessíveis. */}
                Os sistemas web já desenvolvidos são fechados, apenas para uso interno
                dos funcionários que usa o sistema. Não tenho autorização para disponibilizar
                uma versão para demonstração. Mas, você poder ver outros trabalhos que fiz para demosntração
                na seção <Link to='#projects' target='_parent' className='text-sky-400'>Portfolio</Link>.

              </p>
            <div className="relative text-center">
              <img
                src={alex}
                alt="Avatar"
                className="rounded-full border border-l-tertiary w-[320px] mx-auto z-50 min-w-[200px] mb-4"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              />
              <div className='flex justify-center gap-4 mt-6'>
                <Link
                  to="https://github.com/alexdev613/"
                  target='_blank'
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                >
                  <FaGithub size={30} color='#EEE' />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/alexjfnascimento/"
                  target='_blank'
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <FaLinkedin size={30} color='#EEE' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}