import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const navList = ['Home','About','Skills','Portfolio','Contact']
  return (
    <>
      <main>
        <Header list={navList} />
        <Home />
      </main>
    </>
  );
}

export default App;
