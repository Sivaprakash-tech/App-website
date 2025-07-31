import React, { useEffect, useState } from 'react';
import { Heart, Users, UserX, Star, Frown } from 'lucide-react';

const CollegePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'friends' | 'enemies'>('friends');
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
  const [selectedEnemy, setSelectedEnemy] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const friendsData = {
    sumukhi: {
      name: "Sumukhi",
      description: "Sumukhi is like a ray of sunshine in my life. Her infectious laughter and positive energy brighten even the darkest days. She's incredibly supportive, always there to listen when I need someone to talk to. Her creativity and artistic talents inspire me constantly. She has this amazing ability to see the good in everyone and every situation. Sumukhi's loyalty and genuine friendship mean the world to me. She's the kind of friend who celebrates your victories as if they were her own and stands by you through every challenge."
    },
    harshitha: {
      name: "Harshitha",
      description: "Harshitha is my anchor in the storm of life. Her wisdom and maturity beyond her years never cease to amaze me. She has this incredible gift of giving the most thoughtful advice exactly when I need it. Her determination and hard work ethic motivate me to be better every day. Harshitha's kindness extends to everyone around her, and she has this beautiful way of making people feel valued and heard. She's not just a friend; she's like a sister who understands me without words and supports my dreams unconditionally."
    }
  };

  const enemyData = {
    prakash: {
      name: "Prakash",
      description: "Prakash has been a source of pain and disappointment in my life. His actions and words have left deep wounds that still hurt today. He betrayed my trust when I needed support the most, choosing to spread negativity instead of understanding. His behavior created unnecessary drama and stress during important moments of my life. The way he treated me and spoke about me behind my back was hurtful and unfair. He represents a dark chapter that I'm still healing from, a reminder of how some people can leave lasting scars on your heart."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Header */}
      <header className={`relative z-20 p-8 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="flex items-center space-x-3">
          <Heart className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Sandhya's Circle</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 p-8">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => {
                setActiveTab('friends');
                setSelectedFriend(null);
                setSelectedEnemy(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'friends'
                  ? 'bg-white/20 text-white border-2 border-white/30'
                  : 'bg-white/10 text-purple-200 border-2 border-transparent hover:bg-white/15'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>My Friends</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('enemies');
                setSelectedFriend(null);
                setSelectedEnemy(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'enemies'
                  ? 'bg-white/20 text-white border-2 border-white/30'
                  : 'bg-white/10 text-purple-200 border-2 border-transparent hover:bg-white/15'
              }`}
            >
              <UserX className="w-5 h-5" />
              <span>My Enemies</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 min-h-[500px]">
            
            {/* Friends Tab */}
            {activeTab === 'friends' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">My Amazing Friends</h2>
                </div>
                
                {!selectedFriend ? (
                  <div className="space-y-4">
                    <p className="text-purple-100 mb-6">Choose a friend to read about them:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(friendsData).map(([key, friend]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedFriend(key)}
                          className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 border border-white/20 rounded-xl p-6 text-left transition-all duration-300 transform hover:scale-105"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                              <Heart className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">{friend.name}</h3>
                              <p className="text-purple-200">Click to read more</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <button
                      onClick={() => setSelectedFriend(null)}
                      className="text-purple-300 hover:text-white transition-colors duration-300"
                    >
                      ← Back to friends list
                    </button>
                    <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-4">{friendsData[selectedFriend as keyof typeof friendsData].name}</h3>
                      <p className="text-purple-100 leading-relaxed text-lg">
                        {friendsData[selectedFriend as keyof typeof friendsData].description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Enemies Tab */}
            {activeTab === 'enemies' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Frown className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">My Enemies</h2>
                </div>
                
                {!selectedEnemy ? (
                  <div className="space-y-4">
                    <p className="text-purple-100 mb-6">Those who have caused pain:</p>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(enemyData).map(([key, enemy]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedEnemy(key)}
                          className="bg-gradient-to-r from-red-500/20 to-gray-500/20 hover:from-red-500/30 hover:to-gray-500/30 border border-red-400/20 rounded-xl p-6 text-left transition-all duration-300 transform hover:scale-105"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-gray-600 rounded-full flex items-center justify-center">
                              <UserX className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">{enemy.name}</h3>
                              <p className="text-red-200">Click to read more</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <button
                      onClick={() => setSelectedEnemy(null)}
                      className="text-purple-300 hover:text-white transition-colors duration-300"
                    >
                      ← Back to enemies list
                    </button>
                    <div className="bg-gradient-to-r from-red-500/10 to-gray-500/10 rounded-xl p-6 border border-red-400/10">
                      <h3 className="text-2xl font-bold text-white mb-4">{enemyData[selectedEnemy as keyof typeof enemyData].name}</h3>
                      <p className="text-red-100 leading-relaxed text-lg">
                        {enemyData[selectedEnemy as keyof typeof enemyData].description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <p className="text-purple-200 italic text-lg">
                "The people in our lives shape who we become. Some lift us up with their love and support, while others teach us resilience through the challenges they bring. Both have their place in our story."
              </p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                <span className="text-purple-300 text-sm">Sandhya's Personal Reflections</span>
                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute w-6 h-6 text-pink-300 opacity-30 animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CollegePage;