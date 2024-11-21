import React from 'react';
import styles from './ExpenseList.module.css';

const ExpenseList = ({ expenses, editExpense, deleteExpense}) => (
  <div className={styles.expenseList}>
    <h1>Recent Transactions</h1>
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          <span>{expense.title} - ₹ {expense.amount} - {expense.category} - {expense.date}</span>
          <div>
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;
