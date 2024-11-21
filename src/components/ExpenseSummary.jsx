import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import styles from './ExpenseSummary.module.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LegendComponent = ({ data }) => (
  <ul className={styles.legend}>
    {data.map((entry, index) => (
      <li key={entry.name}>
        <span className={styles.legendColor} style={{ backgroundColor: COLORS[index % COLORS.length] }} />
        {entry.name}
      </li>
    ))}
  </ul>
);

const ExpenseSummary = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const found = acc.find(item => item.name === expense.category);
    if (found) {
      found.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <h2>Expenses</h2>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className={styles.legendContainer}>
        <LegendComponent data={data} />
      </div>
    </div>
  );
};

export default ExpenseSummary;
