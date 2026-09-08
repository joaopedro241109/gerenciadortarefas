import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Footer from './componentes/Footer';
import Header from './componentes/Header';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
import ListarTarefas from './paginas/Home/ListarTarefas';
import ListarUmaTarefa from './paginas/ListarUmaTarefa';
import CadastrarTarefa from './paginas/CadastrarTarefa';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />

          <Route path="/tarefas" element={<ListarTarefas />} />
          <Route path="/tarefa/:id" element={<ListarUmaTarefa />} />
        
        </Routes>
      </main>|
      <Footer />
    </BrowserRouter>
  );
}

export default App;
