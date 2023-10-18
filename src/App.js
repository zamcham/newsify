import { useState } from 'react';
import './styles/Navbar.scss';
import './styles/NewsCard.scss';
import './styles/Main.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ReadingList from './components/ReadingList';

function App() {
  const [showReadingList, setShowReadingList] = useState(false);

  return (
    <main>
      <Navbar setShowReadingList={setShowReadingList} />
      {showReadingList ? <ReadingList /> : <Main />}
    </main>
  );
}

export default App;
