// Css
import './App.css';

// Config Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.jsx';
import Cep from './pages/Cep/Cep.jsx';

// Components
import Fade from './components/Fade/Fade.jsx';

function App() {
  return (
    <>
      <div className='App'>
        <Fade>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cep/:id' element={<Cep />} />
            </Routes>
          </BrowserRouter>
        </Fade>
      </div>
    </>
  );
};

export default App;