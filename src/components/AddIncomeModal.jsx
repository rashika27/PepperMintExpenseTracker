// src/components/AddIncomeModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './AddIncomeModal.module.css';

const AddIncomeModal = ({ isOpen, onClose, addIncome }) => {
  const [amount, setAmount] = useState('');

  const handleAddIncome = () => {
    if (amount > 0) {
      addIncome(parseFloat(amount));
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Add Balance</h2>
      <div className={styles.formGroup}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddIncome}>Add Income</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default AddIncomeModal;
