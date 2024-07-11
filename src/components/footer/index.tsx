import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black/90 pt-14 pb-28 px-8 text-center overflow-x-hidden">
    
      <div className="flex gap-4">
        <Link to="https://github.com/alexdev613/" target="_blank" data-aos="fade-left" data-aos-duration="800">
          <FaGithub size={30} color="white" />
        </Link>
        <Link to="https://www.linkedin.com/in/alex-nascimento-b818b694/" target="_blank" data-aos="fade-left" data-aos-duration="1500">
          <FaLinkedin size={30} color="white" />
        </Link>
        <Link to="/" target="_blank" data-aos="fade-left" data-aos-duration="2000">
          <FaWhatsapp size={30} color="white" />
        </Link>
      </div>
      <hr className="bg-white w-full max-w-md m-4 mx-4" />
      <p className="text-tertiary" data-aos="fade-right" data-aos-duration="800">© Alex Heisenberg - 2024</p>
      <div className="flex justify-center">
      <img src={logo} alt="Logo" className="absolute w-20 h-20"/>
      </div>

      <a
        href="#top"
        className="absolute bg-beltColor w-16 pt-3 text-tertiary h-[87px] mt-56 rounded-tl-lg rounded-tr-lg
        text-center md:right-40 right-8 m-0 p-2 font-black"
      >
        Topo
      </a>

    </footer>
  )
}