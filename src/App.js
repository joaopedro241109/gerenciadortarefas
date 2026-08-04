import { BrowserRouter } from 'react-router-dom';

import Footer from './componentes/Footer';
import Header from './componentes/Header';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contto" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
