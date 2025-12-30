
import React, { useState, useRef, useEffect } from 'react';
import { getAdminAssistance } from '../services/geminiService';
import { mockStudents, mockTeachers, mockPayments } from '../mockData';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Olá! Sou o Assistente Inteligente do IMEL. Como posso ajudar com a gestão escolar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const context = {
      numStudents: mockStudents.length,
      numTeachers: mockTeachers.length,
      totalPayments: mockPayments.length,
      activeStudents: mockStudents.filter(s => s.status === 'Ativo').map(s => s.name)
    };

    const aiResponse = await getAdminAssistance(userMessage, context);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse || 'Não consegui processar.' }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-180px)]">
      <div className="p-6 border-b border-slate-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h3 className="text-lg font-bold">Assistente Administrativo Gemini</h3>
        <p className="text-sm opacity-90">Análise de dados, relatórios e automação de comunicados.</p>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-150"></div>
              </div>
              <span className="text-xs text-slate-400 font-medium">Analisando dados do IMEL...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ex: 'Redija um comunicado para os alunos sobre as provas' ou 'Qual o resumo financeiro?'" 
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
