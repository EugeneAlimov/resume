// import logo from './logo.svg';
import './App.css';
import LeftAbout from './Components/LeftAbout';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <header className="Resume-header">
        <LeftAbout />
        <Main />
      </header>
    </div>
  );
}

export default App;
