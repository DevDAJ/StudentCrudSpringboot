import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Row, createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Button, Container, Form } from 'react-bootstrap';
import { addStudent, deleteStudent, getStudents, updateStudent } from '../api/students';
import Modal from '../components/modal';
import Table from '../components/table';
import { useState } from 'react';
import { Formik, useFormikContext } from 'formik';

type Students = Awaited<ReturnType<typeof getStudents>>['data'][0];

// Forms
function StudentInfoForm() {
  const { values, handleChange } = useFormikContext<StudentData>();
  return (
    <>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={values.name}
          required
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          value={values.address}
          type="text"
          name="address"
          placeholder="Enter address"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Select value={values.gender} name="gender" onChange={handleChange}>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          value={values.dob?.toString()}
          type="date"
          name="dob"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={values.email}
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={values.mobile}
          type="text"
          name="mobile"
          placeholder="Enter mobile"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          value={values.phone}
          type="text"
          name="phone"
          placeholder="Enter phone"
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
}
// Table
function CellActions({ row }: Readonly<{ row: Row<Students> }>) {
  const style = { margin: '0 5px' };
  const [modal, setModal] = useState<string>();
  const queryCache = useQueryClient();
  const { mutate: update } = useMutation({
    mutationFn: (data: StudentData) => updateStudent(row.original.id, data),
    onSuccess: () => {
      setModal(undefined);
      queryCache.invalidateQueries({ queryKey: ['all students'] });
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: () => deleteStudent(row.original.id),
    onSuccess: () => {
      setModal(undefined);
      queryCache.invalidateQueries({ queryKey: ['all students'] });
    },
  });

  return (
    <Formik
      initialValues={row.original}
      onSubmit={(values) => (modal === 'edit' ? update(values) : remove())}
    >
      <>
        <Button variant="primary" style={style} onClick={() => setModal('edit')}>
          Edit
        </Button>
        <Button variant="danger" style={style} onClick={() => setModal('delete')}>
          Delete
        </Button>
        <Modal
          destructive={modal === 'delete'}
          title={modal === 'edit' ? 'Edit Student' : 'Remove Student'}
          handleCloseModal={() => setModal(undefined)}
          showModal={!!modal}
        >
          {modal === 'edit' ? <StudentInfoForm /> : 'Are you sure you want to remove this student?'}
        </Modal>
      </>
    </Formik>
  );
}
const columnHelper = createColumnHelper<Students>();
const columns = [
  columnHelper.accessor('id', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'Name',
  }),
  columnHelper.accessor('address', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'Address',
  }),
  columnHelper.accessor('gender', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'Gender',
  }),
  columnHelper.accessor('dob', {
    cell: ({ getValue }) => (
      <span>{getValue() ? new Date(getValue() ?? 0).toDateString() : '-'}</span>
    ),
    header: 'Date of Birth',
  }),
  columnHelper.accessor('email', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'Email',
  }),
  columnHelper.accessor('mobile', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'Mobile',
  }),
  columnHelper.accessor('phone', {
    cell: ({ getValue }) => <span>{getValue() ?? '-'}</span>,
    header: 'Phone',
  }),
  columnHelper.display({
    id: 'actions',
    cell: ({ row }) => <CellActions row={row} />,
    header: 'Actions',
  }),
];

// Page
type StudentData = Parameters<typeof addStudent>[0];
export default function DefaultPage() {
  const { data, refetch } = useQuery({
    queryKey: ['all students'],
    queryFn: () => getStudents().then(({ data }) => data),
    initialData: [],
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel<Students>(),
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const { mutate: addStudentSubmit } = useMutation({
    mutationFn: (data: StudentData) => addStudent(data),
    onSuccess: () => {
      handleCloseModal();
      refetch();
    },
  });
  return (
    <Container
      style={{
        padding: '40px 20px',
      }}
    >
      <h1>Student List</h1>
      <Button
        variant="primary"
        onClick={handleOpenModal}
        style={{
          margin: '16px 0',
        }}
      >
        Add Student
      </Button>
      <Table<Students> table={table} />
      <Formik
        initialValues={{} as StudentData}
        onSubmit={(values, { resetForm }) => {
          addStudentSubmit(values);
          resetForm();
        }}
      >
        <Modal title="Add Student" handleCloseModal={handleCloseModal} showModal={showModal}>
          <StudentInfoForm />
        </Modal>
      </Formik>
    </Container>
  );
}
