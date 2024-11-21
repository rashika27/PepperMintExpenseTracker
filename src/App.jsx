import React, { useState, useEffect } from 'react';
import WalletBalance from './components/WalletBalance';
import AddExpenseModal from './components/AddExpenseModal';
import ExpenseSection from './components/ExpenseSection';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import { SnackbarProvider } from 'notistack';
import Modal from 'react-modal';
import styles from './App.module.css';

Modal.setAppElement('#root');

const App = () => {
  const [balance, setBalance] = useState(() => parseFloat(localStorage.getItem('balance')) || 0)
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem('expenses')) || []);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  

  const addIncome = (amount) => {
    setBalance(balance + amount);
  };


  const addExpense = (expense) => {
    if (expense.amount <= balance) {
      setExpenses([...expenses, expense]);
      setBalance(balance - expense.amount);
    } else {
      alert('Insufficient balance');
    }
  };

  const editExpense = (index, updatedExpense) => {
    const updatedExpenses = expenses.map((expense, i) => (i === index ? updatedExpense : expense));
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (index) => {
    const expense = expenses[index];
    setBalance(balance + expense.amount);
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  


  return (
    <SnackbarProvider maxSnack={3}>
      <div className={styles.app}>
        <h1>Expense Tracker</h1>
        <div className={styles.firstSection}>
          <WalletBalance balance={balance} addIncome={addIncome} />
          <ExpenseSection openAddExpenseModal={() => setIsAddExpenseModalOpen(true)} />
          <ExpenseSummary expenses={expenses} />
        </div>
        <div className={styles.secondSection}>
        <ExpenseList 
            expenses={expenses} 
            editExpense={editExpense} 
            deleteExpense={deleteExpense} 
          />        
        </div>
        <AddExpenseModal 
          isOpen={isAddExpenseModalOpen} 
          onClose={() => setIsAddExpenseModalOpen(false)} 
          addExpense={addExpense} 
        />
      </div>
    </SnackbarProvider>
  );
};

export default App;
