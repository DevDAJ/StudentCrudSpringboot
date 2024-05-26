import axios from 'axios';
import { STUDENT_URL } from '../urls';

interface IStudents {
  name: string;
  address?: string;
  gender: 'M' | 'F';
  dob?: Date;
  email?: string;
  mobile?: string;
  phone?: string;
}

const getStudents = () => axios.get<Array<IStudents & { id: number }>>(`${STUDENT_URL}/list`);

const getStudent = (id: number) => axios.get<IStudents & { id: number }>(`${STUDENT_URL}/${id}`);

const addStudent = (data: IStudents) => axios.post(`${STUDENT_URL}/add`, data);

const updateStudent = (id: number, data: IStudents) => axios.patch(`${STUDENT_URL}/${id}`, data);

const deleteStudent = (id: number) => axios.delete(`${STUDENT_URL}/${id}`);

export { addStudent, deleteStudent, getStudent, getStudents, updateStudent };
