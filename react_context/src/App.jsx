import { createContext, useState } from 'react';

// Style
import './App.css';

// Config Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import FloatButton from './components/FloatButton/FloatButton.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Social from './pages/Social.jsx';

export const Context = createContext();


function App() {
  const [theme, setTheme] = useState(false);

  return (
    <>
    <Context.Provider value={[theme, setTheme]}>
      <div className={'App ' + (theme ? 'App-light' : 'App-dark')}>
          <FloatButton className={theme ? 'float-light' : 'float-dark'} state={theme ? 'Light' : 'Dark'} onClick={() => setTheme(!theme)} />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Social' element={<Social />} />
            </Routes>
          </BrowserRouter>
      </div>
    </Context.Provider>
    </>
  );
};

export default App;
