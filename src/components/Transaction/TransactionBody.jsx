import PropType from 'prop-types';

export const TransactionBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

TransactionBody.propType = {
  id: PropType.number,
  type: PropType.string,
  amount: PropType.number,
  currency: PropType.string,
};
