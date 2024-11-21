import React from 'react';
import styles from './ExpenseSection.module.css';

const ExpenseSection = ({ openAddExpenseModal }) => {
  return (
    <div className={styles.expenseSection}>
      <h2>Expenses</h2>
      <button onClick={openAddExpenseModal}>Add Expense</button>
    </div>
  );
};

export default ExpenseSection;
