
import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import AIAssistant from './components/AIAssistant';
import FinanceView from './components/FinanceView';
import AcademicView from './components/AcademicView';
import TeacherList from './components/TeacherList';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.STUDENTS:
        return <StudentList />;
      case ViewType.TEACHERS:
        return <TeacherList />;
      case ViewType.ACADEMIC:
        return <AcademicView />;
      case ViewType.FINANCE:
        return <FinanceView />;
      case ViewType.AI_ASSISTANT:
        return <AIAssistant />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <span className="text-6xl mb-4">🚧</span>
            <h3 className="text-xl font-semibold">Em Desenvolvimento</h3>
            <p>Esta funcionalidade está sendo digitalizada para o IMEL.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 ml-64 p-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Header Bar */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <nav className="flex text-xs text-slate-400 font-medium mb-1 uppercase tracking-widest">
                <span>Portal Administrativo</span>
                <span className="mx-2">/</span>
                <span className="text-blue-600 font-bold">{currentView}</span>
              </nav>
              <h1 className="text-sm font-bold text-slate-800">INSTITUTO MÉDIO DE ECONOMIA DE LUANDA</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-700 uppercase">Servidor Operacional</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm">
                  <span className="text-xl">📅</span>
                </button>
                <button className="relative w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm">
                  <span className="text-xl">🔔</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 border-2 border-white rounded-full text-[8px] flex items-center justify-center text-white font-bold">3</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {renderContent()}
          </div>
        </div>
      </main>
      
      {/* Floating Help Button for quick AI access */}
      {currentView !== ViewType.AI_ASSISTANT && (
        <button 
          onClick={() => setCurrentView(ViewType.AI_ASSISTANT)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50 group border border-slate-700"
        >
          <span className="text-2xl animate-pulse">🤖</span>
          <span className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-bold border border-slate-700 whitespace-nowrap">Assistente IMEL</span>
        </button>
      )}
    </div>
  );
};

export default App;
