import './index.css'
import { useParams } from 'react-router-dom'
import Contatos from '../../mook/contatos'

function ListarumContato() {
    const {id} =useParams();
    const contato = contato.find((item) => String(item.id) === String(id));

    if (!contato) {
        return <p>Tarefa não encontrada</p>;
    }

    const { nome, conteudo, telefone, email, cidade  } = contato;
    
    return (
        
        <section>
            <header>
                <h1>Listar contato</h1>
            </header>
            <div>

                <h2>#{id} - {nome}</h2>
                <p> {conteudo}</p>
                <p>{telefone} </p>
                <p>{email} </p>
                <p>{cidade} </p>
            </div>
        </section>
    )
}
export default ListarumContato