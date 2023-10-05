import './styles/Navbar.scss';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <main>
      <Navbar />
      <div className="main-container">
        <Categories />
      </div>
    </main>
  );
}

export default App;
