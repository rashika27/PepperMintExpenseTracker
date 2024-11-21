import React, { useState } from 'react';
import styles from './ExpenseForm.module.css';

const AddExpenseForm = ({ addExpense, onClose }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && category && date) {
      addExpense({ title, amount: parseFloat(amount), category, date });
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Expense</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Amount:</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.categoryDate}>
              <div>
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                  <option value="">Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
              </div>
              <div>
                <label>Date:</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  required 
                />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="submit">Add Expense</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;
