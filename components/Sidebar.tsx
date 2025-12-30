
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { type: ViewType.DASHBOARD, label: 'Painel Geral', icon: '📊' },
    { type: ViewType.STUDENTS, label: 'Gestão de Alunos', icon: '🎓' },
    { type: ViewType.TEACHERS, label: 'Corpo Docente', icon: '👨‍🏫' },
    { type: ViewType.ACADEMIC, label: 'Registros Académicos', icon: '📝' },
    { type: ViewType.FINANCE, label: 'Financeiro', icon: '💰' },
    { type: ViewType.AI_ASSISTANT, label: 'Assistente IA', icon: '🤖' },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen fixed left-0 top-0 text-white flex flex-col z-20">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">I</div>
        <div>
          <h1 className="font-bold text-lg leading-tight">IMEL</h1>
          <p className="text-xs text-slate-400">Sistema Interno</p>
        </div>
      </div>
      
      <nav className="flex-1 mt-6 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.type}
            onClick={() => onViewChange(item.type)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentView === item.type 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-2 bg-slate-800 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-slate-600"></div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">Admin User</p>
            <p className="text-xs text-slate-400">Secretaria</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
