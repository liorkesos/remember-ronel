import React, { useState } from 'react';
import { SectionId, Memory } from '../types';
import { refineMemoryText } from '../services/geminiService';
import { Send, Sparkles, Loader2 } from 'lucide-react';

export const MemoryWall: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>([
    { id: '1', author: 'חבר מהצוות', content: 'רונאל היה הלב של הפלוגה. תמיד עם חיוך, תמיד ראשון לעזור. לא נתפס שאתה לא כאן.', date: '2023-11-01' },
    { id: '2', author: 'משפחת כהן', content: 'תודה על האור שהפצת בעולם. לא נשכח אותך לעולם.', date: '2023-12-15' },
  ]);
  const [newMemory, setNewMemory] = useState('');
  const [author, setAuthor] = useState('');
  const [isRefining, setIsRefining] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemory.trim() || !author.trim()) return;

    setIsRefining(true);
    
    // Use Gemini to check/refine the text (Simulating a server-side process here)
    const refinedText = await refineMemoryText(newMemory);
    
    const memory: Memory = {
      id: Date.now().toString(),
      author: author,
      content: refinedText,
      date: new Date().toISOString().split('T')[0],
      isAiRefined: refinedText !== newMemory
    };

    setMemories([memory, ...memories]);
    setNewMemory('');
    setAuthor('');
    setIsRefining(false);
  };

  return (
    <section id={SectionId.MEMORIES} className="py-20 bg-memorial-dark text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-memorial-gold mb-4">כותבים לרונאל</h2>
          <p className="text-gray-300">שתפו זכרון, מחשבה או מילות פרידה</p>
        </div>

        {/* Input Form */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">שם מלא</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-memorial-gold"
                placeholder="השם שלך..."
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">הזכרון שלך</label>
              <textarea
                id="content"
                value={newMemory}
                onChange={(e) => setNewMemory(e.target.value)}
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-memorial-gold"
                placeholder="כתבו כאן..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isRefining}
              className="w-full bg-memorial-gold hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isRefining ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  מעבד טקסט...
                </>
              ) : (
                <>
                  <Send size={20} />
                  שליחת זכרון
                </>
              )}
            </button>
            <div className="text-xs text-center text-gray-500 flex items-center justify-center gap-1 mt-2">
              <Sparkles size={12} />
              <span>הטקסט נבדק ועובר הגהה קלה באמצעות בינה מלאכותית לשמירה על כבוד המעמד</span>
            </div>
          </form>
        </div>

        {/* Memories List */}
        <div className="space-y-6">
          {memories.map((mem) => (
            <div key={mem.id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-r-4 border-memorial-gold">
              <p className="text-lg mb-4 leading-relaxed whitespace-pre-line">"{mem.content}"</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="font-bold text-gray-200">{mem.author}</span>
                <span>{mem.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
