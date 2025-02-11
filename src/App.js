import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Skills from './routes/Skills';
import Portfolio from './routes/Portfolio';
import Footer from './components/Footer';

function App() {
  const navList = ['home','about','skills','portfolio']
  return (
    <>
      <main>
      <Routes>
        <Route path="/" element={<Home list={navList} />} />
        <Route path={ '/' + navList[1] } element={<About list={navList} />} />
        <Route path={ '/' + navList[2] } element={<Skills list={navList} />} />
        <Route path={ '/' + navList[3] } element={<Portfolio list={navList} />} />
        {/* <Route path={ '/' + navList[4] } element={<Contact list={navList} />} /> */}
      </Routes>
      <Footer />
      </main>
    </>
  );
}

export default App;
