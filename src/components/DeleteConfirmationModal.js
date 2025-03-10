import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal show={open} onHide={onClose} centered>
      <Modal.Header className="border-0">
        <Modal.Title className="text-end w-100">حذف محصول</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-end">
        آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟
      </Modal.Body>
      <Modal.Footer className="justify-content-end border-0">
        <Button variant="secondary" onClick={onClose}>
          انصراف
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          بله، حذف کن
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
