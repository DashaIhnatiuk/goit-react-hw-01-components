import { Component } from "react";
import PropTypes from "prop-types";
import "./Table.css";

class TableList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };


  render() {
    const {data} = this.props;
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
          {data.map((item) => (
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
}

export default TableList;
