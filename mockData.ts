
import { Student, Teacher, PaymentRecord, AcademicRecord } from './types';

export const mockStudents: Student[] = [
  { id: '2024001', name: 'João Manuel Domingos', course: 'Contabilidade e Gestão', year: 12, status: 'Ativo', avatar: 'https://i.pravatar.cc/150?u=joao', lastPayment: '2024-05-10' },
  { id: '2024002', name: 'Maria Isabel Katia', course: 'Economia', year: 11, status: 'Ativo', avatar: 'https://i.pravatar.cc/150?u=maria', lastPayment: '2024-05-12' },
  { id: '2024003', name: 'António Luamba', course: 'Gestão de Empresas', year: 13, status: 'Pendente', avatar: 'https://i.pravatar.cc/150?u=antonio', lastPayment: '2024-04-15' },
  { id: '2024004', name: 'Suzana Pedro', course: 'Contabilidade e Gestão', year: 10, status: 'Ativo', avatar: 'https://i.pravatar.cc/150?u=suzana', lastPayment: '2024-05-01' },
];

export const mockTeachers: Teacher[] = [
  { id: 'T001', name: 'Ricardo Silva', subject: 'Macroeconomia', email: 'r.silva@imel.edu.ao', classes: ['12A', '12B'], photo: 'https://i.pravatar.cc/150?u=ricardo' },
  { id: 'T002', name: 'Helena Baptista', subject: 'Contabilidade Analítica', email: 'h.baptista@imel.edu.ao', classes: ['13A', '13C'], photo: 'https://i.pravatar.cc/150?u=helena' },
  { id: 'T003', name: 'Mateus Dala', subject: 'Estatística Aplicada', email: 'm.dala@imel.edu.ao', classes: ['11A', '12A'], photo: 'https://i.pravatar.cc/150?u=mateus' },
];

export const mockPayments: PaymentRecord[] = [
  { id: 'REC-001', studentId: '2024001', studentName: 'João Manuel Domingos', amount: 15000, date: '2024-05-10', method: 'Multicaixa', status: 'Pago' },
  { id: 'REC-002', studentId: '2024002', studentName: 'Maria Isabel Katia', amount: 15000, date: '2024-05-12', method: 'Transferência', status: 'Pago' },
  { id: 'REC-003', studentId: '2024003', studentName: 'António Luamba', amount: 15000, date: '2024-04-15', method: 'Depósito', status: 'Atrasado' },
];

export const mockAcademicRecords: AcademicRecord[] = [
  {
    studentId: '2024001',
    studentName: 'João Manuel Domingos',
    grades: [
      { subject: 'Macroeconomia', mac: 14, npp: 12, npt: 15, media: 13.6 },
      { subject: 'Contabilidade', mac: 16, npp: 14, npt: 17, media: 15.6 },
    ]
  },
  {
    studentId: '2024002',
    studentName: 'Maria Isabel Katia',
    grades: [
      { subject: 'Macroeconomia', mac: 09, npp: 10, npt: 08, media: 9.0 },
      { subject: 'Contabilidade', mac: 12, npp: 11, npt: 13, media: 12.0 },
    ]
  }
];
