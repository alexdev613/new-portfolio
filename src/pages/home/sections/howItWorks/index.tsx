import requisitos from '../../../../assets/requisitos.png';
import pagamentos from '../../../../assets/pagamentos.png';
import codigo from '../../../../assets/codigo.png';
import garantia from '../../../../assets/garantia.png';
import smile from '../../../../assets/smile-icon.png';
import webIcon from '../../../../assets/web.png';
import interfaceIntuitiva from '../../../../assets/interfaceIntuitiva.png';
import requirements from '../../../../assets/requirements.png';
import resposividade from '../../../../assets/responsividade.png';

export function HowItWorks() {
  return (
    <>
      <section className='bg-beautyBrunette min-h-screen py-40 px-6 sm:px-10 lg:px-20 overflow-x-hidden'>
        <h1 className="text-white text-3xl text-center font-sans font-medium pb-8">COMO FUNCIONA?</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={requisitos} className=' w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">REQUISITOS</h3>
            <p className="text-center mx-2">
              Primeiramente, eu preciso entender quais são os requisitos do sistema. Para isso, vamos
              manter contato até que todos os requisitos sejam definidos. Após a definição dos requisitos,
              o projeto é dividido em partes.
            </p>
          </section>

          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={pagamentos} className=' w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">PAGAMENTOS</h3>
            <p className="text-center mx-2">
              Os pagamentos só são efetuados após a finalização das partes e aprovação das mesmas por você.
              Os meios de pagamento são depósito ou transferência bancária.
            </p>
          </section>


          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={codigo} className=' w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">CÓDIGO</h3>
            <p className="text-center mx-2">
              Após a confirmação do pagamento de uma parte, o código e todos os arquivos do sistema são enviados
              para você. Eu também posso instalar os arquivos em um servidor de sua preferência.
            </p>
          </section>

          <section className="bg-beautyNoirToBrunette text-white  rounded-xl flex flex-col items-center py-4">
            <img src={garantia} className=' w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">GARANTIA</h3>
            <p className="text-center mx-2">
              Dou suporte para qualquer bug (erro) que ocorrer devido à uma falha minha por tempo indeterminado.
            </p>
          </section>

        </section>

        <h1 className="text-white text-3xl text-center font-sans font-medium py-8 mt-20">VANTAGENS</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={webIcon} className=' w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">TOTALMENTE WEB</h3>
            <p className="text-center mx-2">
              Seu sistema será totalmente web, com todas as vantagens que isso proporciona.
            </p>
          </section>

          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={resposividade} className='w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">LAYOUT RESPONSIVO</h3>
            <p className="text-center mx-2">
              Seu sistema terá um design clean e será responsivo, ou seja, ele se adaptará e proporcionará uma boa experiência à quem acessá-lo em computadores, tablets ou smartphones.
            </p>
          </section>


          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={smile} className='w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">SEM RESTRIÇÕES</h3>
            <p className="text-center mx-2">
              Sem limites de acessos ao sistema, cadastros de clientes ou qualquer tipo de limitação. Seu sistema é desenvolvido e entregue sem quaisquer restrições.
            </p>
          </section>

          <section className="bg-beautyNoirToBrunette text-white  rounded-xl flex flex-col items-center py-4">
            <img src={requirements} className='w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">SISTEMA SOB MEDIDA</h3>
            <p className="text-center mx-2">
              Ter um sistema sob medida faz toda a diferença. Você terá as funcionalidades exatas que você precisa, e isso só aumentará a qualidade do sistema e a sua satisfação.
            </p>
          </section>

          <section className="bg-beautyNoirToBrunette text-white rounded-xl flex flex-col items-center py-4">
            <img src={smile} className='w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">RISCO ZERO</h3>
            <p className="text-center mx-2">
              Como você só pagará o valor de cada parte após a finalização e aprovação dela, você não terá riscos.
            </p>
          </section>

          <section className="bg-beautyNoirToBrunette text-white  rounded-xl flex flex-col items-center py-4">
            <img src={interfaceIntuitiva} className='bg-yellow-100 rounded-lg w-16' alt="Imagem Requisitos" />
            <h3 className="text-center text-2xl my-2">INTERFACE INTUITIVA</h3>
            <p className="text-center mx-2">
              As páginas do seu sistema terão uma interface de usuário intuitiva, o que vai fazer com que você se familiarize com ele mais rapidamente.
            </p>
          </section>

        </section>
      </section>
    </>
  )
}
