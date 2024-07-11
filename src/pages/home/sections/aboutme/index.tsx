import aspas from '../../../../assets/aspas.png';

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
                <br />Front End
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
                Olá! Sou Alex Heisenberg, um apaixonado desenvolvedor de sites corporativos e
                aplicativos web com mais de 3 anos de experiência. Baseado em Pernambuco, trabalho
                remotamente, garantindo serviços de qualidade para clientes em qualquer lugar do mundo.
                Estou sempre em busca de novos desafios e oportunidades para aprimorar minha carreira.

              </p>
            <div className="relative text-center">
              <img
                src="https://avatars.githubusercontent.com/u/82345139?v=4"
                alt="Avatar"
                className="rounded-full border border-l-tertiary w-[45%] sm:w-[55%] md:w-[85%] mx-auto z-50 min-w-[180px] mb-4"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}