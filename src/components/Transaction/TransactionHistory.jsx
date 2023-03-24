import css from './TransactionHistory.module.css';
import { TransactionBody } from './TransactionBody';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <TransactionBody transactions={transactions} />
    </table>
  );
};
