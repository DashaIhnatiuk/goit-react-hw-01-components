import transactions from './transactions.json';
import './Table.css';

function TableList() {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {    transactions.map(item =>(
        <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    ))}
  </tbody>
</table>
    );
}

export default TableList;

