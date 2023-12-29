import './App.css';

// My Components
import Container from './Components/Container/Container';
import Flipcard from './Components/Flipcard/Flipcard';

function App() {
  return (
    <div className="App">
      <Container centered={true}>
        <Flipcard />
      </Container>
    </div>
  );
};

export default App;
