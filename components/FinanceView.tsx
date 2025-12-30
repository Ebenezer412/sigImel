
import React from 'react';
import { mockPayments } from '../mockData';

const FinanceView: React.FC = () => {
  const totalReceived = mockPayments.filter(p => p.status === 'Pago').reduce((acc, curr) => acc + curr.amount, 0);
  const totalPending = mockPayments.filter(p => p.status === 'Atrasado').reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Gestão Financeira</h2>
          <p className="text-slate-500">Controle de propinas e emolumentos do IMEL.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-700 transition-all flex items-center gap-2">
          <span>🧾</span> Novo Recibo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500 font-medium mb-1">Total Arrecadado (Mês)</p>
          <h4 className="text-3xl font-bold text-green-600">{totalReceived.toLocaleString('pt-AO')} Kz</h4>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500 font-medium mb-1">Pendentes de Pagamento</p>
          <h4 className="text-3xl font-bold text-red-500">{totalPending.toLocaleString('pt-AO')} Kz</h4>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500 font-medium mb-1">Taxa de Adimplência</p>
          <h4 className="text-3xl font-bold text-blue-600">82%</h4>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="font-bold text-slate-800">Histórico de Transações</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase">
            <tr>
              <th className="px-6 py-4">Recibo</th>
              <th className="px-6 py-4">Aluno</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Método</th>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {mockPayments.map((payment) => (
              <tr key={payment.id} className="text-sm hover:bg-slate-50">
                <td className="px-6 py-4 font-mono text-xs">{payment.id}</td>
                <td className="px-6 py-4 font-medium text-slate-700">{payment.studentName}</td>
                <td className="px-6 py-4 font-bold">{payment.amount.toLocaleString('pt-AO')} Kz</td>
                <td className="px-6 py-4 text-slate-500">{payment.method}</td>
                <td className="px-6 py-4 text-slate-500">{payment.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    payment.status === 'Pago' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceView;
