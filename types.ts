
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  STUDENTS = 'STUDENTS',
  TEACHERS = 'TEACHERS',
  ACADEMIC = 'ACADEMIC',
  FINANCE = 'FINANCE',
  AI_ASSISTANT = 'AI_ASSISTANT',
  SETTINGS = 'SETTINGS'
}

export interface Student {
  id: string;
  name: string;
  course: string;
  year: number;
  status: 'Ativo' | 'Pendente' | 'Inativo';
  avatar: string;
  lastPayment: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  classes: string[];
  photo: string;
}

export interface Grade {
  subject: string;
  mac: number;
  npp: number;
  npt: number;
  media: number;
}

export interface AcademicRecord {
  studentId: string;
  studentName: string;
  grades: Grade[];
}

export interface PaymentRecord {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  date: string;
  method: 'Multicaixa' | 'Transferência' | 'Depósito';
  status: 'Pago' | 'Atrasado';
}
