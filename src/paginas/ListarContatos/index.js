import './index.css'
import Contatos from '../../mook/Contatos';
import {Link} from 'react-router-dom';

function ListarContatos() {
    return (
        <main>
            <header>
                <h1>Contatos Cadastradas</h1>
            </header>

            <section>
                <div>
                    <p>Foram encontrados {Contatos.length} Contatos.</p>
                    <Link to={"/cadastrarTarefa"}>+ contato</Link>
                </div>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>Contato</th>
                            <th>RESPONSÁVEL</th>
                            <th>VER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Contatos.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.responsavel}</td>
                                    <td><Link to={`/contato/${item.id}`}>Ver</Link></td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default ListarContatos;