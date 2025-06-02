import React, { useState } from 'react';

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedGifts, setSelectedGifts] = useState<string[]>([]);
  const [username, setUsername] = useState('');

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleGiftSelect = (gift: string) => {
    setSelectedGifts(prev => 
      prev.includes(gift) 
        ? prev.filter(g => g !== gift)
        : [...prev, gift]
    );
  };

  const handleSubmit = () => {
    if (!username) {
      alert('Please enter your Madden NFL 25 username or ID.');
      return;
    }
    if (!selectedPlatform) {
      alert('Please select your platform.');
      return;
    }
    if (selectedGifts.length === 0) {
      alert('Please select at least one reward type.');
      return;
    }
    // Handle submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] to-[#2D2D44] p-4">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
        <img 
          className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-lg animate-pulse"
          src="https://play-lh.googleusercontent.com/jrkZjrYuH_uu9UJPZQL1vM4CrKYQLI_FKTVPT7zfocdZzKL1zTJUxwCRw3I1y7V0cg=s96-rw"
          alt="Madden NFL 25 Logo"
        />

        <h1 className="text-2xl font-bold text-[#C41E3A] text-center uppercase mb-2 tracking-wide">
          Madden NFL 25 Ultimate Coin Generator
        </h1>
        <div className="text-[#FFB612] text-lg font-medium text-center uppercase tracking-wide mb-8">
          🏈 Get Unlimited Coins Now! 🏈
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-white font-semibold mb-2">
              Your Madden NFL 25 Username/ID:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#013369] bg-white text-gray-800 focus:border-[#FFB612] focus:outline-none focus:ring-2 focus:ring-[#FFB612]/20 transition-all"
              placeholder="Enter your username or ID"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Select Your Platform:
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handlePlatformSelect('Android')}
                className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                  selectedPlatform === 'Android'
                    ? 'border-[#FFB612] bg-[#FFB612]/15'
                    : 'border-[#013369] bg-[#013369]/10'
                } hover:bg-[#013369]/20 transition-all`}
              >
                <span className="text-2xl">📱</span>
                <span className="text-white text-sm mt-1">Android</span>
              </button>
              <button
                onClick={() => handlePlatformSelect('iOS')}
                className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                  selectedPlatform === 'iOS'
                    ? 'border-[#FFB612] bg-[#FFB612]/15'
                    : 'border-[#013369] bg-[#013369]/10'
                } hover:bg-[#013369]/20 transition-all`}
              >
                <span className="text-2xl">🍏</span>
                <span className="text-white text-sm mt-1">iOS</span>
              </button>
              <button
                onClick={() => handlePlatformSelect('PC')}
                className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                  selectedPlatform === 'PC'
                    ? 'border-[#FFB612] bg-[#FFB612]/15'
                    : 'border-[#013369] bg-[#013369]/10'
                } hover:bg-[#013369]/20 transition-all`}
              >
                <span className="text-2xl">💻</span>
                <span className="text-white text-sm mt-1">PC</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Select Rewards (Select one or more):
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleGiftSelect('coins')}
                className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                  selectedGifts.includes('coins')
                    ? 'border-[#FFB612] bg-[#FFB612]/15'
                    : 'border-[#013369] bg-[#013369]/10'
                } hover:bg-[#013369]/20 transition-all`}
              >
                <span className="text-2xl">🪙</span>
                <span className="text-white text-sm mt-1">Coins</span>
              </button>
              <button
                onClick={() => handleGiftSelect('players')}
                className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                  selectedGifts.includes('players')
                    ? 'border-[#FFB612] bg-[#FFB612]/15'
                    : 'border-[#013369] bg-[#013369]/10'
                } hover:bg-[#013369]/20 transition-all`}
              >
                <span className="text-2xl">🏈</span>
                <span className="text-white text-sm mt-1">Players</span>
              </button>
              <button
                onClick={() => handleGiftSelect('packs')}
                className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                  selectedGifts.includes('packs')
                    ? 'border-[#FFB612] bg-[#FFB612]/15'
                    : 'border-[#013369] bg-[#013369]/10'
                } hover:bg-[#013369]/20 transition-all`}
              >
                <span className="text-2xl">📦</span>
                <span className="text-white text-sm mt-1">Packs</span>
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 px-6 bg-[#C41E3A] hover:bg-[#a70000] text-white font-bold rounded-xl uppercase tracking-wide transition-all transform hover:-translate-y-0.5 active:scale-98 animate-pulse"
          >
            Generate Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;