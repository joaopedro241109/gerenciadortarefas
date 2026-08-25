import './index.css'
import foto from './foto de perfil .jpg';
import habilidadeLutador from './luta.webp';
import habilidadearcondicionado from './ar condicionado.jpeg';
import habilidadePedreiro from './pedreiro.jpeg';

function Sobre() {
    return (
        <main>

            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfiel'>
                    <img className="imgfotoPerfil" src={foto}/>
                    <p> João Pedro </p>
              </div>
              <div className='habilidades'>
                <article>
                    <h2> Lutador</h2>
                    <p className='Descricao'>
                    <img src={habilidadeLutador}/>
                    O Muay Thai entrou na minha vida como um desafio e logo se tornou uma paixão. Entre socos, chutes, joelhadas e cotoveladas, decidi dar um passo além do treino convencional e sentir a adrenalina do combate real. 
                   </p>
                </article>
                <article>
                    <h2> Ar condicionado </h2>
                    <img src={habilidadearcondicionado}/>
                    <p className='Descricao'>
                    Realizo serviços especializados em pequenos trabalhos de instalação e manutenção de ar-condicionado. Garanto um atendimento rápido, limpo e seguro para climatizar o seu ambiente com a máxima eficiência e o melhor custo-benefício
                   </p>
                </article>
                <article>
                    <h2> Pedreiro </h2>
                    <img src={habilidadePedreiro}/>
                    <p className='Descricao'>
                    Realizo serviços profissionais de pedreiro e ajudante, com total domínio no preparo de massas e argamassas, transporte e assentamento de tijolos, e aplicação de reboco para o acabamento perfeito de paredes. 
                   </p>
                </article>
              </div>
            </section>

        </main>
    )
}
export default Sobre;