import './App.css';
import Banner from './componentes/Banner/Banner';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header';
import MainCard from './componentes/Main/MainCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainCard />
      <Footer />
    </div>
  );
}

export default App;
