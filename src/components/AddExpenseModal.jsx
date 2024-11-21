import React from 'react';
import Modal from 'react-modal';
import AddExpenseForm from './ExpenseForm';
import styles from './AddExpenseModal.module.css';

const AddExpenseModal = ({ isOpen, onClose, addExpense }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <AddExpenseForm addExpense={addExpense} onClose={onClose} />
  </Modal>
);

export default AddExpenseModal;
