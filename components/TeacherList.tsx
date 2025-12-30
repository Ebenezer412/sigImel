
import React from 'react';
import { mockTeachers } from '../mockData';

const TeacherList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Corpo Docente</h2>
          <p className="text-slate-500">Gestão de professores e atribuição de turmas.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
          Vincular Professor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTeachers.map(teacher => (
          <div key={teacher.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <img src={teacher.photo} alt={teacher.name} className="w-16 h-16 rounded-full border-2 border-slate-100 object-cover" />
              <div>
                <h4 className="font-bold text-slate-800">{teacher.name}</h4>
                <p className="text-xs text-blue-600 font-semibold">{teacher.subject}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>📧</span> {teacher.email}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>🏫</span> Turmas: {teacher.classes.join(', ')}
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-slate-50">
              <button className="flex-1 text-xs font-bold py-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100">Perfil</button>
              <button className="flex-1 text-xs font-bold py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">Horário</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
