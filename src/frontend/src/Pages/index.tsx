import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { getStudents } from '../api/students';
import { useQuery } from '@tanstack/react-query';


type Students = Awaited<ReturnType<typeof getStudents>>['data'][0];
export default function DefaultPage(){
//   const [showModal, setShowModal] = useState(false);

  const {data: students} = useQuery({
    queryKey: ["all students"],
    queryFn: () => getStudents().then(({data}) => data)
  })

  const keys = Object.keys(students?.[0] ?? {});
  return (
    <div>
      <h1>Student List</h1>
      <Button variant="primary">
        Add Student
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            {keys.map((key) => <th>{key.toUpperCase()}</th>)}
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students?.map(student => <tr>
            {keys.map((key) => <td>{student[key as keyof typeof student]?.toString() ?? '-'}</td>
           )}
            <td> 
            <Button >
                Edit
              </Button>
              <Button variant='danger'>
                Delete
              </Button>
            </td>
            </tr>)}
           
        </tbody>
      </Table>

      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formStudentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student name"
                value={newStudentName}
                onChange={e => setNewStudentName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formStudentGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student grade"
                value={newStudentGrade}
                onChange={e => setNewStudentGrade(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" >
            Add Student
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};
