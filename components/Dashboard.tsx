
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { mockStudents, mockPayments } from '../mockData';

const data = [
  { name: 'Contabilidade', value: 120 },
  { name: 'Gestão', value: 85 },
  { name: 'Economia', value: 65 },
  { name: 'Estatística', value: 45 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const Dashboard: React.FC = () => {
  const activeStudents = mockStudents.filter(s => s.status === 'Ativo').length;
  const totalRevenue = mockPayments.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Painel de Controle Estratégico</h2>
        <p className="text-slate-500">Bem-vindo à Intranet do IMEL - Luanda.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">👥</div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Alunos</p>
            <h4 className="text-2xl font-bold text-slate-800">{mockStudents.length}</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl">✅</div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Alunos Ativos</p>
            <h4 className="text-2xl font-bold text-slate-800">{activeStudents}</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-2xl">📅</div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pendentes</p>
            <h4 className="text-2xl font-bold text-slate-800">{mockStudents.length - activeStudents}</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl">💰</div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Receita Mensal</p>
            <h4 className="text-2xl font-bold text-slate-800">{totalRevenue.toLocaleString('pt-AO')} Kz</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Distribuição por Cursos</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                   {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200">
              <span className="flex items-center gap-3 font-medium text-slate-700">
                <span>➕</span> Novo Aluno
              </span>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200">
              <span className="flex items-center gap-3 font-medium text-slate-700">
                <span>📑</span> Gerar Pautas
              </span>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200">
              <span className="flex items-center gap-3 font-medium text-slate-700">
                <span>💳</span> Lançar Pagamento
              </span>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200">
              <span className="flex items-center gap-3 font-medium text-slate-700">
                <span>📧</span> Enviar Notificação
              </span>
              <span className="text-slate-400">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
