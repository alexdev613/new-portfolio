import { MdDownload, MdOutlineMailOutline } from "react-icons/md";
import { AnimatedBackground } from "../../../../components/animatedBackground";
import StyledButton from "../../../../components/styledButton";


export function Hero() {
  return (
    <div className="bg-beautyNoir h-screen-minus-header flex pt-10 sm:pt-20 md:pt-40 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-4 relative" data-aos="fade-right">
            <div className="absolute w-[152%] -top-24 -right-2">
              <AnimatedBackground />
            </div>
            <div className="relative text-center">
              <img
                src="https://avatars.githubusercontent.com/u/82345139?v=4"
                alt="Avatar"
                className="rounded-full border border-l-tertiary w-[45%] sm:w-[55%] md:w-[85%] mx-auto z-50 min-w-[180px] mb-4"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-8 text-center flex flex-col justify-center px-1">
            <h1 className="font-gothic font-normal text-tertiary text-4xl md:text-6xl md:mb-4 mb-2" data-aos="fade-left">Alex Heisenberg</h1>
            <h2 className="font-gothic font-extralight text-tertiary text-2xl md:text-3xl pb-2"  data-aos="fade-left">I'm a Software Engineer</h2>
            <div className="flex flex-wrap justify-center pt-3 space-y3 md:space-y-0 md:space-x-3">
              <div className="w-full flex flex-col md:flex-row justify-center gap-5"  data-aos="fade-up">
                <StyledButton
                  onClick={() => {}}
                >
                  <MdDownload size={20}  />
                  Download CV
                </StyledButton>
                <StyledButton
                  onClick={() => {}}
                >
                  <MdOutlineMailOutline size={20}  />
                  Download CV
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}