import { Component } from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const TableList = ({ data }) => {
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
};

TableList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableList;
