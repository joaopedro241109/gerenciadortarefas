import { useState } from 'react';
import './index.css';

import contatos from '../../mook/contatos';
import { useNavigate } from 'react-router-dom';

function CadastrarContato() {
    const navigate = useNavigate

    const [nome, setNome] = useState('');
    const [conteudo, setConteudo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cidade, setCidade] = useState('')
    const [error, setError] = useState("")

    function CadastrarContato(e) {
        e.preventDefault()

        if (!nome.trim()) {
            setError("O Campo Nome não pode estar vazio!!!")
            return;
        }
        if (!conteudo.trim()) {
            setError("O Campo Conteúdo não pode estar vazio!!!")
            return;
        }
        if (!telefone.trim()) {
            setError("O Campo Telefone não pode estar vazio!!!")
            return;
        }
        if (!email.trim()) {
            setError("O Campo email não pode estar vazio!!!")
            return;
        }
        if (!cidade.trim()) {
            setError("O Campo cidade não pode estar vazio!!!")
            return;
        }


        try {
            const addTarefa = {
                'id': contatos.length + 1,
                'nome': nome,
                'conteudo': conteudo,
                'telefone': telefone,
                'email': email,
                'cidade': cidade

            }

            contatos.push(addTarefa);
            setNome("");
            setConteudo("");
            setTelefone("");
            setEmail("");
            setCidade("");

            navigate(-1)
        } catch (error) {
            console.log("Erro ao cadastrar contato :" + error)

        }
    }

    return (
        <main>
            <header>
                <h1>Novo contato</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de contato</h2>
                <p>Entre com todos os campos!!!</p>
                <div className='formulario'>
                    {
                        error && (
                            <div className='error'>
                                <p className='textoError'>{error}</p>
                            </div>
                        )
                    }
                    <form onSubmit={CadastrarContato}>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

                        <label>Descrição</label>
                        <textarea value={conteudo} onChange={e => setDescricao(e.target.value)} ></textarea>

                        <label>Responsável</label>
                        <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarContato;