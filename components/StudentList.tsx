
import React from 'react';
import { mockStudents } from '../mockData';

const StudentList: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Lista Geral de Alunos</h3>
          <p className="text-sm text-slate-500">Gestão e filtragem de estudantes matriculados.</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Procurar aluno..." 
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
            + Adicionar Aluno
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Estudante</th>
              <th className="px-6 py-4">ID / Matrícula</th>
              <th className="px-6 py-4">Curso</th>
              <th className="px-6 py-4">Ano</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {mockStudents.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={student.avatar} alt="" className="w-9 h-9 rounded-full bg-slate-200 object-cover" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{student.name}</p>
                      <p className="text-xs text-slate-500">imel.edu.ao</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-600">{student.id}</td>
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{student.course}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{student.year}º Ano</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                    student.status === 'Ativo' ? 'bg-green-100 text-green-700' : 
                    student.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors" title="Editar">✏️</button>
                    <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors" title="Suspender">🚫</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-slate-50 text-center">
        <button className="text-sm text-blue-600 font-semibold hover:underline">Carregar mais registros...</button>
      </div>
    </div>
  );
};

export default StudentList;
