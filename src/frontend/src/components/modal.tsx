import { useFormikContext } from 'formik';
import { Modal as BSModal, Button, Form } from 'react-bootstrap';

interface ModalProps {
  title: string;
  handleCloseModal: () => void;
  showModal: boolean;
  children: React.ReactNode;
  destructive?: boolean;
}
export default function Modal({
  title,
  handleCloseModal,
  showModal,
  children,
  destructive,
}: Readonly<ModalProps>) {
  const { handleSubmit } = useFormikContext();
  return (
    <BSModal show={showModal} onHide={handleCloseModal}>
      <Form onSubmit={handleSubmit}>
        <BSModal.Header closeButton>
          <BSModal.Title>{title}</BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>{children}</BSModal.Body>
        <BSModal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant={destructive ? 'danger' : 'primary'} type="submit">
            {title}
          </Button>
        </BSModal.Footer>
      </Form>
    </BSModal>
  );
}

Modal.defaultProps = {
  destructive: false,
};
