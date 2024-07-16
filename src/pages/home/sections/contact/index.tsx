import { FiHome, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { StyledButton } from "../../../../components/styledButton";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from 'emailjs-com'

import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (form.current) {
      emailjs.sendForm('service_d1h6pzw', 'template_ia9dmax', form.current, "oEQ6JhEk805mIItpC")
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Tivemos um erro com a api, mande-nos um olá no Whatsapp!")
        },
      );
    }

    reset();
  }


  return (
    <section className="min-h-screen bg-gradient-to-b from-beautyBrunette to-beautyNoirToBrunette flex flex-col items-center py-24 overflow-x-hidden">
      <h2
        id="contact"
        className="text-3xl md:text-5xl font-sans font-bold mb-20 text-tertiary pl-2"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Formas de contato:
      </h2>
      
      {/* ------ "Cards" ------ */}

      <div className="flex flex-wrap gap-14 mb-16 justify-center max-w-5xl w-full px-6">
        <div
          className="flex flex-col gap-y-2 w-72 h-72 border border-black justify-center items-center p-2 rounded bg-tertiary/90"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <FiPhoneCall size={60} color="blue" />
          <p>+55 87 98115-7269</p>
        </div>

        <div className="flip-card w-72 h-72 rounded" data-aos="fade-up" data-aos-duration="1000">
          <div className="flip-card-inner">
            <div className="flip-card-front flex flex-col gap-y-2 w-72 h-72 border border-black justify-center items-center p-2 rounded bg-tertiary/90">
              <FiHome size={60} color="blue" />
              <p>Localizado em: Avenida Leão Dourado S/N. Bairro: Vila Kennedy. Caruaru - PE</p>
            </div>
            <div className="flip-card-back flex justify-center items-center bg-white w-72 h-72 border border-black rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9804327562583!2d-36.01252389086072!3d-8.288429414446608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b8663f03437%3A0x74070ffc0a3b359a!2sAv.%20Le%C3%A3o%20Dourado%20-%20Caruaru%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1720649866872!5m2!1spt-BR!2sbr"
                width="288"
                height="288"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-y-2 w-72 h-72 border border-black justify-center items-center p-2 rounded bg-tertiary/90"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <FiMessageCircle size={60} color="blue" />
          <p>ajfnasicmento007@gmail.com</p>
          <p>alexjose@hotmail.com</p>
        </div>
      </div>

      <div className="max-w-5xl w-full px-6">
        <div className="text-tertiary mb-4" id="contactme">
          <h3 className="text-3xl"data-aos="fade-left" data-aos-duration="1000">Entre em Contato</h3>
          <p className="text-xs ml-2" data-aos="fade-right" data-aos-duration="1000">Get in touch</p>
        </div>

        {/* ------ "Cards" ------ */}


        {/* ---- Formulário ---- */}

        <form className="max-w-5xl w-full" onSubmit={handleSubmit(onSubmit)} ref={form} >
          <div
            className="flex flex-col gap-4 w-full md:flex-row"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <input
              {...register("name", { required: "Nome é obrigatório" })}
              className={`flex-1 min-h-14 pl-4 rounded bg-beautyNoir placeholder-light text-white outline-none ${ errors.name? "border border-red-600 placeholder-crimson-red" : "" }`}
              type="text"
              placeholder={errors.name? errors.name.message : "Seu Nome"}
            />
            <input
              {...register("email", {required: "Email é obrigatório" })}
              className={`flex-1 min-h-14 pl-4 rounded bg-beautyNoir placeholder-light text-white outline-none ${ errors.email? "border border-red-600 placeholder-crimson-red" : "" }`}
              type="email"
              placeholder={errors.email? errors.email.message : "E-mail"}
            />
            <input
              {...register("phone", {required: "Telefone é obrigatório" })}
              className={`flex-1 min-h-14 pl-4 rounded bg-beautyNoir placeholder-light text-white outline-none ${ errors.phone? "border border-red-600 placeholder-crimson-red" : "" }`}
              type="text"
              placeholder={errors.phone? errors.phone.message : "Seu telefone"}
            />
          </div>

          <div
            className="mt-4 w-full"
            data-aos="flip-left"
            data-aos-duration="1200"
          >
            <textarea
              {...register("message", { required: "Sua mensagem é importante e obrigatória!" })}
              className={`rounded resize-none w-full pl-4 pt-2 min-h-72 bg-beautyNoir placeholder-light md:min-w-0 text-white outline-none ${errors.message ? "border border-red-600 placeholder-crimson-red" : ""}`}
              placeholder={errors.message ? errors.message.message : "Sua Mensagem"}
            />

          </div>

          <div className="bg-beautyNoir/90 w-full mt-4 md:w-96" data-aos="zoom-in-up"
              data-aos-duration="1000">
            <StyledButton
              className="bg-transparent text-tertiary font-bold hover:bg-tertiary hover:text-beautyNoir py-3 transition-colors duration-500"
              type="submit"
            >
              ENVIAR MENSAGEM
            </StyledButton>
          </div>
        </form>

        {/* ---- Formulário ---- */}

      </div>
    </section>
  );
}
