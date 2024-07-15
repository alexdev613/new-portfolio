import { MdDownload, MdOutlineMailOutline } from "react-icons/md";
import { AnimatedBackground } from "../../../../components/animatedBackground";
import { StyledButton } from "../../../../components/styledButton";


export function Hero() {

  function handleDownloadCV() {
    const link = document.createElement('a');
    link.href = 'https://github.com/alexdev613/assets/raw/51cd9bbe18cb6c8570b6053f57509e608e38a597/AlexNascimento_CV.pdf';
    link.download = 'AlexNascimento_CV.pdf';
    link.click();
  }

  function handleScrollToContact() {
    const contactSection = document.getElementById('contactme');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="bg-beautyNoir h-screen-minus-header flex pt-20 md:pt-40 px-4 overflow-x-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-4 relative" data-aos="fade-right" data-aos-duration="1000">
            <div className="absolute w-[120%] md:w-[158%] -top-24 -right-2">
              <AnimatedBackground />
            </div>
            <div className="relative text-center">
              <img
                src="https://avatars.githubusercontent.com/u/82345139?v=4"
                alt="Avatar"
                className="rounded-full border border-l-tertiary w-[45%] sm:w-[55%] md:w-[85%] mx-auto z-50 min-w-[180px] mb-4"
                data-aos="zoom-in-down" data-aos-duration="1000"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-8 text-center flex flex-col justify-center px-1">
            <h1 className="font-gothic font-normal text-tertiary text-4xl md:text-6xl md:mb-4 mb-2" data-aos="fade-left" data-aos-duration="1000">Alex Nascimento</h1>
            <h2 className="font-gothic font-extralight text-tertiary text-2xl md:text-3xl pb-2"  data-aos="fade-right" data-aos-duration="1000">Desenvolvedor Web</h2>
            <div className="flex flex-wrap justify-center pt-3 space-y3 md:space-y-0 md:space-x-3">
              <div className="w-full flex flex-col md:flex-row justify-center gap-5">
                <StyledButton
                  className="bg-transparent text-white hover:bg-tertiary hover:text-beautyNoir"
                  onClick={handleDownloadCV}
                  type={'button'}
                  data-aos="fade-up-right"
                  data-aos-duration="1200"
                >
                  <MdDownload size={20}  />
                    Download CV
                </StyledButton>
                <StyledButton
                  className="bg-transparent text-white hover:bg-tertiary hover:text-beautyNoir"
                  onClick={handleScrollToContact}
                  type={'button'}
                  data-aos="fade-up-left"
                  data-aos-duration="1200"
                >
                  <MdOutlineMailOutline size={20}  />
                    Contact me
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}