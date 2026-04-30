import { useState } from 'react';
import Header from './shared/components/header/header';
import GamePage from './pages/game/GamePage';
import LankingPage from './pages/lanking/LankingPage';



function App() {
  const [activeTab, setActiveTab] = useState('game');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='p-6'>
      <Header activeTab={activeTab} onClick={handleTabClick} />
      <div>
        {activeTab === 'game' && <GamePage />}
        {activeTab === 'lanking' && <LankingPage />}
      </div>
    </div>
  )
}

export default App
