// src/components/WalletBalance.jsx
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import AddIncomeModal from './AddIncomeModal';
import styles from './WalletBalance.module.css';

const WalletBalance = ({ balance, addIncome }) => {
  const [isAddIncomeModalOpen, setIsAddIncomeModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddIncome = (amount) => {
    if (amount > 0) {
      addIncome(amount);
      enqueueSnackbar('Income added successfully!', { variant: 'success' });
    } else {
      enqueueSnackbar('Please enter a valid amount', { variant: 'error' });
    }
  };

  return (
    <div className={styles.walletBalance}>
      <h2>Net Balance: ₹ {balance}</h2>
      <button onClick={() => setIsAddIncomeModalOpen(true)}>+ Add Income</button>
      <AddIncomeModal
        isOpen={isAddIncomeModalOpen}
        onClose={() => setIsAddIncomeModalOpen(false)}
        addIncome={handleAddIncome}
      />
    </div>
  );
};

export default WalletBalance;
