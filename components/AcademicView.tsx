
import React from 'react';
import { mockAcademicRecords } from '../mockData';

const AcademicView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Pautas de Avaliação</h2>
          <p className="text-slate-500">Lançamento e consulta de notas trimestrais.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option>12ª Classe - Contabilidade</option>
            <option>11ª Classe - Economia</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Lançar Notas</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-white text-xs font-bold uppercase">
            <tr>
              <th className="px-6 py-4">Estudante</th>
              <th className="px-6 py-4">Disciplina</th>
              <th className="px-6 py-4 text-center">MAC</th>
              <th className="px-6 py-4 text-center">NPP</th>
              <th className="px-6 py-4 text-center">NPT</th>
              <th className="px-6 py-4 text-center">Média</th>
              <th className="px-6 py-4 text-center">Resultado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockAcademicRecords.flatMap(record => 
              record.grades.map((g, idx) => (
                <tr key={`${record.studentId}-${idx}`} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">
                    {idx === 0 ? record.studentName : ''}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{g.subject}</td>
                  <td className="px-6 py-4 text-center font-medium">{g.mac.toFixed(1)}</td>
                  <td className="px-6 py-4 text-center font-medium">{g.npp.toFixed(1)}</td>
                  <td className="px-6 py-4 text-center font-medium">{g.npt.toFixed(1)}</td>
                  <td className={`px-6 py-4 text-center font-bold ${g.media < 10 ? 'text-red-600' : 'text-blue-600'}`}>
                    {g.media.toFixed(1)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                      g.media >= 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {g.media >= 10 ? 'APROVADO' : 'REPROVADO'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicView;
