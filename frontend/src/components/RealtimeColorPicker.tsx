import React, { useState, useEffect } from 'react';
import { Palette, X } from 'lucide-react';

export default function RealtimeColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('quartz-light');
  const [primary, setPrimary] = useState('#a3e635');
  const [secondary, setSecondary] = useState('#38bdf8');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'quartz-light';
    setActiveTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const handleSelectPreset = (themeName: string) => {
    setActiveTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('portfolio-theme', themeName);
  };

  const handlePrimaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setPrimary(color);
    document.documentElement.style.setProperty('--accent-blue', color);
  };

  const handleSecondaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setSecondary(color);
    document.documentElement.style.setProperty('--accent-purple', color);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-2xl shadow-blue-500/40 backdrop-blur-md transition-all hover:scale-105"
        title="Customize Colors & Theme"
      >
        <Palette className="w-4 h-4 animate-spin-slow" />
        <span>Palette Engine</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 glass-panel p-5 rounded-2xl border border-blue-500/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800">
            <div className="flex items-center gap-2 font-bold text-sm text-white">
              <Palette className="w-4 h-4 text-blue-400" /> Realtime Colors Presets
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleSelectPreset('manus-midnight')}
              className={`p-2 rounded-xl border text-left flex items-center gap-2 font-medium transition-all ${
                activeTheme === 'manus-midnight'
                  ? 'border-blue-500 bg-blue-500/10 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              Manus Midnight
            </button>

            <button
              onClick={() => handleSelectPreset('cyberpunk-neon')}
              className={`p-2 rounded-xl border text-left flex items-center gap-2 font-medium transition-all ${
                activeTheme === 'cyberpunk-neon'
                  ? 'border-cyan-500 bg-cyan-500/10 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              Cyberpunk
            </button>

            <button
              onClick={() => handleSelectPreset('emerald-tech')}
              className={`p-2 rounded-xl border text-left flex items-center gap-2 font-medium transition-all ${
                activeTheme === 'emerald-tech'
                  ? 'border-emerald-500 bg-emerald-500/10 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              Emerald Tech
            </button>

            <button
              onClick={() => handleSelectPreset('sunset-ember')}
              className={`p-2 rounded-xl border text-left flex items-center gap-2 font-medium transition-all ${
                activeTheme === 'sunset-ember'
                  ? 'border-amber-500 bg-amber-500/10 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              Sunset Ember
            </button>

            <button
              onClick={() => handleSelectPreset('quartz-light')}
              className={`col-span-2 p-2 rounded-xl border text-left flex items-center gap-2 font-medium transition-all ${
                activeTheme === 'quartz-light'
                  ? 'border-lime-500 bg-lime-500/10 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
              Minimal Quartz Light Mode
            </button>
          </div>

          <div className="pt-2 border-t border-gray-800 space-y-2 text-xs">
            <div className="flex items-center justify-between text-gray-400">
              <span>Primary Accent</span>
              <input
                type="color"
                value={primary}
                onChange={handlePrimaryChange}
                className="w-6 h-6 rounded cursor-pointer border-none bg-transparent"
              />
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Secondary Accent</span>
              <input
                type="color"
                value={secondary}
                onChange={handleSecondaryChange}
                className="w-6 h-6 rounded cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
